"use server";
import { createUser } from "@/lib/user";
import { FormState, SignupFormSchema } from "../../lib/definitions";
import { redirect } from "next/navigation";

function getStringFormValue(
  formData: FormData,
  key: string
): string | undefined {
  const formValue = formData.get(key);
  return typeof formValue === "string" ? formValue : undefined;
}

export async function signup(state: FormState, formData: FormData) {
  const values: NonNullable<FormState>["values"] = {
    username: getStringFormValue(formData, "username"),
    password: getStringFormValue(formData, "password"),
  };
  const validatedFields = SignupFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      values,
    };
  }

  try {
    const { username, password } = validatedFields.data;
    const data = await createUser({
      username,
      password,
    });

    console.log(data);
    if ("message" in data) {
      return {
        message: data.message ?? "login failed",
        values,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      message: "login failed",
      values,
    };
  }
  redirect("/");
}
