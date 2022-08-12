import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";

@injectable()
export class GetDietService {
  async execute(clientId) {
    const diet = await prismaClient.diet.findUnique({
      where: {
        clientId,
      },
      include: {
        meals: {
          include: {
            meal: true,
          },
        },
      },
    });
    if (!diet) {
      throw new AppError("diet Already exists");
    }
    return diet;
  }
}
