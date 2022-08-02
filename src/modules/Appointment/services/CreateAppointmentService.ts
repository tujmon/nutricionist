import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";

enum statusConsulta {
  Pendente,
  Concluida,
}
// model Appointment {
//   id          Int      @id @default(autoincrement())
//   dateAndTime DateTime @unique

//   avaliation Avaliation?

//   client   Client @relation(fields: [clientId], references: [id])
//   clientId Int
// }
interface ICreateAppointmentDTO {
  dateAndTime: Date | string;
  avaliation: string;
  time: string;
  status: statusConsulta;
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

    if (
      !requestDate.dateAndTime ||
      !requestDate.time ||
      !requestDate.status ||
      !requestDate.clientId
    ) {
      throw new AppError("Dados Obrigatorios não informado");
    }

    const appointment = await prismaClient.appointment.create({
      data: requestDate,
    });

    return appointment;
  }
}
