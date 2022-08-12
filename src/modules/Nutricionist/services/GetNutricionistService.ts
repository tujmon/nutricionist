import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";

@injectable()
export class GetNutricionistService {
  async execute(email) {
    const nutricionist = await prismaClient.nutricionist.findUnique({
      where: {
        email,
      },
    });
    if (!nutricionist) {
      throw new AppError("Nutricionist Already exist");
    }
    return nutricionist;
  }
}
