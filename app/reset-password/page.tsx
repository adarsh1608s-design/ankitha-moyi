
"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdatePassword = async () => {
    if (!password || !confirmPassword) {
      alert("Please fill in both fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Password updated successfully!");

    window.location.href = "/login";
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-zinc-950 to-black px-6">
      <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-10">

        <h1 className="text-4xl font-bold text-white text-center">
          Reset Password
        </h1>

        <p className="text-center text-gray-400 mt-3 mb-8">
          Enter your new password below.
        </p>

        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-xl bg-black/40 border border-white/10 p-4 text-white mb-4 outline-none"
        />

        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full rounded-xl bg-black/40 border border-white/10 p-4 text-white mb-6 outline-none"
        />

        <button
          onClick={handleUpdatePassword}
          disabled={loading}
          className="w-full rounded-xl bg-pink-500 py-4 font-bold text-white hover:bg-pink-600 transition disabled:opacity-50"
        >
          {loading ? "Updating..." : "Update Password"}
        </button>

      </div>
    </main>
  );
}

