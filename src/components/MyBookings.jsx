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
      const { data, error } = await authClient.token();

      if (error || !data?.token) {
        console.log("TOKEN ERROR:", error);
        return;
      }

      const token = data.token;

      console.log("TOKEN:", token);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/my-bookings`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const bookingsData = await res.json();

      console.log("BOOKINGS:", bookingsData);

      if (!res.ok) {
        console.log(bookingsData);
        return;
      }

      setBookings(bookingsData);

    } catch (error) {
      console.log(error);
    }
  };

  if (session) {
    loadBookings();
  }
}, [session]);


  const handleDelete = async (id) => {
  try {
    const { data, error } = await authClient.token();

    if (error || !data?.token) {
      console.log("TOKEN ERROR:", error);
      return;
    }

    const token = data.token;

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();

    console.log("DELETE RESULT:", result);

    if (!res.ok) {
      console.log("DELETE ERROR:", result);
      return;
    }

    if (result.deletedCount > 0) {
      alert("Booking Deleted Successfully");

      setBookings((prevBookings) =>
        prevBookings.filter((booking) => booking._id !== id)
      );
    }
  } catch (error) {
    console.log("DELETE ERROR:", error);
  }
};
  
const handleUpdateBooking = async (e) => {
  e.preventDefault();

  try {
    const { data: tokenData, error } = await authClient.token();

    if (error || !tokenData?.token) {
      console.log("TOKEN ERROR:", error);
      alert("Authentication failed. Please login again.");
      return;
    }

    const token = tokenData.token;

   

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${editData._id}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editData),
      }
    );

    const result = await res.json();

    console.log("UPDATE RESULT =", result);

    if (!res.ok) {
      console.log("UPDATE ERROR =", result);
      alert(result.message || "Update failed");
      return;
    }

    if (result.modifiedCount > 0) {
      alert("Booking Updated Successfully");

      setBookings((prev) =>
        prev.map((booking) =>
          booking._id === editData._id
            ? editData
            : booking
        )
      );

      setEditData(null);
    } else {
      alert("No changes were made.");
    }

  } catch (error) {
    console.log("UPDATE ERROR =", error);
  }
};
 


  return (
    <div className="space-y-4">
      {Array.isArray(bookings) && bookings.length > 0 ? 
        
       (
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
      ) : (<p>No Bookings Found</p>)}


 <UpdateMyBookingModal
  editData={editData}
  setEditData={setEditData}
  handleUpdateBooking={handleUpdateBooking}
/>

    </div>

    
  );
 
}