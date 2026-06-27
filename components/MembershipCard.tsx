
import Link from "next/link";

export default function MembershipCard() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-5xl font-bold text-center text-white">
        Choose Your Membership
      </h2>

      <p className="text-center text-gray-400 mt-4 mb-14">
        Unlock exclusive content with the plan that suits you best.
      </p>

      <div className="grid gap-8 lg:grid-cols-3">

        {/* BASIC */}
        <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition hover:scale-105">

          <h3 className="text-3xl font-bold text-white">🌸 Basic</h3>

          <p className="text-5xl font-bold text-pink-400 mt-6">$9</p>

          <p className="text-gray-400 mb-8">per month</p>

          <div className="space-y-4 text-gray-200">
            <p>✅ Exclusive Photos</p>
            <p>✅ Short Teaser Reels</p>
            <p>✅ Weekly Updates</p>
            <p>✅ Member-only Posts</p>
            <p>✅ Early Access</p>
          </div>

          <Link
            href="/login"
            className="mt-10 block w-full rounded-2xl bg-pink-500 py-4 text-center font-bold text-white hover:bg-pink-600 transition"
          >
            Join Basic
          </Link>

        </div>

        {/* VIP */}
        <div className="relative rounded-[32px] border-2 border-pink-500 bg-gradient-to-b from-pink-500/10 to-white/5 backdrop-blur-xl p-8 scale-105 shadow-2xl">

          <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-pink-500 px-5 py-2 text-sm font-bold text-white">
            ⭐ MOST POPULAR
          </div>

          <h3 className="text-3xl font-bold text-white mt-6">💎 VIP</h3>

          <p className="text-5xl font-bold text-pink-400 mt-6">$19</p>

          <p className="text-gray-300 mb-8">per month</p>

          <div className="space-y-4 text-gray-100">
            <p>✅ Everything in Basic</p>
            <p>✅ Premium Videos</p>
            <p>✅ Behind-the-Scenes Content</p>
            <p>✅ Bold & Specialty Content</p>
            <p>✅ Faster Content Releases</p>
            <p>✅ Priority Member Feed</p>
          </div>

          <Link
            href="/login"
            className="mt-10 block w-full rounded-2xl bg-pink-500 py-4 text-center font-bold text-white hover:bg-pink-600 transition"
          >
            Join VIP
          </Link>

        </div>

        {/* ULTIMATE */}
        <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition hover:scale-105">

          <h3 className="text-3xl font-bold text-white">👑 Ultimate</h3>

          <p className="text-5xl font-bold text-pink-400 mt-6">$29</p>

          <p className="text-gray-400 mb-8">per month</p>

          <div className="space-y-4 text-gray-200">
            <p>✅ Everything in VIP</p>
            <p>✅ Private Chat Access</p>
            <p>✅ Weekly Audio Call</p>
            <p>✅ Weekly Video Call</p>
            <p>✅ Priority Replies</p>
            <p>✅ Exclusive VIP Drops</p>
            <p>✅ Surprise Content</p>
          </div>

          <Link
            href="/login"
            className="mt-10 block w-full rounded-2xl bg-pink-500 py-4 text-center font-bold text-white hover:bg-pink-600 transition"
          >
            Join Ultimate
          </Link>

        </div>

      </div>
    </section>
  );
}
