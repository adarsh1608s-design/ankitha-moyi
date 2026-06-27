
import Link from "next/link";

export default function SubscriptionPage() {
  return (
  <main className="text-white">

      <div className="flex-1 p-10">

        {/* Header */}

        <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">

          <p className="uppercase tracking-[0.3em] text-pink-400">
            Subscription
          </p>

          <h1 className="text-5xl font-bold mt-3">
            💳 My Membership
          </h1>

          <p className="mt-4 text-gray-400 text-lg">
            Manage your membership and unlock exclusive content.
          </p>

        </div>

        {/* Current Status */}

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="rounded-3xl bg-white/5 border border-white/10 p-6">

            <h2 className="text-xl font-bold">
              Current Plan
            </h2>

            <p className="mt-4 text-red-400 text-lg">
              ❌ Free User
            </p>

          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-6">

            <h2 className="text-xl font-bold">
              Renewal Date
            </h2>

            <p className="mt-4 text-gray-400">
              --
            </p>

          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-6">

            <h2 className="text-xl font-bold">
              Status
            </h2>

            <p className="mt-4 text-yellow-400">
              Inactive
            </p>

          </div>

        </div>

        {/* Upgrade Plans */}

        <h2 className="text-4xl font-bold mt-14 mb-8">
          🚀 Upgrade Your Plan
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Basic */}

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">

            <h3 className="text-3xl font-bold">
              🌸 Basic
            </h3>

            <p className="text-pink-400 text-5xl font-bold mt-5">
              $9
            </p>

            <div className="space-y-3 mt-8">

              <p>✅ Exclusive Photos</p>
              <p>✅ Short Reels</p>
              <p>✅ Weekly Updates</p>
              <p>✅ Early Access</p>

            </div>

            <Link
              href="#"
              className="block mt-8 rounded-2xl bg-pink-500 py-4 text-center font-bold hover:bg-pink-600 transition"
            >
              Upgrade
            </Link>

          </div>

          {/* VIP */}

          <div className="rounded-[32px] border-2 border-pink-500 bg-pink-500/10 p-8 scale-105">

            <div className="mb-4 inline-block rounded-full bg-pink-500 px-4 py-2 text-sm font-bold">
              MOST POPULAR
            </div>

            <h3 className="text-3xl font-bold">
              💎 VIP
            </h3>

            <p className="text-pink-400 text-5xl font-bold mt-5">
              $19
            </p>

            <div className="space-y-3 mt-8">

              <p>✅ Everything in Basic</p>
              <p>✅ Premium Videos</p>
              <p>✅ Behind the Scenes</p>
              <p>✅ Bold Content</p>
              <p>✅ Priority Feed</p>

            </div>

            <Link
              href="#"
              className="block mt-8 rounded-2xl bg-pink-500 py-4 text-center font-bold hover:bg-pink-600 transition"
            >
              Upgrade
            </Link>

          </div>

          {/* Ultimate */}

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">

            <h3 className="text-3xl font-bold">
              👑 Ultimate
            </h3>

            <p className="text-pink-400 text-5xl font-bold mt-5">
              $29
            </p>

            <div className="space-y-3 mt-8">

              <p>✅ Everything in VIP</p>
              <p>✅ Private Chat</p>
              <p>✅ Weekly Audio Call</p>
              <p>✅ Weekly Video Call</p>
              <p>✅ Priority Replies</p>

            </div>

            <Link
              href="#"
              className="block mt-8 rounded-2xl bg-pink-500 py-4 text-center font-bold hover:bg-pink-600 transition"
            >
              Upgrade
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}
