
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function DashboardPage() {
  const [fullName, setFullName] = useState("User");
  const [membership, setMembership] = useState("free");
  const [status, setStatus] = useState("active");

  useEffect(() => {
    async function loadUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data: profile, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (error) {
        console.error(error);
        return;
      }

      setFullName(profile?.full_name || "User");
      setMembership(profile?.membership || "free");
      setStatus(profile?.status || "active");
    }

    loadUser();
  }, []);

  return (
    <main className="text-white">
      {/* Welcome Card */}
      <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">
        <p className="uppercase tracking-[0.3em] text-pink-400">
          Dashboard
        </p>

        <h1 className="mt-3 text-5xl font-bold">
          👋 Welcome, {fullName}
        </h1>

        <p className="mt-4 text-lg text-gray-400">
          Manage your membership and premium content from one place.
        </p>
      </div>

      {/* Status Cards */}
      <div className="grid gap-6 md:grid-cols-3 mt-8">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-bold">
            Membership Status
          </h2>

          <p className="mt-4 text-lg">
            {status === "active" ? "✅ Active" : "❌ Inactive"}
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-bold">
            Renewal Date
          </h2>

          <p className="mt-4 text-gray-400">
            --
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-bold">
            Subscription
          </h2>

          <p className="mt-4 text-yellow-400 capitalize">
            {membership} Plan
          </p>
        </div>

      </div>

      {/* Quick Access */}
      <h2 className="mt-12 mb-6 text-3xl font-bold">
        Quick Access
      </h2>

      <div className="grid gap-6 md:grid-cols-4">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-2xl font-bold">
            📸 Gallery
          </h3>

          <p className="mt-3 text-gray-400">
            {membership === "premium" ? "Available ✅" : "Locked 🔒"}
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-2xl font-bold">
            🎥 Videos
          </h3>

          <p className="mt-3 text-gray-400">
            {membership === "premium" ? "Available ✅" : "Locked 🔒"}
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-2xl font-bold">
            💬 Chat
          </h3>

          <p className="mt-3 text-gray-400">
            {membership === "premium" ? "Available ✅" : "Locked 🔒"}
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-2xl font-bold">
            👤 Profile
          </h3>

          <p className="mt-3 text-green-400">
            Available ✅
          </p>
        </div>

      </div>
    </main>
  );
}

