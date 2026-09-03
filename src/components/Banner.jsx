
"use client";

import { Button } from "@heroui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Find Your New Best Friend",
    description:
      "Give a loving pet a forever home and discover the joy of unconditional companionship.",
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1800&q=85",
  },
  {
    id: 2,
    title: "Love Begins With Adoption",
    description:
      "Meet adorable pets looking for a caring family and make a difference in their lives.",
    image:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1800&q=85",
  },
  {
    id: 3,
    title: "Adopt Love. Change a Life.",
    description:
      "Your perfect companion is waiting. Take the first step toward a beautiful friendship today.",
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1800&q=85",
  },
];

const Banner = () => {
  return (
    <section className="mx-auto w-full max-w-7xl">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop
        className="group overflow-hidden rounded-none md:rounded-3xl"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative flex min-h-[600px] items-center bg-cover bg-center md:min-h-[650px]"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/10" />

              {/* Bottom Gradient */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 to-transparent" />

              {/* Content */}
              <div className="relative z-10 w-full px-6 py-16 sm:px-10 md:px-16 lg:px-20">
                <div className="max-w-2xl">
                  {/* Badge */}
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white shadow-lg backdrop-blur-md">
                    <span className="text-lg">🐾</span>
                    <span>Give a Pet a Loving Home</span>
                  </div>

                  {/* Title */}
                  <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    {slide.title}
                  </h1>

                  {/* Description */}
                  <p className="mb-9 max-w-xl text-base leading-relaxed text-gray-200 sm:text-lg md:text-xl">
                    {slide.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-wrap items-center gap-4">
                    <Link href="/pets">
                      <Button
                        size="lg"
                        className="h-14 rounded-full bg-orange-500 px-8 text-base font-bold text-white shadow-xl shadow-orange-500/30 transition-all duration-300 hover:scale-105 hover:bg-orange-600 hover:shadow-orange-500/50"
                      >
                        🐾 Adopt Now
                      </Button>
                    </Link>

                    <Link href="/about">
                      <Button
                        size="lg"
                        variant="bordered"
                        className="h-14 rounded-full border-2 border-white/70 px-8 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-gray-900"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>

                  {/* Small Info */}
                  <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/80">
                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/20">
                        ❤️
                      </span>
                      <span>Find Your Companion</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/20">
                        🏠
                      </span>
                      <span>Give Them a Home</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
