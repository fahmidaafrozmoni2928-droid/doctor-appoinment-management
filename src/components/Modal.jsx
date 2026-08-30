
"use client";

import { authClient } from "@/lib/auth-client";

export default function BookingModal({ data }) {
  const { data: session } = authClient.useSession();

  console.log("SESSION =", session);

  const openModal = () => {
    document.getElementById("booking_modal").showModal();
  };

  const handleBooking = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);
    const bookingData = Object.fromEntries(formData.entries());

    try {
      // Get JWT token
      const { data: tokenData, error } = await authClient.token();

      if (error || !tokenData?.token) {
        console.log("TOKEN ERROR:", error);
        alert("Authentication failed. Please login again.");
        return;
      }

      const token = tokenData.token;

      console.log("TOKEN =", token);
      console.log("DOCTOR ID =", data._id);
      console.log("BOOKING DATA =", bookingData);

      const res = await fetch(
        `http://localhost:5000/booking/${data._id}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingData),
        }
      );

      const result = await res.json();

      console.log("BOOKING RESULT =", result);

      if (!res.ok) {
        console.log("BOOKING ERROR =", result);
        alert(result.message || "Booking failed");
        return;
      }

      alert("Booking Successful!");

      // Clear form
      form.reset();

      // Close modal
      document.getElementById("booking_modal").close();

    } catch (error) {
      console.log("BOOKING ERROR =", error);
      alert("Something went wrong!");
    }
  };

  return (
    <>
      {/* Open Modal Button */}
      <button
        onClick={openModal}
        className="btn bg-blue-500 text-white rounded-xl"
      >
        Book Appointment
      </button>

      {/* Modal */}
      <dialog id="booking_modal" className="modal">
        <div className="modal-box">

          <h3 className="font-bold text-xl">
            Book Appointment
          </h3>

          <p className="py-2 text-gray-500">
            With {data.name}
          </p>

          <form
            onSubmit={handleBooking}
            className="space-y-3"
          >

            {/* User Email */}
            <label className="font-bold">
              User Email
            </label>

            <input
              type="email"
              name="userEmail"
              value={session?.user?.email || ""}
              readOnly
              className="input input-bordered w-full rounded-xl"
            />

            {/* Doctor Name */}
            <label className="font-bold">
              Doctor Name
            </label>

            <input
              type="text"
              name="doctorName"
              value={data.name}
              readOnly
              className="input input-bordered w-full rounded-xl"
            />

            {/* Patient Name */}
            <label className="font-bold">
              Patient Name
            </label>

            <input
              type="text"
              name="patientName"
              placeholder="Patient Name"
              required
              className="input input-bordered w-full rounded-xl"
            />

            <div className="grid grid-cols-2 gap-2">

              {/* Gender */}
              <div>
                <label className="font-bold">
                  Gender
                </label>

                <input
                  type="text"
                  name="gender"
                  placeholder="Gender"
                  required
                  className="input input-bordered w-full rounded-xl"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="font-bold">
                  Phone
                </label>

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  required
                  className="input input-bordered w-full rounded-xl"
                />
              </div>

              {/* Appointment Date */}
              <div>
                <label className="font-bold">
                  Date
                </label>

                <input
                  type="date"
                  name="appointmentDate"
                  required
                  className="input input-bordered w-full rounded-xl"
                />
              </div>

              {/* Appointment Time */}
              <div>
                <label className="font-bold">
                  Time
                </label>

                <input
                  type="time"
                  name="appointmentTime"
                  required
                  className="input input-bordered w-full rounded-xl"
                />
              </div>

              {/* Reason */}
              <div className="col-span-2">
                <label className="font-bold">
                  Reason (Optional)
                </label>

                <input
                  type="text"
                  name="reason"
                  placeholder="Reason"
                  className="input input-bordered w-full rounded-xl"
                />
              </div>

            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn btn-primary w-full"
            >
              Confirm Booking
            </button>

          </form>

          {/* Close Button */}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">
                Close
              </button>
            </form>
          </div>

        </div>
      </dialog>
    </>
  );
}

