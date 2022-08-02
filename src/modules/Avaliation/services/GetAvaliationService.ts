import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";

@injectable()
export class GetAvaliationService {
  async execute(request) {
    const avaliation = await prismaClient.avaliation.findUnique({
      where: {
        appointmentId: request.appointmentId,
      },
    });
    if (!avaliation) {
      throw new AppError("Avaliation Already exist");
    }
    return avaliation;
  }
}
