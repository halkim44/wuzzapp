import { PrismaClient, Prisma } from "../src/generated/prisma";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    username: "Halkim",
    password: "BatmanBinSuparman",
  },
  {
    username: "Ikumi",
    password: "BatmanBinSuparman",
  },
  {
    username: "doraemon",
    password: "BatmanBinSuparman",
  },
];

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
}

main();
