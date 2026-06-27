import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-white">
          Ankitha<span className="text-pink-500">.</span>
        </h1>

        {/* Navigation */}
        <div className="hidden md:flex gap-8 text-white">
          <a href="#" className="hover:text-pink-400 transition">
            Home
          </a>

          <a href="#" className="hover:text-pink-400 transition">
            Gallery
          </a>

          <a href="#" className="hover:text-pink-400 transition">
            Membership
          </a>

          <a href="#" className="hover:text-pink-400 transition">
            About
          </a>
        </div>

        {/* Join Button */}
        <Link
          href="/login"
          className="bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded-full font-semibold transition"
        >
          Join Now
        </Link>

      </div>
    </nav>
  );
}
