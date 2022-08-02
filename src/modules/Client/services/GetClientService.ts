import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";

@injectable()
export class GetClientsService {
  async execute(email) {
    const client = await prismaClient.client.findUnique({
      where: {
        email: email
      }
    });
    if (!client) {
      throw new AppError("Client Already exist");
    }
    return client;
  }
}