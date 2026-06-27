
"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    console.log("Signup button clicked");
    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert(
      "Account created successfully! Please check your email if email confirmation is enabled."
    );

    window.location.href = "/login";
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-zinc-950 to-black px-6">
      <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-10">
        <h1 className="text-4xl font-bold text-white text-center">
          Create Your Account
        </h1>

        <p className="text-center text-gray-400 mt-3 mb-8">
          Join Ankitha&apos;s premium community.
        </p>

        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full mb-4 rounded-xl bg-black/40 border border-white/10 p-4 text-white outline-none"
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 rounded-xl bg-black/40 border border-white/10 p-4 text-white outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 rounded-xl bg-black/40 border border-white/10 p-4 text-white outline-none"
        />

        <button
          onClick={handleSignup}
          disabled={loading}
          className="block w-full rounded-xl bg-pink-500 py-4 text-center font-bold text-white hover:bg-pink-600 transition disabled:opacity-50"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>

        <p className="text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-pink-400 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
