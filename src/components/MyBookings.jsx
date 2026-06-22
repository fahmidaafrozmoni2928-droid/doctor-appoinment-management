'use client';

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import UpdateMyBookingModal from "./UpdateMyBookingModal";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);
   const [editData, setEditData] = useState(null);
  const { data: session } = authClient.useSession();

  useEffect(() => {
    const loadBookings = async () => {
      try {
        const token = session?.session?.token;

        const res = await fetch(
          "http://localhost:5000/my-bookings",
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await res.json();
        setBookings(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (session) {
      loadBookings();
    }
  }, [session]);

   const handleDelete = async (id) => {
    const token = session?.session?.token;

    await fetch(`http://localhost:5000/booking/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    setBookings(bookings.filter((b) => b._id !== id));
  };

  

  const handleUpdate = async (e) => {
  e.preventDefault();

  const token = session?.session?.token;

  const res = await fetch(
    `http://localhost:5000/booking/${editData._id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(editData),
    }
  );

  const result = await res.json();

  if (result.modifiedCount > 0) {
    alert("Booking Updated Successfully");

    setBookings(
      bookings.map((booking) =>
        booking._id === editData._id
          ? editData
          : booking
      )
    );

    setEditData(null);
  }
};


  return (
    <div className="space-y-4">
      {bookings.length === 0 ? (
        <p>No Bookings Found</p>
      ) : (
        bookings.map((booking) => (
          <div
            key={booking._id}
            className="card bg-base-100 shadow-md p-4"
          >
            <h2 className="font-bold text-lg">
              {booking.doctorName}
            </h2>

            <p>
              Patient: {booking.patientName}
            </p>

            <p>
              Date: {booking.appointmentDate}
            </p>

            <p>
              Time: {booking.appointmentTime}
            </p>

            <p>
              Phone: {booking.phone}
            </p>

            <p>
              Reason: {booking.reason}
            </p>
            
            <div className="flex ">
              <button onClick={() => setEditData(booking)}>Update</button>
              <button onClick={() => handleDelete(booking._id) }>Delete</button>
            </div>
          </div>
         
        ))
      )}


 <UpdateMyBookingModal
  editData={editData}
  setEditData={setEditData}
  handleUpdate={handleUpdate}
/>

    </div>

    
  );
 
}