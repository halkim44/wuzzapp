"use client";
import { signup } from "@/app/actions/auth";
import { useActionState } from "react";

export default function SignupForm() {
  const [state, action] = useActionState(signup, undefined);
  return (
    <form action={action}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          placeholder="Username"
          defaultValue={state?.values?.username}
        />
      </div>
      {state?.errors?.username && <p>{state.errors.username}</p>}

      <div>
        <label htmlFor="password">Password</label>
        <input
          name="password"
          id="password"
          type="password"
          defaultValue={state?.values.password}
        />
      </div>
      {state?.errors?.password && (
        <div>
          <p>Password must:</p>
          <ul>
            {state.errors.password.map((error) => (
              <li key={error}> - {error}</li>
            ))}
            <p>{state.errors.password}</p>
          </ul>
        </div>
      )}

      <button type="submit">Sign Up</button>
      {!!state?.message?.length && <p>{state.message}</p>}
    </form>
  );
}
