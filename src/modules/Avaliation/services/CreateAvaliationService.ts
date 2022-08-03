import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";

interface ICreateAvaliationDTO {
  weight: number;
  imc: number;
  size: number;
  fat: number;
  height: number;
  date?: Date | string;
  clientId: number;
  appointmentId: number;
}

@injectable()
export class CreateAvaliationService {
  async execute(requestDate: ICreateAvaliationDTO) {
    const AvaliationAlreadyExist = await prismaClient.avaliation.findUnique({
      where: {
        appointmentId: requestDate.appointmentId,
      },
    });

    if (AvaliationAlreadyExist) {
      throw new AppError("Data está indisponível");
    }

    if (
      !requestDate.weight ||
      !requestDate.imc ||
      !requestDate.size ||
      !requestDate.fat ||
      !requestDate.clientId ||
      !requestDate.appointmentId
    ) {
      throw new AppError("Dados Obrigatorios não informado");
    }

    const avaliation = await prismaClient.avaliation.create({
      data: requestDate,
    });

    return avaliation;
  }
}
