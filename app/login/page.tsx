
"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    window.location.href = "/dashboard";
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black px-6">
      <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-10">
        <h1 className="text-4xl font-bold text-white text-center">
          Welcome Back
        </h1>

        <p className="text-center text-gray-400 mt-3 mb-8">
          Login to access your premium content.
        </p>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl bg-black/40 border border-white/10 p-4 text-white mb-4 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-xl bg-black/40 border border-white/10 p-4 text-white mb-6 outline-none"
        />
<div className="flex justify-end mb-6">
  <Link
    href="/forgot-password"
    className="text-sm text-pink-400 hover:underline"
  >
    Forgot Password?
  </Link>
</div>
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full rounded-xl bg-pink-500 py-4 font-bold text-white hover:bg-pink-600 transition disabled:opacity-50"
        >
          {loading ? "Logging In..." : "Login"}
        </button>

        <p className="text-center text-gray-400 mt-6">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="text-pink-400 hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}
