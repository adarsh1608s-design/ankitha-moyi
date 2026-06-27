"use client";

interface TipModalProps {
  open: boolean;
  onClose: () => void;
}

export default function TipModal({ open, onClose }: TipModalProps) {
  if (!open) return null;

  const amounts = [10, 20, 50, 100, 200];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">

      <div className="w-[420px] rounded-3xl bg-zinc-900 border border-yellow-500 p-8">

        <h2 className="text-3xl font-bold text-center text-white">
          💎 Support Creator
        </h2>

        <p className="mt-2 text-center text-gray-400">
          Send a tip to support this creator.
        </p>

        <div className="grid grid-cols-2 gap-4 mt-8">

          {amounts.map((amount) => (
            <button
              key={amount}
              className="rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 py-4 text-xl font-bold text-black hover:scale-105 transition"
            >
              ₹{amount}
            </button>
          ))}

        </div>

        <input
          placeholder="Custom Amount"
          className="mt-6 w-full rounded-2xl bg-zinc-800 border border-white/10 p-4 text-white"
        />

        <button
          className="mt-6 w-full rounded-2xl bg-pink-500 py-4 text-xl font-bold hover:bg-pink-600"
        >
          Continue to Payment
        </button>

        <button
          onClick={onClose}
          className="mt-4 w-full text-gray-400"
        >
          Cancel
        </button>

      </div>

    </div>
  );
}