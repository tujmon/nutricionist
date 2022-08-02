import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";

@injectable()
export class GetClientsService {
  async execute(request) {
    const client = await prismaClient.client.findUnique({
      where: {
        email: request.email,
      },
    });
    if (!client) {
      throw new AppError("Client Already exist");
    }
    return client;
  }
}
