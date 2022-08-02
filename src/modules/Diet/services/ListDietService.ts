import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";

@injectable()
export class ListDietsService {
  async execute() {
    const diet = await prismaClient.diet.findMany();

    return diet;
  }
}
