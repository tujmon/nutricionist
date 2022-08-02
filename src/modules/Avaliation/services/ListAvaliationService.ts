import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";

@injectable()
export class ListAvaliationsService {
  async execute() {
    const avaliation = await prismaClient.avaliation.findMany();

    return avaliation;
  }
}
