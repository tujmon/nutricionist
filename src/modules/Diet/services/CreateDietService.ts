import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";

interface ICreateDietDTO {
  calories: string;
  type: string;
  status: string;
  client_id: string;
}

@injectable()
export class CreateDietService {
  async execute(requestDate: ICreateDietDTO) {
    const DietAlreadyExist = await prismaClient.company.findUnique({
      where: {
        client_id: requestDate.client_id,
      },
    });

    if (DietAlreadyExist) {
      throw new AppError("Data está indisponível");
    }

    if (
      !requestDate.calories ||
      !requestDate.type ||
      !requestDate.status ||
      !requestDate.client_id
    ) {
      throw new AppError("Dados Obrigatorios não informado");
    }

    const diet = await prismaClient.company.create({
      data: requestDate,
    });

    return diet;
  }
}
