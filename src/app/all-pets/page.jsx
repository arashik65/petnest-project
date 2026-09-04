

// import AllPetCard from "@/Components/AllPetCard";

import AllPetCard from "@/components/AllPetCard";

export const metadata = {
  title: "All Pets",
};

const AllPetsPage = async () => {
  const res = await fetch("http://localhost:5001/all-pets", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch pets");
  }

  const pets = await res.json();
  console.log("Pets:", pets);

  return (
    <section className="max-w-7xl mx-auto px-5 py-10">
      <AllPetCard pets={pets} />
    </section>
  );
};

export default AllPetsPage;

