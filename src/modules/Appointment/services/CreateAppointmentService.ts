import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";

enum statusConsulta {
  Pendente,
  Concluida,
}
interface ICreateAppointmentDTO {
  date: Date;
  time: string;
  status: statusConsulta;
  client_id: string;
}

@injectable()
export class CreateAppointmentService {
  async execute(requestDate: ICreateAppointmentDTO) {
    const AppointmentAlreadyExist = await prismaClient.company.findUnique({
      where: {
        date: requestDate.date,
      },
    });

    if (AppointmentAlreadyExist) {
      throw new AppError("Data está indisponível");
    }

    if (
      !requestDate.date ||
      !requestDate.time ||
      !requestDate.status ||
      !requestDate.client_id
    ) {
      throw new AppError("Dados Obrigatorios não informado");
    }

    const appointment = await prismaClient.company.create({
      data: requestDate,
    });

    return appointment;
  }
}
