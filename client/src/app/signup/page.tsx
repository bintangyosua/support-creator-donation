import Navbar from "@/components/auth/navbar";
import React from "react";

export default function Page() {
  return (
    <div className="container mx-auto min-h-screen flex flex-col">
      <Navbar />
      <div className="grid place-items-center w-full mt-52">
        <div className="flex flex-col gap-4 w-full px-5 max-w-[400px]">
          <h1 className="text-3xl sm:text-4xl mb-6 font-bold text-center">
            Selamat Datang
          </h1>
          <input
            type="text"
            name="name"
            placeholder="nama"
            className="bg-gray-100 px-4 py-3 rounded-xl"
          />
          <input
            type="email"
            name="email"
            placeholder="email@gmail.com"
            className="bg-gray-100 px-4 py-3 rounded-xl"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            className="bg-gray-100 px-4 py-3 rounded-xl"
          />
          <span className="text-sm text-gray-500">
            Sudah memiliki Akun? Daftar di{" "}
            <a href="/signin" className="text-purple font-bold">
              sini
            </a>
          </span>
          <button className="bg-purple rounded-full px-4 py-3 text-white">
            Daftar
          </button>
        </div>
      </div>
    </div>
  );
}