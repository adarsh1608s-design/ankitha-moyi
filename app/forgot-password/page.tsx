
"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    if (!email) {
      alert("Please enter your email.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:3000/reset-password",
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Password reset email sent! Please check your inbox.");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-zinc-950 to-black px-6">
      <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-10">

        <h1 className="text-4xl font-bold text-white text-center">
          Forgot Password
        </h1>

        <p className="text-center text-gray-400 mt-3 mb-8">
          Enter your email to receive a password reset link.
        </p>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl bg-black/40 border border-white/10 p-4 text-white mb-6 outline-none"
        />

        <button
          onClick={handleReset}
          disabled={loading}
          className="w-full rounded-xl bg-pink-500 py-4 font-bold text-white hover:bg-pink-600 transition disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>

        <p className="text-center text-gray-400 mt-6">
          Remember your password?{" "}
          <Link
            href="/login"
            className="text-pink-400 hover:underline"
          >
            Back to Login
          </Link>
        </p>

      </div>
    </main>
  );
}

