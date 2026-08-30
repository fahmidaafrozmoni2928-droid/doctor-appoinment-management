
import Banner from "@/components/Banner";
import TopRatedDoctors from "@/components/TopRatedDoctors";

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/details`, {
    cache: "no-store",
  });

  const doctors = await res.json();

  return (
    <div>
      <Banner />

      <TopRatedDoctors
        doctors={doctors}
        
      />
    </div>
  );
}

