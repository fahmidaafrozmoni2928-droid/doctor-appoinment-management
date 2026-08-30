'use client';

import { useEffect, useState } from "react";
import Card from "@/components/Card";
import { getAllDetails } from "@/lib/details/data";

export const dynamic = "force-dynamic";
export default function AllAppointmentPage() {
  const [detailsData, setDetailsData] = useState([]);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);

  const loadData = async (searchText = "") => {
    const data = await getAllDetails(searchText);
    setDetailsData(data);
  };

  useEffect(() => {
    loadData(); // initial load
  }, []);

  const handleSearch = () => {
    loadData(search);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        All Appointment
      </h1>

      <div className="flex gap-2 mb-6">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="input input-bordered"
        />

        <button onClick={handleSearch} className="btn btn-primary">
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          detailsData.map((item) => (
            <Card key={item._id} detail={item} isLoggedIn={!!user}/>))
        
        }
      </div>
    </div>
  );
}
