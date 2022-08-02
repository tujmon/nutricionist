import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";

@injectable()
export class GetDietService {
  async execute(request) {
    const diet = await prismaClient.diet.findUnique({
      where: {
        clientId: request.clientId,
      },
    });
    if (!diet) {
      throw new AppError("diet Already exists");
    }
    return diet;
  }
}
