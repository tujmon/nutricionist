import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";

interface ICreateAvaliationDTO {
  weight: Date;
  bmi: string;
  size: string;
  fat: string;
  client_id: string;
  appointment_id: string;
  date: string;
}

@injectable()
export class CreateAvaliationService {
  async execute(requestDate: ICreateAvaliationDTO) {
    const AvaliationAlreadyExist = await prismaClient.company.findUnique({
      where: {
        date: requestDate.date,
      },
    });

    if (AvaliationAlreadyExist) {
      throw new AppError("Data está indisponível");
    }

    if (
      !requestDate.weight ||
      !requestDate.bmi ||
      !requestDate.size ||
      !requestDate.fat ||
      !requestDate.client_id ||
      !requestDate.appointment_id ||
      !requestDate.date
    ) {
      throw new AppError("Dados Obrigatorios não informado");
    }

    const avaliation = await prismaClient.company.create({
      data: requestDate,
    });

    return avaliation;
  }
}
