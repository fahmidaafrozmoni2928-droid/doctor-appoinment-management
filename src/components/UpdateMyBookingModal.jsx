'use client';

export default function UpdateMyBookingModal({
  editData,
  setEditData,
  handleUpdateBooking,
}) {
  if (!editData) return null;

  return (
    <dialog open className="modal">
      <div className="modal-box">
       

        <form onSubmit={handleUpdateBooking} className="space-y-3">

          <input
            type="text"
            value={editData.patientName}
            onChange={(e) =>
              setEditData({
                ...editData,
                patientName: e.target.value,
              })
            }
            className="input input-bordered w-full"
            placeholder="Patient Name"
          />

          <input
            type="text"
            value={editData.phone}
            onChange={(e) =>
              setEditData({
                ...editData,
                phone: e.target.value,
              })
            }
            className="input input-bordered w-full"
            placeholder="Phone"
          />

          <input
            type="date"
            value={editData.appointmentDate}
            onChange={(e) =>
              setEditData({
                ...editData,
                appointmentDate: e.target.value,
              })
            }
            className="input input-bordered w-full"
          />

          <input
            type="time"
            value={editData.appointmentTime}
            onChange={(e) =>
              setEditData({
                ...editData,
                appointmentTime: e.target.value,
              })
            }
            className="input input-bordered w-full"
          />

          <input
            type="text"
            value={editData.reason}
            onChange={(e) =>
              setEditData({
                ...editData,
                reason: e.target.value,
              })
            }
            className="input input-bordered w-full"
            placeholder="Reason"
          />

          <div className="flex gap-2 mt-4">
            <button
              type="submit"
              className="btn btn-primary"
            >
              Save Changes
            </button>

           
          </div>

        </form>
      </div>
    </dialog>
  );
}