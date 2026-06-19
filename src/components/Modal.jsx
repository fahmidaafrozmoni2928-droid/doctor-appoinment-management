'use client';

export default function BookingModal({ data }) {
  const openModal = () => {
    document.getElementById('booking_modal').showModal();
  };

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

          <form className="space-y-3">
            <label className="font-bold">User Email</label>
            <input
              type="email"
              placeholder="User Email"
              className="input input-bordered w-full rounded-xl"
            />

            <label className="font-bold">Doctor Name</label>

            <input
              type="text"
              placeholder="Doctor Name"
              className="input input-bordered w-full rounded-xl"
            />

             <label className="font-bold">Patient Name</label>
            <input
              type="text"
              placeholder="Patient Name"
              className="input input-bordered w-full rounded-xl"
            />
<div className="grid grid-cols-2 gap-2">
    <div>
             <label className="font-bold">Gender</label>
            <input
              type="text"
              placeholder="gender"
              className="input input-bordered w-full rounded-xl"
            />
</div>
<div>
             <label className="font-bold">Phone</label>
            <input
              type="text"
              placeholder="phone"
              className="input input-bordered w-full rounded-xl"
            />
            </div>

            <div>

             <label className="font-bold">Date</label>
            <input
              type="email"
              placeholder="date"
              className="input input-bordered w-full rounded-xl"
            />
</div>

<div>
             <label className="font-bold">Time</label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full rounded-xl"
            />
</div>

<div>
             <label className="font-bold">Reason(optional)</label>
            <input
              type="text"
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