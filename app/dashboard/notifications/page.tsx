


export default function NotificationsPage() {
  return (
   <main className="text-white">

      <div className="flex-1 p-10">

        {/* Header */}
        <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">
          <p className="uppercase tracking-[0.3em] text-pink-400">
            Notifications
          </p>

          <h1 className="mt-3 text-5xl font-bold">
            🔔 Notifications
          </h1>

          <p className="mt-4 text-gray-400">
            Stay updated with the latest content and membership news.
          </p>
        </div>

        {/* Notification Cards */}
        <div className="mt-10 space-y-6">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h2 className="text-2xl font-bold">
              🎉 Welcome!
            </h2>

            <p className="mt-3 text-gray-400">
              Thanks for joining Ankitha's exclusive community.
            </p>

            <p className="mt-4 text-sm text-gray-500">
              Just now
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h2 className="text-2xl font-bold">
              📸 New Gallery Update
            </h2>

            <p className="mt-3 text-gray-400">
              Fresh exclusive photos will appear here when published.
            </p>

            <p className="mt-4 text-sm text-gray-500">
              Coming soon
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h2 className="text-2xl font-bold">
              🎥 Premium Videos
            </h2>

            <p className="mt-3 text-gray-400">
              New premium videos will be announced here.
            </p>

            <p className="mt-4 text-sm text-gray-500">
              Coming soon
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}
