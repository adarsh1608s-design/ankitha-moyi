
import Link from "next/link";

export default function LogoutPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-zinc-950 to-black text-white px-6">

      <div className="w-full max-w-xl rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 text-center">

        <div className="text-7xl mb-6">
          🚪
        </div>

        <h1 className="text-5xl font-bold">
          Log Out?
        </h1>

        <p className="mt-5 text-lg text-gray-400">
          Are you sure you want to log out of your account?
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">

          <Link
            href="/dashboard"
            className="rounded-full border border-white/10 px-8 py-4 font-semibold transition hover:bg-white hover:text-black"
          >
            Cancel
          </Link>

          <Link
            href="/"
            className="rounded-full bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-700"
          >
            Confirm Logout
          </Link>

        </div>

      </div>

    </main>
  );
}