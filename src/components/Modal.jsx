'use client';

export default function BookingModal({ data }) {
  const openModal = () => {
    document.getElementById('booking_modal').showModal();
  };

   // const handleBooking = async (e) => {
   // e.preventDefault();

   // const form = e.target;

   // const bookingData = {
     // doctorName:form.doctorName.value,
     // patientName: form.patientName.value,
    //  appointmentDate: form.date.value,
     // appoinmentTime: form.time.value,
     // reason: form.reason.value,
   // };

  //  await fetch("/api/booking", {
    //  method: "POST",
     // headers: {
       // "Content-Type": "application/json",
     // },
     // body: JSON.stringify(bookingData),
   // });
 // };

  

  return (
    <>
      <button
        onClick={openModal}
        className="btn bg-blue-500 text-white rounded-xl"
      >
        Book Appointment
      </button>

      <dialog id="booking_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-xl">
            Book Appointment
          </h3>

          <p className="py-2 text-gray-500">
            with {data.name}
          </p>

          <form  className="space-y-3">
            <label className="font-bold">User Email</label>
            <input
              type="email"
              name="userEmail"
              placeholder="User Email"
              className="input input-bordered w-full rounded-xl"
            />

            <label className="font-bold">Doctor Name</label>

            <input
              type="text"
              name="doctorName"
              placeholder="Doctor Name"
              className="input input-bordered w-full rounded-xl"
            />

             <label className="font-bold">Patient Name</label>
            <input
              type="text"
              name="patientName"
              placeholder="Patient Name"
              className="input input-bordered w-full rounded-xl"
            />
<div className="grid grid-cols-2 gap-2">
    <div>
             <label className="font-bold">Gender</label>
            <input
              type="text"
              name="gender"
              placeholder="gender"
              className="input input-bordered w-full rounded-xl"
            />
</div>
<div>
             <label className="font-bold">Phone</label>
            <input
            name="phone"
              type="text"
              placeholder="phone"
              className="input input-bordered w-full rounded-xl"
            />
            </div>

            <div>

             <label className="font-bold">Date</label>
            <input
              type="text"
            name="date"
              placeholder="date"
              className="input input-bordered w-full rounded-xl"
            />
</div>

<div>
             <label className="font-bold">Time</label>
            <input
              type="text"
              name="time"
              placeholder="time"
              className="input input-bordered w-full rounded-xl"
            />
</div>

<div>
             <label className="font-bold">Reason(optional)</label>
            <input
              type="text"
              name="reason"
               placeholder="Reason"
              className="input input-bordered w-full rounded-xl"
            />
            </div>
</div>
            <button
              type="submit"
              className="btn btn-primary w-full"
            >
              Confirm Booking
            </button>
          </form>

         {/* <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>*/}
        </div>
      </dialog>
    </>
  );
}