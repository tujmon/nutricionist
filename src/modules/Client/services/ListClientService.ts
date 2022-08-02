import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";

@injectable()
export class ListClientsService {
  async execute() {
    const client = await prismaClient.client.findMany();

    return client;
  }
}