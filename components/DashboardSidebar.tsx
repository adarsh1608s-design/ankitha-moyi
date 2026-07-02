"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

export default function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const [membership, setMembership] = useState("free");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    async function loadProfile() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

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
      ? "block rounded-xl bg-pink-500 px-4 py-3 font-semibold text-white"
      : "block rounded-xl px-4 py-3 text-gray-300 hover:bg-white/10 transition";

  const MenuLinks = () => (
    <>
      <Link href="/dashboard" className={linkClass("/dashboard")} onClick={() => setMobileOpen(false)}>🏠 Dashboard</Link>

      <Link href="/dashboard/gallery" className={linkClass("/dashboard/gallery")} onClick={() => setMobileOpen(false)}>📸 Gallery</Link>

      <Link href="/dashboard/stories" className={linkClass("/dashboard/stories")} onClick={() => setMobileOpen(false)}>🎬 Stories</Link>

      <Link href="/dashboard/videos" className={linkClass("/dashboard/videos")} onClick={() => setMobileOpen(false)}>🎥 Videos</Link>

      <Link href="/dashboard/chat" className={linkClass("/dashboard/chat")} onClick={() => setMobileOpen(false)}>💬 Chat</Link>

      <Link href="/dashboard/profile" className={linkClass("/dashboard/profile")} onClick={() => setMobileOpen(false)}>👤 Profile</Link>

      <Link href="/dashboard/subscription" className={linkClass("/dashboard/subscription")} onClick={() => setMobileOpen(false)}>💳 Subscription</Link>

      <Link href="/dashboard/notifications" className={linkClass("/dashboard/notifications")} onClick={() => setMobileOpen(false)}>🔔 Notifications</Link>

      <Link href="/dashboard/settings" className={linkClass("/dashboard/settings")} onClick={() => setMobileOpen(false)}>⚙️ Settings</Link>

      <button
        onClick={handleLogout}
        className="w-full text-left rounded-xl px-4 py-3 text-red-400 hover:bg-red-500/10 transition"
      >
        🚪 Logout
      </button>
    </>
  );

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-black/90 backdrop-blur-md border-b border-white/10 px-5 py-4">

        <button
          onClick={() => setMobileOpen(true)}
          className="text-2xl text-white"
        >
          ☰
        </button>

        <h1 className="text-xl font-bold text-white">
          Ankitha<span className="text-pink-500">.</span>
        </h1>

        <div className="w-6"></div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 lg:hidden">

          <aside className="w-72 h-full bg-zinc-950 p-6 overflow-y-auto">

            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white">
                Menu
              </h2>

              <button
                onClick={() => setMobileOpen(false)}
                className="text-2xl text-white"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2">
              <MenuLinks />
            </div>

            <div className="mt-10 rounded-2xl bg-pink-500/10 border border-pink-500/30 p-5">
              <h3 className="text-lg font-bold text-white">
                {membership === "premium"
                  ? "💎 Premium User"
                  : "💎 Free User"}
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                {membership === "premium"
                  ? "Enjoy all premium features."
                  : "Upgrade to unlock premium content."}
              </p>
            </div>

          </aside>

        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-72 min-h-screen bg-white/5 backdrop-blur-xl border-r border-white/10 p-6 flex-col justify-between">

        <div>

          <h1 className="text-3xl font-bold text-white mb-10">
            Ankitha<span className="text-pink-500">.</span>
          </h1>

          <nav className="space-y-3">
            <MenuLinks />
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
              : "Upgrade to unlock premium content."}
          </p>
        </div>

      </aside>
    </>
  );
}