"use client";

import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { getProfile } from "@/lib/getProfile";
import TipModal from "@/components/TipModal";

export default function VideosPage() {
const [membership, setMembership] = useState("free");
const [loading, setLoading] = useState(true);
const [tipOpen, setTipOpen] = useState(false);

const [freeVideos, setFreeVideos] = useState<string[]>([]);
const [premiumVideos, setPremiumVideos] = useState<string[]>([]);

useEffect(() => {
async function loadProfile() {
const profile = await getProfile();


  if (profile) {
    setMembership(profile.membership.trim());
  }

  const { data } = await supabase.storage
    .from("videos")
    .list("", { limit: 100 });

  if (data) {
    const free: string[] = [];
    const premium: string[] = [];

    data.forEach((file) => {
      const url = supabase.storage
        .from("videos")
        .getPublicUrl(file.name).data.publicUrl;

      if (file.name.includes("free_")) {
        free.push(url);
      }

      if (file.name.includes("premium_")) {
        premium.push(url);
      }
    });

    setFreeVideos(free);
    setPremiumVideos(premium);
  }

  setLoading(false);
}

loadProfile();


}, []);

if (loading) {
return ( <main className="text-white p-10"> <h1 className="text-3xl font-bold">Loading...</h1> </main>
);
}

return ( <main className="text-white">


  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
    🎥 Premium Videos
  </h1>

  <p className="mt-3 text-base sm:text-lg text-gray-400">
    Watch free previews or upgrade for unlimited access.
  </p>

  <h2 className="mt-12 mb-6 text-3xl font-bold">
    🆓 Free Videos
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {freeVideos.map((video, index) => (
      <div
  key={index}
  className="rounded-[28px] overflow-hidden border border-white/10 bg-white/5"
>
  <video controls className="w-full h-[220px] sm:h-[320px] object-cover">
    <source src={video} />
  </video>

  <div className="p-5">
    <button
  onClick={() => setTipOpen(true)}
  className="w-full rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 py-3 font-bold text-black shadow-xl hover:scale-105 transition text-sm sm:text-base"
>
  💎 Send Tip
</button>
  </div>

</div>
    ))}
  </div>

  <h2 className="mt-16 mb-6 text-2xl sm:text-3xl font-bold">
    💎 Premium Videos
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {premiumVideos.map((video, index) => (
  <div
    key={index}
    className="relative rounded-[28px] overflow-hidden border border-pink-500/30 bg-white/5"
  >

    {membership === "premium" ? (
      <>
        <video controls className="w-full">
          <source src={video} />
        </video>

        <div className="p-5">
          <button
  onClick={() => setTipOpen(true)}
 className="w-full rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 py-3 font-bold text-black shadow-xl hover:scale-105 transition text-sm sm:text-base"
>
  💎 Send Tip
</button>
        </div>
      </>
    ) : (
      <>
        <div className="relative">

          <video className="w-full blur-sm">
            <source src={video} />
          </video>

          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <h3 className="text-xl sm:text-2xl font-bold text-center">
              🔒 Premium Video
            </h3>
          </div>

        </div>

        <div className="p-5">
          <button
           className="w-full rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 py-3 font-bold text-black shadow-xl hover:scale-105 transition text-sm sm:text-base"
          >
            💎 Send Tip
          </button>
        </div>
      </>
    )}

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
