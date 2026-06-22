'use client';

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import ProfileUpdateModal from "./ProfileUpdateModal";

export default function Profile() {
  const [user, setUser] = useState(null);
   const [editData, setEditData] = useState(null);
  const { data: session } = authClient.useSession();

  useEffect(() => {
    const loadUser = async () => {
      const token = session?.session?.token;

      const res = await fetch("http://localhost:5000/me", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      setUser(data);
    };

    if (session) loadUser();
  }, [session]);

   const handleUpdateProfile = async (e) => {
    e.preventDefault();

    const token = session?.session?.token;

    const res = await fetch("http://localhost:5000/profile", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(editData),
    });

    const data = await res.json();

    if (data.modifiedCount > 0) {
      setUser(editData);
      setEditData(null);
    }
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="card bg-base-100 shadow-md p-6 max-w-md mx-auto">
      
      <div className="flex flex-col items-center gap-3">
        
        <img
          src={user.image || "/avatar.png"}
          className="w-24 h-24 rounded-full object-cover"
          alt="profile"
        />

        <h2 className="text-xl font-bold">
          {user.name}
        </h2>

        <p className="text-gray-500">
          {user.email}
        </p>


      <button>Update Profile</button>
      </div>

      <ProfileUpdateModal
        editData={editData}
        setEditData={setEditData}
        handleUpdate={handleUpdate}
      />
    </div>
  );
}