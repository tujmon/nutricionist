import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";

interface ICreateFoodDTO {
  name: string;
  fat: number;
  calories: number;
  carb: number;
  protein: number;
}

@injectable()
export class CreateFoodService {
  async execute(requestDate: ICreateFoodDTO) {
    const FoodAlreadyExist = await prismaClient.food.findUnique({
      where: {
        name: requestDate.name,
      },
    });

    if (FoodAlreadyExist) {
      throw new AppError("Nome já utilizado");
    }

    if (
      !requestDate.name ||
      !requestDate.fat ||
      !requestDate.calories ||
      !requestDate.carb ||
      !requestDate.protein
    ) {
      throw new AppError("Dados Obrigatorios não informado");
    }

    const food = await prismaClient.food.create({
      data: requestDate,
    });

    return food;
  }
}
