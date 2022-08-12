import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";

@injectable()
export class ListAppointmentsService {
  async execute() {
    const appointment = await prismaClient.appointment.findMany({
      include: {
        client: true,
      },
    });

    return appointment;
  }
}
