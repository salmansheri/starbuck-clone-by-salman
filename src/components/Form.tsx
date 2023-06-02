"use client";

import React, { FormEvent, useCallback, useState } from "react";
import { signIn } from "next-auth/react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      signIn("credentials", {
        email,
        password,
        callbackUrl: "/"
      });
    },
    [email, password]
  );
  return (
    <div className="bg-white shadow-xl w-[70%] md:w-[40%]">
      <form className="p-10" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-3 my-5">
          <label className="text-xl font-medium">Email: </label>
          <input
            className="border border-darkGreen w-full p-5 focus:outline-darkGreen"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-3 my-5">
          <label className="text-xl font-medium">Password </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-darkGreen w-full p-5 focus:outline-darkGreen"
          />
        </div>
        <div className="flex justify-end">
          <button className="bg-myGreen px-10 py-5  rounded-full inline-flex items-center text-white text-xl font-bold justify-end">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
