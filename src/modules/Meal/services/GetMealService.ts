import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";

@injectable()
export class GetMealService {
  async execute(request) {
    const meal = await prismaClient.meal.findUnique({
      where: {
        name: request.name,
      },
    });
    if (!meal) {
      throw new AppError("meal Already exist");
    }
    return meal;
  }
}
