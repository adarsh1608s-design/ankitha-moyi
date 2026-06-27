"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How do I join?",
    answer:
      "Choose a membership plan, complete payment, and your access will be activated automatically.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. You can cancel your subscription at any time from your account settings.",
  },
  {
    question: "Is my payment secure?",
    answer:
      "Yes. Payments are processed through trusted payment providers using secure encryption.",
  },
  {
    question: "When do I get access?",
    answer:
      "Premium access is granted immediately after successful payment.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-5xl font-bold text-center text-white">
        Frequently Asked Questions
      </h2>

      <p className="text-center text-gray-400 mt-4 mb-12">
        Everything you need to know before joining.
      </p>

      <div className="space-y-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 cursor-pointer"
            onClick={() =>
              setOpen(open === index ? null : index)
            }
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-white">
                {faq.question}
              </h3>

              <span className="text-pink-400 text-2xl">
                {open === index ? "-" : "+"}
              </span>
            </div>

            {open === index && (
              <p className="text-gray-300 mt-4">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

