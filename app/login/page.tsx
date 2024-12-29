"use client";

import { Api } from "@/services/api";
import { FormEvent, useRef } from "react";

export default function Login() {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(
      "email",
      emailRef?.current?.value,
      "password",
      passwordRef?.current?.value,
    );

    console.log("this");

    const res = await Api.post("/users/login", {
      email: emailRef?.current?.value,
      password: passwordRef?.current?.value,
    });

    console.log(res);
  }
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="border-black border flex"
          ref={emailRef}
          type="email"
          name="email"
        />
        <input
          className="border-black border flex"
          ref={passwordRef}
          type="password"
          name="password"
        />
        <button>Log In</button>
      </form>
    </div>
  );
}
