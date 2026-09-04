"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Heart,
  Syringe,
  Activity,
  VenusAndMars,
  CalendarDays,
} from "lucide-react";

const DEFAULT_IMAGE = "/default-pet.jpg";

const AllPetCard = ({ pets = [] }) => {
  const featuredPets = pets;

  if (!featuredPets.length) {
    return (
      <section className="bg-white px-4 py-12 transition-colors duration-300 dark:bg-slate-950">
        <div className="flex min-h-[250px] items-center justify-center">
          <div className="text-center">
            <div className="text-5xl">🐾</div>

            <h2 className="mt-3 text-xl font-bold text-slate-900 dark:text-white">
              No pets available
            </h2>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              There are currently no pets available for adoption.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white px-4 py-10 transition-colors duration-300 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-7">
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-orange-500 dark:text-orange-400">
            Featured Pets
          </p>

          <h1 className="text-2xl font-bold text-slate-900 transition-colors md:text-3xl dark:text-white">
            Meet Our Lovely Pets
          </h1>

          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Find your perfect companion and give a loving pet a forever home.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredPets.map((pet, index) => {
            const imageUrl =
              typeof pet?.image === "string" && pet.image.trim() !== ""
                ? pet.image.trim()
                : DEFAULT_IMAGE;

            return (
              <article
                key={pet?._id || index}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-orange-500/50"
              >
                {/* Image */}
                <div className="relative h-[175px] w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <Image
                    src={imageUrl}
                    alt={pet?.petName || "Pet"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = DEFAULT_IMAGE;
                    }}
                  />

                  {/* Species */}
                  <span className="absolute left-3 top-3 rounded-full bg-orange-500 px-2.5 py-1 text-[10px] font-semibold text-white shadow">
                    🐾 {pet?.species || "Pet"}
                  </span>

                  {/* Available */}
                  <span className="absolute right-3 top-3 rounded-full bg-emerald-500 px-2.5 py-1 text-[10px] font-semibold text-white shadow">
                    Available
                  </span>
                </div>

                {/* Content */}
                <div className="p-4">

                  {/* Name + Heart */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <h2 className="truncate text-base font-bold text-slate-900 dark:text-white">
                        {pet?.petName || "Unnamed Pet"}
                      </h2>

                      <p className="truncate text-[11px] text-slate-500 dark:text-slate-400">
                        {pet?.breed || "Unknown Breed"}
                      </p>
                    </div>

                    <Heart
                      size={17}
                      className="shrink-0 text-orange-500 dark:text-orange-400"
                    />
                  </div>

                  {/* Age / Gender */}
                  <div className="mt-3 grid grid-cols-2 gap-2">

                    {/* Age */}
                    <div className="rounded-lg bg-slate-100 px-2.5 py-2 transition-colors dark:bg-slate-800/70">
                      <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-500">
                        <CalendarDays size={13} />

                        <span className="text-[10px]">
                          Age
                        </span>
                      </div>

                      <p className="mt-0.5 text-[11px] font-semibold text-slate-700 dark:text-slate-200">
                        {pet?.age ?? "N/A"} years old
                      </p>
                    </div>

                    {/* Gender */}
                    <div className="rounded-lg bg-slate-100 px-2.5 py-2 transition-colors dark:bg-slate-800/70">
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <VenusAndMars size={13} />

                        <span className="text-[10px]">
                          Gender
                        </span>
                      </div>

                      <p className="mt-0.5 text-[11px] font-semibold capitalize text-slate-700 dark:text-slate-200">
                        {pet?.gender || "N/A"}
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                    <MapPin
                      size={13}
                      className="shrink-0 text-orange-500 dark:text-orange-400"
                    />

                    <span className="truncate">
                      {pet?.location || "Location unavailable"}
                    </span>
                  </div>

                  {/* Health + Vaccination */}
                  <div className="mt-3 flex items-center justify-between border-t border-slate-200 pt-3 dark:border-slate-800">

                    {/* Health */}
                    <div className="flex items-center gap-1.5">
                      <Activity
                        size={13}
                        className="text-emerald-500 dark:text-emerald-400"
                      />

                      <span className="text-[10px] text-slate-500 dark:text-slate-400">
                        {pet?.healthStatus || "Healthy"}
                      </span>
                    </div>

                    {/* Vaccination */}
                    <div className="flex items-center gap-1.5">
                      <Syringe
                        size={13}
                        className="text-blue-500 dark:text-blue-400"
                      />

                      <span
                        className={`text-[10px] font-semibold ${
                          pet?.vaccinationStatus === "Vaccinated"
                            ? "text-emerald-600 dark:text-emerald-400"
                            : "text-orange-500 dark:text-orange-400"
                        }`}
                      >
                        {pet?.vaccinationStatus || "Not Vaccinated"}
                      </span>
                    </div>
                  </div>

                  {/* Adoption Fee */}
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[10px] text-slate-500 dark:text-slate-500">
                      Adoption Fee
                    </span>

                    <span className="text-xs font-bold text-orange-500 dark:text-orange-400">
                      ৳{pet?.adoptionFee ?? "0"}
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="mt-4 grid grid-cols-2 gap-2">

                    {/* View Details */}
                    <Link
                      href={`/pet/${pet?._id}`}
                      className="flex h-9 items-center justify-center rounded-lg border border-slate-300 bg-slate-100 text-[11px] font-semibold text-slate-700 transition hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                    >
                      View Details
                    </Link>

                    {/* Add Pet */}
                    <Link
                      href={`/pet/${pet?._id}/adopt`}
                      className="flex h-9 items-center justify-center rounded-lg bg-orange-500 text-[11px] font-bold text-white transition hover:bg-orange-600"
                    >
                      Add Pet
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AllPetCard;