"use client";

import { useEffect, useState } from "react";
import { getProfile } from "@/lib/getProfile";
import { supabase } from "@/lib/supabase";

export default function StoriesPage() {
  const [membership, setMembership] = useState("free");
  const [stories, setStories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

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
        const storyUrls = data.map((file) =>
          supabase.storage
            .from("stories")
            .getPublicUrl(file.name).data.publicUrl
        );

        setStories(storyUrls);
      }

      setLoading(false);
    }

    loadStories();
  }, []);

  if (loading) {
    return (
      <main className="px-5 sm:px-8 py-8 text-white">
        Loading Stories...
      </main>
    );
  }

  return (
    <main className="px-5 sm:px-8 py-8 text-white">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10">
        🎬 Premium Stories
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-3xl border border-pink-500/20"
          >
            <video
              src={story}
              controls={membership === "premium"}
             className={
  membership === "premium"
    ? "w-full h-[420px] sm:h-[520px] lg:h-[600px] object-cover"
    : "w-full h-[420px] sm:h-[520px] lg:h-[600px] object-cover blur-md"
}
            />

            {membership !== "premium" && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50">
                <p className="text-5xl">🔒</p>
                <p className="mt-4 text-lg sm:text-xl font-bold text-center">
                  Premium Story
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}