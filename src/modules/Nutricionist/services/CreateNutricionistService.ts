import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";

interface ICreateNutricionistDTO {
  name: string;
  phone: string;
  email: string;
  cnn: string;
  clients: []
}

@injectable()
export class CreateNutricionistService {
  async execute(requestDate: ICreateNutricionistDTO) {
    const nutricionistAlreadyExist = await prismaClient.nutricionist.findUnique({
      where: {
        cnn: requestDate.cnn,
      },
    });

    if (nutricionistAlreadyExist) {
      throw new AppError("CNN já cadastrado");
    }

    if (
      !requestDate.name ||
      !requestDate.cnn ||
      !requestDate.phone ||
      !requestDate.email
    ) {
      throw new AppError("Dados Obrigatorios não informado");
    }

    const nutricionist = await prismaClient.nutricionist.create({
      data: requestDate,
    });

    return nutricionist;
  }
}
