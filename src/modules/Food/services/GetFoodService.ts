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
      throw new AppError("Food Already exist");
    }
    return food;
  }
}
