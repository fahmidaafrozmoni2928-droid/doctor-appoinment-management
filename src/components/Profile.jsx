'use client';

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function Profile() {
  const [user, setUser] = useState(null);
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

      </div>
    </div>
  );
}