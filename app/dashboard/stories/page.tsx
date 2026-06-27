"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { getProfile } from "@/lib/getProfile";
import TipModal from "@/components/TipModal";

export default function StoriesPage() {
  const [membership, setMembership] = useState("free");
  const [stories, setStories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
const [tipOpen, setTipOpen] = useState(false);

  useEffect(() => {
    async function loadStories() {
      const profile = await getProfile();

      if (profile) {
        setMembership(profile.membership.trim());
      }

      const { data } = await supabase.storage
        .from("stories")
        .list("", { limit: 100 });

      if (data) {
        const urls: string[] = [];

        data.forEach((file) => {
          const url = supabase.storage
            .from("stories")
            .getPublicUrl(file.name).data.publicUrl;

          urls.push(url);
        });

        setStories(urls);
      }

      setLoading(false);
    }

    loadStories();
  }, []);

  if (loading) {
    return (
      <main className="text-white p-10">
        Loading...
      </main>
    );
  }

  return (
    <main className="text-white p-10">
      <h1 className="text-5xl font-bold">
        🎬 Premium Stories
      </h1>

      <div className="grid md:grid-cols-3 gap-8 mt-10">

        {stories.map((story, index) => (
          <div
  key={index}
  className="rounded-3xl overflow-hidden border border-pink-500/20 bg-white/5"
>
  {membership === "premium" ? (
    <video
      src={story}
      controls
      className="w-full h-[500px] object-cover"
    />
  ) : (
    <div className="relative">
      <video
        src={story}
        className="w-full h-[500px] object-cover blur-md"
      />

      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
        <div className="text-center">
          <p className="text-5xl">🔒</p>
          <p className="mt-4 font-bold">
            Premium Only
          </p>
        </div>
      </div>
    </div>
  )}

  <div className="p-5">
    <button
  onClick={() => setTipOpen(true)}
  className="w-full rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 py-3 font-bold text-black shadow-xl hover:scale-105 transition"
>
  💎 Send Tip
</button>
  </div>

</div>
        ))}
      </div>
      <TipModal
  open={tipOpen}
  onClose={() => setTipOpen(false)}
/>
    </main>
  );
}