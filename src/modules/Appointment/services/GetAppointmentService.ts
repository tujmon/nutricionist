import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";

@injectable()
export class GetAppointmentService {
  async execute(request) {
    const appointment = await prismaClient.appointment.findUnique({
      where: {
        dateAndTime: request.dateAndTime,
      },
    });
    if (!appointment) {
      throw new AppError("Appointment Already exist");
    }
    return appointment;
  }
}
