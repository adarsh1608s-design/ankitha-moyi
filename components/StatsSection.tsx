export default function StatsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

     <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">

        <div className="rounded-[28px] bg-white/5 border border-white/10 backdrop-blur-xl p-5 sm:p-8 text-center hover:scale-105 transition">

          <h2 className="text-3xl sm:text-5xl font-bold text-pink-400">
            50K+
          </h2>

          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-300">
            Community Members
          </p>

        </div>

        <div className="rounded-[28px] bg-white/5 border border-white/10 backdrop-blur-xl p-5 sm:p-8 text-center hover:scale-105 transition">

          <h2 className="text-3xl sm:text-5xl font-bold text-pink-400">
            2M+
          </h2>

          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-300">
            Profile Views
          </p>

        </div>

        <div className="rounded-[28px] bg-white/5 border border-white/10 backdrop-blur-xl p-5 sm:p-8 text-center hover:scale-105 transition">

          <h2 className="text-3xl sm:text-5xl font-bold text-pink-400">
            500+
          </h2>

          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-300">
            Exclusive Posts
          </p>

        </div>

        <div className="rounded-[28px] bg-white/5 border border-white/10 backdrop-blur-xl p-5 sm:p-8 text-center hover:scale-105 transition">

          <h2 className="text-3xl sm:text-5xl font-bold text-pink-400">
            24/7
          </h2>

          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-300">
            Fresh Updates
          </p>

        </div>

      </div>

    </section>
  );
}
