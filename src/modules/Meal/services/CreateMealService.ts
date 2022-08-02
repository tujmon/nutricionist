import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";

interface ICreateMealDTO {
  name: string;
  fat: number;
  calories: number;
  carb: number;
  protein: number;
}

@injectable()
export class CreateMealService {
  async execute(requestDate: ICreateMealDTO) {
    const MealAlreadyExist = await prismaClient.meal.findUnique({
      where: {
        name: requestDate.name,
      },
    });

    if (MealAlreadyExist) {
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

    const meal = await prismaClient.meal.create({
      data: requestDate,
    });

    return meal;
  }
}
