import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";

interface ICreateAppointmentDTO {
  dateAndTime: Date | string;
  avaliation?: string;
  clientId: number;
}

@injectable()
export class CreateAppointmentService {
  async execute(requestDate: ICreateAppointmentDTO) {
    const AppointmentAlreadyExist = await prismaClient.appointment.findUnique({
      where: {
        dateAndTime: requestDate.dateAndTime,
      },
    });

    if (AppointmentAlreadyExist) {
      throw new AppError("Data está indisponível");
    }

    if (!requestDate.dateAndTime || !requestDate.clientId) {
      throw new AppError("Dados Obrigatorios não informado");
    }

    const appointment = await prismaClient.appointment.create({
      data: requestDate,
    });

    return appointment;
  }
}
