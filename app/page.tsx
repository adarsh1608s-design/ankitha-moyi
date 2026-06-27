import Link from "next/link";
import Navbar from "../components/Navbar";
import PremiumSlider from "../components/PremiumSlider";
import MembershipCard from "../components/MembershipCard";
import StatsSection from "../components/StatsSection";
import FaqSection from "../components/FaqSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      <Navbar />

      <section className="max-w-7xl mx-auto min-h-screen flex items-center px-8 pt-24">
        {/* Left Side */}
        <div className="w-full md:w-1/2">
          <p className="uppercase tracking-[0.3em] text-pink-400 mb-4">
            Premium Experience
          </p>

          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
            Exclusive Access
            <br />
            to Ankitha Moyi
          </h1>

          <p className="mt-6 text-gray-400 text-lg max-w-xl">
            Discover exclusive content and enjoy a beautifully designed members
            experience built for fans.
          </p>

          <div className="flex gap-4 mt-10">
            <Link
              href="/login"
              className="bg-pink-500 px-8 py-3 rounded-full font-bold hover:bg-pink-600 transition"
            >
              Join Membership
            </Link>

            <button className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
              Explore
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex w-1/2 justify-center">
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-pink-500/20 blur-3xl"></div>

            <img
              src="/images/hero.png"
              alt="Ankitha"
              className="relative w-[420px] h-[600px] object-cover rounded-[40px] shadow-2xl border border-white/10"
            />
          </div>
        </div>
      </section>

      <PremiumSlider />
      <MembershipCard />
      <StatsSection />
      <FaqSection />
    </main>
  );
}

