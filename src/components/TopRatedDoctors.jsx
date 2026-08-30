"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const TopRatedDoctors = ({ doctors }) => {
  // Rating না থাকায় প্রথম ৩ জন doctor দেখানো হচ্ছে

const { data: session } = authClient.useSession(); 
const user = session?.user;

  const topDoctors = doctors?.slice(0, 3);

  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Top Rated Doctors
          </h2>

          <p className="text-gray-500 mt-3">
            Meet our experienced and trusted doctors
          </p>
        </div>

        {/* Doctor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {topDoctors?.map((doctor) => (
            <div
              key={doctor._id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300"
            >

              {/* Doctor Image */}
              <figure className="h-64 overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </figure>

              {/* Card Body */}
              <div className="card-body">

                <h3 className="card-title">
                  {doctor.name}
                </h3>

                <p>
                  <span className="font-semibold">
                    Specialty:
                  </span>
                  {doctor.speciality}
                </p>

                
                  <p>
                    <span className="font-semibold">
                      Experience:
                    </span>
                    {doctor.experience}
                  </p>
                

                {/* View Details Button */}
                <div className="card-actions justify-end mt-4">

                  {user ? (
                    <Link
                      href={`/all-appoinment/${doctor._id}`}
                      className="btn btn-primary"
                    >
                      View Details
                    </Link>
                  ) : (
                    <Link
                      href="/login"
                      className="btn btn-primary"
                    >
                      View Details
                    </Link>
                  )}

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TopRatedDoctors;
