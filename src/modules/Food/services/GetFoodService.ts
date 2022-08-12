import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";

@injectable()
export class GetFoodService {
  async execute(request) {
    const food = await prismaClient.food.findUnique({
      where: {
        name: request.name,
      },
    });
    if (!food) {
      throw new AppError("food Already exist");
    }
    return food;
  }
}
