import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";

@injectable()
export class ListFoodsService {
  async execute() {
    const food = await prismaClient.food.findMany();

    return food;
  }
}