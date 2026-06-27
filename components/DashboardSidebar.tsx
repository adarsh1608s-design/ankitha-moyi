
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

export default function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const [membership, setMembership] = useState("free");

  useEffect(() => {
    async function loadProfile() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data, error } = await supabase
  .from("profiles")
  .select("*")
  .eq("id", user.id)
  .single();

console.log("User ID:", user.id);
console.log("Profile Data:", data);
console.log("Profile Error:", error);

if (data) {
  setMembership(data.membership.trim());
}
    }

    loadProfile();
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  const linkClass = (href: string) =>
    pathname === href
      ? "block rounded-2xl bg-pink-500 px-5 py-4 font-semibold text-white transition hover:bg-pink-600"
      : "block rounded-2xl px-5 py-4 text-gray-300 transition hover:bg-white/10";

  return (
    <aside className="w-72 min-h-screen bg-white/5 backdrop-blur-xl border-r border-white/10 p-6 flex flex-col justify-between">

      <div>

        <h1 className="text-3xl font-bold text-white mb-10">
          Ankitha<span className="text-pink-500">.</span>
        </h1>

        <nav className="space-y-3">

          <Link href="/dashboard" className={linkClass("/dashboard")}>
            🏠 Dashboard
          </Link>

          <Link
            href="/dashboard/gallery"
            className={linkClass("/dashboard/gallery")}
          >
            📸 Gallery
          </Link>
<Link
  href="/dashboard/stories"
  className={linkClass("/dashboard/stories")}
>
  🎬 Stories
</Link>
          <Link
            href="/dashboard/videos"
            className={linkClass("/dashboard/videos")}
          >
            🎥 Videos
          </Link>

          <Link
            href="/dashboard/chat"
            className={linkClass("/dashboard/chat")}
          >
            💬 Chat
          </Link>

          <Link
            href="/dashboard/profile"
            className={linkClass("/dashboard/profile")}
          >
            👤 Profile
          </Link>

          <Link
            href="/dashboard/subscription"
            className={linkClass("/dashboard/subscription")}
          >
            💳 Subscription
          </Link>

          <Link
            href="/dashboard/notifications"
            className={linkClass("/dashboard/notifications")}
          >
            🔔 Notifications
          </Link>

          <Link
            href="/dashboard/settings"
            className={linkClass("/dashboard/settings")}
          >
            ⚙️ Settings
          </Link>

          <button
            onClick={handleLogout}
            className="w-full text-left rounded-2xl px-5 py-4 text-red-400 transition hover:bg-red-500/10"
          >
            🚪 Logout
          </button>

        </nav>

      </div>

      <div className="rounded-3xl bg-pink-500/10 border border-pink-500/30 p-5">

        <h3 className="text-xl font-bold text-white">
          {membership === "premium"
            ? "💎 Premium User"
            : "💎 Free User"}
        </h3>

        <p className="mt-2 text-gray-300 text-sm">
          {membership === "premium"
            ? "Enjoy all premium features."
            : "Upgrade your membership to unlock premium content."}
        </p>

      </div>

    </aside>
  );
}

