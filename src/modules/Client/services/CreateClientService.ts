import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";

interface ICreateClientDTO {
  name: string;
  phone: string;
  email: string;
  nutricionistId: number;
  avaliations: [];
  appointments: [];
  diets: [];
}

@injectable()
export class CreateClientService {
  async execute(requestDate: ICreateClientDTO) {
    const clientAlreadyExist = await prismaClient.client.findUnique({
      where: {
        email: requestDate.email,
      },
    });

    if (clientAlreadyExist) {
      throw new AppError("email já cadastrado");
    }

    if (
      !requestDate.name ||
      !requestDate.phone ||
      !requestDate.email ||
      !requestDate.nutricionistId
    ) {
      throw new AppError("Dados Obrigatorios não informado");
    }

    const client = await prismaClient.client.create({
      data: requestDate,
    });

    return client;
  }
}
