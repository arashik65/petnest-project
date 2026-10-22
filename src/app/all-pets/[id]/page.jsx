import Image from "next/image";

import {
  FiMapPin,
  FiCalendar,
  FiHeart,
  FiMail,
  FiShield,
  FiActivity,
  FiDollarSign,
  FiUser,
} from "react-icons/fi";

import { FaPaw } from "react-icons/fa";

const PetDetailsPage = async ({ params }) => {
  const { id } = await params;

  // Fetch all pets
  const res = await fetch("http://localhost:5001/all-pets", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch pets");
  }

  const pets = await res.json();

  // Find pet by ID
  const pet = pets.find((item) => item._id === id);

  // If pet not found
  if (!pet) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center px-5">
        <div className="text-center">

          <FaPaw className="text-emerald-400 text-5xl mx-auto mb-5" />

          <h1 className="text-3xl font-bold text-white">
            Pet Not Found
          </h1>

          <p className="text-gray-400 mt-2">
            Sorry, we could not find this pet.
          </p>

        </div>
      </div>
    );
  }

  const {
    petName,
    species,
    breed,
    age,
    gender,
    vaccinationStatus,
    image,
    healthStatus,
    location,
    adoptionFee,
    ownerEmail,
    description,
  } = pet;
  console.log("pet datails:",pet);

  // image can be array OR string
  const petImage = (
  Array.isArray(image) ? image[0] : image
)?.trim() || "/default-pet.jpg";

  return (
    <main className="min-h-screen bg-[#0f0f0f] py-10 text-white">

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* ================= HERO ================= */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Pet Image */}

          <div className="relative overflow-hidden rounded-2xl">

            <Image
              src={petImage}
              alt={petName}
              width={1600}
              height={900}
              priority
              className="w-full h-[300px] md:h-[420px] object-cover hover:scale-105 transition duration-700"
            />

            <span className="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full">
              Available
            </span>

          </div>

          {/* Adoption Intro Card */}

          <div className="bg-[#111827] border border-slate-800 rounded-2xl flex items-center justify-center p-8">

            <div className="text-center">

              <div className="w-14 h-14 mx-auto rounded-full border-2 border-emerald-400 flex items-center justify-center mb-5">

                <FiHeart className="text-emerald-400 text-2xl" />

              </div>

              <h2 className="text-2xl font-bold">
                Ready to Adopt {petName}?
              </h2>

              <p className="text-gray-400 text-sm leading-6 mt-3">
                Give {petName} a loving home and a happy life.
                Submit your adoption request below.
              </p>

            </div>

          </div>

        </div>


        {/* ================= TITLE ================= */}

        <div className="mt-7 flex flex-col md:flex-row md:justify-between md:items-end gap-4">

          <div>

            <h1 className="text-4xl font-bold">
              {petName}
            </h1>

            <div className="flex flex-wrap gap-2 mt-3">

              <span className="bg-slate-800 px-3 py-1 rounded-full text-xs">
                {species}
              </span>

              <span className="bg-slate-800 px-3 py-1 rounded-full text-xs">
                {breed}
              </span>

              <span className="bg-slate-800 px-3 py-1 rounded-full text-xs">
                {gender}
              </span>

            </div>

          </div>

          <div>

            <p className="text-gray-400 text-sm">
              Adoption Fee
            </p>

            <p className="text-3xl font-bold text-pink-500">
              ${adoptionFee}
            </p>

          </div>

        </div>


        {/* ================= MAIN ================= */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">

          {/* ================= LEFT ================= */}

          <div className="lg:col-span-2">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <InfoCard
                icon={<FaPaw />}
                title="Species"
                value={species}
              />

              <InfoCard
                icon={<FaPaw />}
                title="Breed"
                value={breed}
              />

              <InfoCard
                icon={<FiCalendar />}
                title="Age"
                value={`${age} years`}
              />

              <InfoCard
                icon={<FiUser />}
                title="Gender"
                value={gender}
              />

              <InfoCard
                icon={<FiMapPin />}
                title="Location"
                value={location}
              />

              <InfoCard
                icon={<FiDollarSign />}
                title="Adoption Fee"
                value={`$${adoptionFee}`}
              />

              <InfoCard
                icon={<FiActivity />}
                title="Health Status"
                value={healthStatus}
              />

              <InfoCard
                icon={<FiShield />}
                title="Vaccinated"
                value={vaccinationStatus}
              />

            </div>


            {/* ================= ABOUT ================= */}

            <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6 md:p-8 mt-8">

              <h2 className="text-2xl font-bold mb-5">
                About {petName}
              </h2>

              <p className="text-gray-400 leading-8">
                {description}
              </p>

            </div>


            {/* ================= OWNER ================= */}

            <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6 md:p-8 mt-6">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">

                  <FiMail className="text-purple-400 text-xl" />

                </div>

                <div>

                  <h3 className="font-semibold">
                    Owner Email
                  </h3>

                  <p className="text-gray-400 text-sm break-all mt-1">
                    {ownerEmail}
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* ================= ADOPTION FORM ================= */}

          <div>

            <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6 sticky top-24">

              <h2 className="text-2xl font-bold">
                Adoption Request
              </h2>

              <p className="text-gray-400 text-sm mt-2">
                Fill out the form to request adoption.
              </p>


              <form className="mt-6 space-y-4">

                {/* Pet Name */}

                <div>

                  <label className="text-sm text-gray-300">
                    Pet Name
                  </label>

                  <input
                    type="text"
                    value={petName}
                    readOnly
                    className="w-full mt-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-gray-300 outline-none"
                  />

                </div>


                {/* User Name */}

                <div>

                  <label className="text-sm text-gray-300">
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    readOnly
                    className="w-full mt-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-gray-300 outline-none"
                  />

                </div>


                {/* User Email */}

                <div>

                  <label className="text-sm text-gray-300">
                    Your Email
                  </label>

                  <input
                    type="email"
                    placeholder="Your email"
                    readOnly
                    className="w-full mt-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-gray-300 outline-none"
                  />

                </div>


                {/* Pickup Date */}

                <div>

                  <label className="text-sm text-gray-300">
                    Pickup Date
                  </label>

                  <input
                    type="date"
                    className="w-full mt-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none"
                  />

                </div>


                {/* Message */}

                <div>

                  <label className="text-sm text-gray-300">
                    Message
                  </label>

                  <textarea
                    rows="4"
                    placeholder="Write your message..."
                    className="w-full mt-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none resize-none"
                  />

                </div>


                {/* Adopt */}

                <button
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 transition py-3 rounded-lg font-semibold text-white"
                >
                  Adopt {petName}
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
};


/* ================= INFO CARD ================= */

const InfoCard = ({ icon, title, value }) => {

  return (
    <div className="bg-[#1c2431] border border-slate-800 rounded-xl p-5">

      <div className="flex items-center gap-4">

        <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center">

          <span className="text-pink-400 text-xl">
            {icon}
          </span>

        </div>

        <div>

          <h3 className="text-xs text-gray-400">
            {title}
          </h3>

          <p className="text-sm font-semibold mt-1">
            {value}
          </p>

        </div>

      </div>

    </div>
  );
};

export default PetDetailsPage;