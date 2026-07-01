
"use client";

import { useEffect, useState } from "react";
import { getProfile } from "@/lib/getProfile";
import { supabase } from "@/lib/supabase";
import TipModal from "@/components/TipModal";

export default function GalleryPage() {
  const [membership, setMembership] = useState("free");
  const [loading, setLoading] = useState(true);

  const [freeImages, setFreeImages] = useState<string[]>([]);
  const [premiumImages, setPremiumImages] = useState<string[]>([]);
  const [tipOpen, setTipOpen] = useState(false);
  const previewFreeImages = [
  "/images/hero1.png",
  "/images/hero2.png",
  "/images/hero3.png",
];

const previewPremiumImages = [
  "/images/hero4.png",
  "/images/hero5.png",
  "/images/hero6.png",
];

  useEffect(() => {
    async function loadData() {
      const profile = await getProfile();

      if (profile) {
        setMembership(profile.membership.trim());
      }

    const { data } = await supabase.storage
  .from("gallery")
  .list();


      if (data) {
  const free: string[] = [];
  const premium: string[] = [];

  data.forEach((file) => {
    const url = supabase.storage
      .from("gallery")
      .getPublicUrl(file.name).data.publicUrl;

    if (file.name.includes("free_")) {
      free.push(url);
    }

    if (file.name.includes("premium_")) {
      premium.push(url);
    }
  });

  

  setFreeImages(free);
  setPremiumImages(premium);
}

      setLoading(false);
    }

    loadData();
  }, []);

  if (loading) {
    return (
      <main className="text-white p-10">
        <h1 className="text-3xl font-bold">Loading...</h1>
      </main>
    );
  }

  return (
    <main className="text-white">

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
        📸 Premium Gallery
      </h1>

      <p className="mt-3 text-gray-400 text-base sm:text-lg">
        Free members can preview selected content.
      </p>

      <h2 className="mt-12 mb-6 text-3xl font-bold">
        🆓 Free Preview
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {[...previewFreeImages, ...freeImages].map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5"
          >
            <img
              src={image}
              alt="Preview"
              className="h-[320px] sm:h-[420px] w-full object-cover hover:scale-105 transition duration-500"
            />
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

      <h2 className="mt-16 mb-6 text-2xl sm:text-3xl font-bold">
  💎 Premium Exclusive
</h2>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

  {[...previewPremiumImages, ...premiumImages].map((image, index) => (
    <div
      key={index}
      className="relative overflow-hidden rounded-[28px] border border-pink-500/30 bg-white/5"
    >

      <img
        src={image}
        alt="Premium"
        className={
          membership === "premium"
            ? "h-[420px] w-full object-cover hover:scale-105 transition duration-500"
            : "h-[420px] w-full object-cover blur-md scale-105"
        }
      />

      {membership !== "premium" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
          <p className="text-5xl">🔒</p>

          <h3 className="mt-4 text-2xl font-bold">
            Premium Content
          </h3>

          <p className="mt-2 text-gray-300">
            Upgrade to unlock this content.
          </p>
        </div>
      )}

      <div className="p-5">

        <button
          className="w-full rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 py-3 font-bold text-black shadow-xl hover:scale-105 transition text-sm sm:text-base"
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

