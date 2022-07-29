import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";

interface ICreateClientDTO {
  name: string;
  telephone: string;
  email: string;
}

@injectable()
export class CreateClientService {
  async execute(requestDate: ICreateClientDTO) {
    const companyAlreadyExist = await prismaClient.company.findUnique({
      where: {
        email: requestDate.email,
      },
    });

    if (companyAlreadyExist) {
      throw new AppError("email já cadastrado");
    }

    if (!requestDate.name || !requestDate.telephone || !requestDate.email) {
      throw new AppError("Dados Obrigatorios não informado");
    }

    const client = await prismaClient.company.create({
      data: requestDate,
    });

    return client;
  }
}
