
"use client";

import { supabase } from "@/lib/supabase";

export default function SettingsPage() {
  async function saveTheme(theme: string) {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Please login first.");
      return;
    }

    const { error } = await supabase
      .from("profiles")
      .update({
        chat_theme: theme,
      })
      .eq("id", user.id);

    if (error) {
      console.error(error);
      alert("Failed to save theme.");
      return;
    }

    alert(`✅ ${theme} theme selected!`);
  }

  return (
    <main className="text-white">
      <div className="flex-1 p-10">

        {/* Header */}

        <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">

          <p className="uppercase tracking-[0.3em] text-pink-400">
            Settings
          </p>

          <h1 className="mt-3 text-5xl font-bold">
            ⚙️ Account Settings
          </h1>

          <p className="mt-4 text-lg text-gray-400">
            Customize your account and preferences.
          </p>

        </div>

        {/* Account */}

        <div className="mt-10 rounded-[32px] border border-white/10 bg-white/5 p-8">

          <h2 className="text-3xl font-bold">
            👤 Account
          </h2>

          <div className="mt-6 space-y-4">

            <input
              type="text"
              placeholder="Username"
              className="w-full rounded-2xl bg-zinc-900 border border-white/10 px-5 py-4 outline-none focus:border-pink-500"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-2xl bg-zinc-900 border border-white/10 px-5 py-4 outline-none focus:border-pink-500"
            />

            <button className="rounded-full bg-pink-500 px-8 py-3 font-bold hover:bg-pink-600 transition">
              Save Changes
            </button>

          </div>

        </div>

        {/* Chat Theme */}

        <div className="mt-10 rounded-[32px] border border-white/10 bg-white/5 p-8">

          <h2 className="text-3xl font-bold">
            🎨 Chat Theme
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">

            <button
              onClick={() => saveTheme("pink")}
              className="rounded-2xl bg-pink-500 p-6 font-bold hover:scale-105 transition"
            >
              💖 Love Pink
            </button>

            <button
              onClick={() => saveTheme("red")}
              className="rounded-2xl bg-red-600 p-6 font-bold hover:scale-105 transition"
            >
              ❤️ Romantic Red
            </button>

            <button
              onClick={() => saveTheme("purple")}
              className="rounded-2xl bg-purple-600 p-6 font-bold hover:scale-105 transition"
            >
              💜 Purple Glow
            </button>

            <button
              onClick={() => saveTheme("midnight")}
              className="rounded-2xl bg-zinc-800 p-6 font-bold hover:scale-105 transition"
            >
              🖤 Midnight
            </button>

          </div>

        </div>

        {/* Notifications */}

        <div className="mt-10 rounded-[32px] border border-white/10 bg-white/5 p-8">

          <h2 className="text-3xl font-bold">
            🔔 Notifications
          </h2>

          <div className="mt-6 space-y-4">

            <label className="flex items-center gap-3">
              <input type="checkbox" />
              Email Notifications
            </label>

            <label className="flex items-center gap-3">
              <input type="checkbox" />
              New Content Alerts
            </label>

            <label className="flex items-center gap-3">
              <input type="checkbox" />
              Membership Renewal Reminder
            </label>

          </div>

        </div>

        {/* Security */}

        <div className="mt-10 rounded-[32px] border border-white/10 bg-white/5 p-8">

          <h2 className="text-3xl font-bold">
            🔒 Security
          </h2>

          <button className="mt-6 rounded-full bg-pink-500 px-8 py-3 font-bold hover:bg-pink-600 transition">
            Change Password
          </button>

        </div>

        {/* Logout */}

        <div className="mt-10">

          <button className="rounded-full bg-red-600 px-8 py-4 font-bold hover:bg-red-700 transition">
            🚪 Logout
          </button>

        </div>

      </div>
    </main>
  );
}

