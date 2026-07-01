"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-white">
          Ankitha<span className="text-pink-500">.</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 text-white">
          <a href="#">Home</a>
          <a href="#">Gallery</a>
          <a href="#">Membership</a>
          <a href="#">About</a>
        </div>

        {/* Desktop Button */}
        <Link
          href="/login"
          className="hidden lg:block bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-full font-bold"
        >
          Join Now
        </Link>

        {/* Mobile */}
        <div className="flex items-center gap-3 lg:hidden">

          <Link
            href="/login"
            className="bg-pink-500 px-5 py-2 rounded-full font-bold text-white"
          >
            Join
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="text-white text-3xl"
          >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-black border-t border-white/10 flex flex-col">

          <a className="p-4 border-b border-white/10">Home</a>
          <a className="p-4 border-b border-white/10">Gallery</a>
          <a className="p-4 border-b border-white/10">Membership</a>
          <a className="p-4">About</a>

        </div>
      )}
    </nav>
  );
}