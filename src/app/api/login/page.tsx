"use client";

import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`email: ${email}`);
    console.log(`password: ${passwd}`);
    setEmail("");
    setPasswd("");
  };

  return (
    <div className="flex items-center justify-center bg-gray-200 flex-1">
      <div className="flex flex-col bg-white w-1/3 rounded-3xl">
        <div className="text-3xl pt-5 pl-5">Login</div>
        <form className="flex flex-col p-3" onSubmit={onSubmit}>
          <input
            type="email"
            className="border border-blue-200 rounded-md m-2 p-2"
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <input
            type="password"
            className="border border-blue-200 rounded-md m-2 p-2"
            placeholder="password"
            onChange={(e) => {
              setPasswd(e.target.value);
            }}
            value={passwd}
          />
          <button type="submit" className="bg-blue-200 rounded-md m-2 p-2">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
