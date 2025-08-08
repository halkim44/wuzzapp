import { z } from "zod";

export const SignupFormSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters long." })
    .trim(),
  password: z
    .string()
    .min(9, { message: "Be at least 8 characters long" })
    .regex(/[a-zA-Z]/, { message: "Contains at least one letters." })
    .regex(/[0-9]/, { message: "Contains at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Contain at least one special character.",
    })
    .trim(),
});

export type FormState =
  | {
      errors?: {
        username?: string[];
        password?: string[];
      };
      message?: string;
      values: {
        username?: string;
        password?: string;
      };
    }
  | undefined;

export type SessionPayload = {
  userId: string;
  expiresAt: Date;
};
