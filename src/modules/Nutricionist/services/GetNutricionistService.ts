import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";

@injectable()
export class GetNutricionistService {
  async execute(request) {
    const nutricionist = await prismaClient.nutricionist.findUnique({
      where: {
        email: request.email,
      },
    });
    if (!nutricionist) {
      throw new AppError("Nutricionist Already exist");
    }
    return nutricionist;
  }
}
