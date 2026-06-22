
'use client';

export default function ProfileUpdateModal({
  editData,
  setEditData,
  handleUpdateProfile,
}) {
  if (!editData) return null;

  return (
    <dialog open className="modal">
          <div className="modal-box">

            <h3 className="font-bold text-lg mb-3">
              Update Profile
            </h3>

            <form onSubmit={handleUpdateProfile} className="space-y-3">

              <input
                type="text"
                value={editData.name}
                onChange={(e) =>
                  setEditData({
                    ...editData,
                    name: e.target.value,
                  })
                }
                className="input input-bordered w-full"
                placeholder="Name"
              />

              <input
                type="text"
                value={editData.image}
                onChange={(e) =>
                  setEditData({
                    ...editData,
                    image: e.target.value,
                  })
                }
                className="input input-bordered w-full"
                placeholder="Image URL"
              />

              <div className="flex gap-2">
                <button className="btn btn-success w-full">
                  Save
                </button>

                <button
                  type="button"
                  onClick={() => setEditData(null)}
                  className="btn"
                >
                  Cancel
                </button>
              </div>

            </form>

          </div>
        </dialog>
  );
}




