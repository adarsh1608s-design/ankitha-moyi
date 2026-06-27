
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ProfilePage() {
  const [fullName, setFullName] = useState("Loading...");
  const [email, setEmail] = useState("Loading...");
  const [membership, setMembership] = useState("free");
  const [status, setStatus] = useState("active");
  const [expiryDate, setExpiryDate] = useState("--");

  useEffect(() => {
    async function loadUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      setEmail(user.email || "No Email");

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

      if (profile?.expiry_date) {
        setExpiryDate(
          new Date(profile.expiry_date).toLocaleDateString()
        );
      }
    }

    loadUser();
  }, []);

  return (
    <main className="text-white">
      <div className="p-10">

        <h1 className="text-5xl font-bold mb-10">
          👤 My Profile
        </h1>

        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">

          <div className="flex items-center gap-6">

            <div className="w-28 h-28 rounded-full bg-pink-500 flex items-center justify-center text-5xl">
              👤
            </div>

            <div>

              <h2 className="text-3xl font-bold">
                {fullName}
              </h2>

              <p className="text-gray-400 mt-2">
                {email}
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">

            <div className="rounded-2xl bg-black/30 p-6">

              <h3 className="text-xl font-bold">
                Membership
              </h3>

              <p className="mt-3 text-pink-400 capitalize">
                💎 {membership}
              </p>

            </div>

            <div className="rounded-2xl bg-black/30 p-6">

              <h3 className="text-xl font-bold">
                Renewal Date
              </h3>

              <p className="mt-3 text-gray-400">
                {expiryDate}
              </p>

            </div>

            <div className="rounded-2xl bg-black/30 p-6">

              <h3 className="text-xl font-bold">
                Total Posts Viewed
              </h3>

              <p className="mt-3 text-pink-400">
                0
              </p>

            </div>

            <div className="rounded-2xl bg-black/30 p-6">

              <h3 className="text-xl font-bold">
                Account Status
              </h3>

              <p className="mt-3">
                {status === "active"
                  ? "✅ Active"
                  : "❌ Inactive"}
              </p>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}

