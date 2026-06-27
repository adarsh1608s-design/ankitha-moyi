
"use client";

import Link from "next/link";

type PremiumGuardProps = {
  membership: string;
  children: React.ReactNode;
};

export default function PremiumGuard({
  membership,
  children,
}: PremiumGuardProps) {
  if (membership !== "premium") {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center text-white">

        <div className="text-7xl mb-6">🔒</div>

        <h1 className="text-4xl font-bold">
          Premium Content
        </h1>

        <p className="mt-4 text-gray-400 max-w-lg">
          Upgrade your membership to unlock this exclusive content.
        </p>

        <Link
          href="/dashboard/subscription"
          className="mt-8 rounded-xl bg-pink-500 px-8 py-4 font-bold hover:bg-pink-600 transition"
        >
          💎 Upgrade Now
        </Link>

      </div>
    );
  }

  return <>{children}</>;
}
