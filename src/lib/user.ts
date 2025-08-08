import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
// import { SignupFormSchema } from "@/lib/definitions";

export async function createUser(data: {
  username: string;
  password: string;
}): Promise<{ id: string; username: string } | { message: string }> {
  try {
    const existingUser = await prisma.user.findUnique({
      where: { username: data.username },
    });
    if (existingUser) {
      throw new Error("User already existed.");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const createdUser = await prisma.user.create({
      data: {
        username: data.username,
        password: hashedPassword,
      },
    });

    return {
      id: createdUser.id,
      username: createdUser.username,
    };
  } catch (error) {
    if (error instanceof Error) return { message: error.message };
    return { message: "Failed to create user." };
  }
}
