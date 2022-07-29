import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";

interface ICreateNutricionistDTO {
  name: string;
  telephone: string;
  email: string;
  cnn: string;
}

@injectable()
export class CreateNutricionistService {
  async execute(requestDate: ICreateNutricionistDTO) {
    const companyAlreadyExist = await prismaClient.company.findUnique({
      where: {
        cnn: requestDate.cnn,
      },
    });

    if (companyAlreadyExist) {
      throw new AppError("CNN já cadastrado");
    }

    if (
      !requestDate.name ||
      !requestDate.cnn ||
      !requestDate.telephone ||
      !requestDate.email
    ) {
      throw new AppError("Dados Obrigatorios não informado");
    }

    const nutricionist = await prismaClient.company.create({
      data: requestDate,
    });

    return nutricionist;
  }
}
