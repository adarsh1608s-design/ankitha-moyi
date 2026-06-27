
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const images = [
  "/images/hero1.png",
  "/images/hero2.png",
  "/images/hero3.png",
  "/images/hero4.png",
];

export default function PremiumSlider() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">

      <h2 className="text-5xl font-bold text-center text-white">
        Exclusive Preview
      </h2>

      <p className="text-center text-gray-400 mt-4 mb-12">
        Get a glimpse before joining.
      </p>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        slidesPerView={3}
        slidesPerGroup={1}
        grabCursor={true}
        allowTouchMove={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative group">

              <div className="absolute -inset-2 rounded-3xl bg-pink-500/20 blur-2xl"></div>

              <img
                src={image}
                alt=""
                className="relative h-[650px] w-full object-cover rounded-3xl transition duration-500 group-hover:scale-105"
              />

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-14 flex justify-center">
        <div className="relative group">

          <div className="absolute -inset-2 rounded-3xl bg-pink-500/20 blur-2xl"></div>

          <img
            src="/images/hero5.png"
            alt=""
            className="relative h-[650px] w-[420px] object-cover rounded-3xl blur-md"
          />

          <div className="absolute inset-0 rounded-3xl bg-black/40 flex flex-col items-center justify-center">

            <h2 className="text-4xl font-bold text-white">
              🔒 Premium Content
            </h2>

            <p className="text-gray-300 mt-3">
              Join Membership to Unlock
            </p>

          </div>

        </div>
      </div>

    </section>
  );
}
