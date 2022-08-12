import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";

@injectable()
export class GetMealService {
  async execute(name) {
    const meal = await prismaClient.meal.findUnique({
      where: {
        name,
      },
    });
    if (!meal) {
      throw new AppError("meal Already exist");
    }
    return meal;
  }
}
