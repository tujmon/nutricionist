import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";

@injectable()
export class GetAvaliationService {
  async execute(appointmentId) {
    const avaliation = await prismaClient.avaliation.findUnique({
      where: {
        appointmentId,
      },
    });
    if (!avaliation) {
      throw new AppError("Avaliation Already exist");
    }
    return avaliation;
  }
}
