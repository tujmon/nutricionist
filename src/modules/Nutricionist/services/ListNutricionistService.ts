import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";

@injectable()
export class ListNutricionistsService {
  async execute() {
    const nutricionist = await prismaClient.nutricionist.findMany();

    return nutricionist;
  }
}
