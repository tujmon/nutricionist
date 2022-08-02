import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";

interface ICreateDietDTO {
  calories: number;
  fat: number;
  carb: number;
  protein: number;
  type: string;
  clientId: number;
  meals: []
}

@injectable()
export class CreateDietService {
  async execute(requestDate: ICreateDietDTO) {
    const DietAlreadyExist = await prismaClient.diet.findUnique({
      where: {
        clientId: requestDate.clientId,
      },
    });

    if (DietAlreadyExist) {
      throw new AppError("Data está indisponível");
    }

    if (
      !requestDate.calories ||
      !requestDate.type ||
      !requestDate.fat ||
      !requestDate.carb ||
      !requestDate.protein ||
      !requestDate.clientId
    ) {
      throw new AppError("Dados Obrigatorios não informado");
    }

    const diet = await prismaClient.diet.create({
      data: requestDate,
    });

    return diet;
  }
}
