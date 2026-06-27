
"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminPage() {
  const [galleryFile, setGalleryFile] = useState<File | null>(null);
  const [premiumGalleryFile, setPremiumGalleryFile] = useState<File | null>(null);
  const [storyFile, setStoryFile] = useState<File | null>(null);
  const [freeVideoFile, setFreeVideoFile] = useState<File | null>(null);
  const [premiumVideoFile, setPremiumVideoFile] = useState<File | null>(null);

  async function uploadGallery() {
    if (!galleryFile) return;

    const fileName = `free_${Date.now()}-${galleryFile.name}`;

    const { error } = await supabase.storage
      .from("gallery")
      .upload(fileName, galleryFile);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Free image uploaded!");
    setGalleryFile(null);
  }

  async function uploadPremiumGallery() {
    if (!premiumGalleryFile) return;

    const fileName = `premium_${Date.now()}-${premiumGalleryFile.name}`;

    const { error } = await supabase.storage
      .from("gallery")
      .upload(fileName, premiumGalleryFile);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Premium image uploaded!");
    setPremiumGalleryFile(null);
  }

  async function uploadStory() {
    if (!storyFile) return;

    const fileName = `story_${Date.now()}-${storyFile.name}`;

    const { error } = await supabase.storage
      .from("stories")
      .upload(fileName, storyFile);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Story uploaded!");
    setStoryFile(null);
  }

  async function uploadFreeVideo() {
    if (!freeVideoFile) return;

    const fileName = `free_${Date.now()}-${freeVideoFile.name}`;

    const { error } = await supabase.storage
      .from("videos")
      .upload(fileName, freeVideoFile);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Free video uploaded!");
    setFreeVideoFile(null);
  }

  async function uploadPremiumVideo() {
    if (!premiumVideoFile) return;

    const fileName = `premium_${Date.now()}-${premiumVideoFile.name}`;

    const { error } = await supabase.storage
      .from("videos")
      .upload(fileName, premiumVideoFile);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Premium video uploaded!");
    setPremiumVideoFile(null);
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        👑 Admin Dashboard
      </h1>

      <div className="grid lg:grid-cols-2 gap-8">

        {/* Free Gallery */}

        <div className="rounded-3xl bg-white/5 p-8">
          <h2 className="text-2xl font-bold">📸 Free Gallery</h2>

          <input
            type="file"
            onChange={(e) =>
              e.target.files?.[0] &&
              setGalleryFile(e.target.files[0])
            }
            className="mt-4 w-full p-4 bg-zinc-900 rounded-xl"
          />

          <button
            onClick={uploadGallery}
            className="mt-4 bg-pink-500 px-6 py-3 rounded-full"
          >
            Upload Free Image
          </button>
        </div>

        {/* Premium Gallery */}

        <div className="rounded-3xl bg-white/5 p-8">
          <h2 className="text-2xl font-bold">💎 Premium Gallery</h2>

          <input
            type="file"
            onChange={(e) =>
              e.target.files?.[0] &&
              setPremiumGalleryFile(e.target.files[0])
            }
            className="mt-4 w-full p-4 bg-zinc-900 rounded-xl"
          />

          <button
            onClick={uploadPremiumGallery}
            className="mt-4 bg-pink-500 px-6 py-3 rounded-full"
          >
            Upload Premium Image
          </button>
        </div>

        {/* Stories */}

        <div className="rounded-3xl bg-white/5 p-8">
          <h2 className="text-2xl font-bold">🎬 Stories</h2>

          <input
            type="file"
            accept="video/*"
            onChange={(e) =>
              e.target.files?.[0] &&
              setStoryFile(e.target.files[0])
            }
            className="mt-4 w-full p-4 bg-zinc-900 rounded-xl"
          />

          <button
            onClick={uploadStory}
            className="mt-4 bg-pink-500 px-6 py-3 rounded-full"
          >
            Upload Story
          </button>
        </div>

        {/* Free Videos */}

        <div className="rounded-3xl bg-white/5 p-8">
          <h2 className="text-2xl font-bold">🎥 Free Videos</h2>

          <input
            type="file"
            accept="video/*"
            onChange={(e) =>
              e.target.files?.[0] &&
              setFreeVideoFile(e.target.files[0])
            }
            className="mt-4 w-full p-4 bg-zinc-900 rounded-xl"
          />

          <button
            onClick={uploadFreeVideo}
            className="mt-4 bg-pink-500 px-6 py-3 rounded-full"
          >
            Upload Free Video
          </button>
        </div>

        {/* Premium Videos */}

        <div className="rounded-3xl bg-white/5 p-8">
          <h2 className="text-2xl font-bold">💎 Premium Videos</h2>

          <input
            type="file"
            accept="video/*"
            onChange={(e) =>
              e.target.files?.[0] &&
              setPremiumVideoFile(e.target.files[0])
            }
            className="mt-4 w-full p-4 bg-zinc-900 rounded-xl"
          />

          <button
            onClick={uploadPremiumVideo}
            className="mt-4 bg-pink-500 px-6 py-3 rounded-full"
          >
            Upload Premium Video
          </button>
        </div>

      </div>

    </main>
  );
}

