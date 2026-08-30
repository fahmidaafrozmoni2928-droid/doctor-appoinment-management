"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import ProfileUpdateModal from "./ProfileUpdateModal";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [editData, setEditData] = useState(null);

  const { data: session } = authClient.useSession();

  // =========================
  // LOAD PROFILE
  // =========================
  useEffect(() => {
    const loadProfile = async () => {
      try {
        const { data, error } = await authClient.token();

        if (error || !data?.token) {
          console.log("TOKEN ERROR:", error);
          return;
        }

        const token = data.token;

        console.log("PROFILE TOKEN:", token);

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/profile`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const profileData = await res.json();

        console.log("PROFILE DATA:", profileData);

        if (!res.ok) {
          console.log("PROFILE ERROR:", profileData);
          return;
        }

        setUser(profileData);

      } catch (error) {
        console.log("PROFILE FETCH ERROR:", error);
      }
    };

    if (session) {
      loadProfile();
    }
  }, [session]);


  // =========================
  // UPDATE PROFILE
  // =========================
 const handleUpdateProfile = async (e) => {
  e.preventDefault();

  try {
    const { data, error } = await authClient.token();

    if (error || !data?.token) {
      console.log("TOKEN ERROR:", error);
      return;
    }

    const token = data.token;

    console.log("UPDATE TOKEN:", token);
    console.log("EDIT DATA:", editData);

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/profile`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: editData.name,
        image: editData.image,
      }),
    });

    const result = await res.json();

    console.log("UPDATE RESULT:", result);

    if (!res.ok) {
      alert(result.message);
      return;
    }

    alert("Profile Updated Successfully");

    // UI update
    setUser((prev) => ({
      ...prev,
      name: editData.name,
      image: editData.image,
    }));

    setEditData(null);

  } catch (error) {
    console.log("UPDATE PROFILE ERROR:", error);
  }
};


  // =========================
  // LOADING
  // =========================
  if (!user) {
    return <p>Loading...</p>;
  }


  // =========================
  // UI
  // =========================
  return (
    <div className="card bg-base-100 shadow-md p-6 max-w-md mx-auto">

      <div className="flex flex-col items-center gap-3">

        {user.image && (
          <img
            src={user.image}
            alt={user.name}
            className="w-24 h-24 rounded-full object-cover"
          />
        )}

        <h2 className="text-xl font-bold">
          {user.name}
        </h2>

        <p className="text-gray-500">
          {user.email}
        </p>

        <button
          onClick={() => setEditData(user)}
          className="btn btn-primary"
        >
          Update Profile
        </button>

      </div>

      <ProfileUpdateModal
        editData={editData}
        setEditData={setEditData}
        handleUpdate={handleUpdateProfile}
      />

    </div>
  );
}