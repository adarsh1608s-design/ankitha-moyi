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
    <section className="max-w-5xl mx-auto px-5 sm:px-6 py-16 sm:py-24">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white">
        Frequently Asked Questions
      </h2>

      <p className="text-center text-gray-400 mt-4 mb-12">
        Everything you need to know before joining.
      </p>

      <div className="space-y-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6 cursor-pointer"
            onClick={() =>
              setOpen(open === index ? null : index)
            }
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg sm:text-xl font-semibold text-white pr-4">
                {faq.question}
              </h3>

              <span className="text-pink-400 text-xl sm:text-2xl shrink-0">
                {open === index ? "-" : "+"}
              </span>
            </div>

            {open === index && (
              <p className="text-sm sm:text-base text-gray-300 mt-4">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

