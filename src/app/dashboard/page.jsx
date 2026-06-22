
'use client';

import { useState } from "react";
import MyBookings from "@/components/MyBookings";
import Profile from "@/components/Profile";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("bookings");

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="font-bold text-xl">Dashboard</h1>

      {/* Tabs */}
      <div className="tabs tabs-box">
        <button
          className="tab"
          onClick={() => setActiveTab("bookings")}
        >
          My Bookings
        </button>

        <button
          className="tab"
          onClick={() => setActiveTab("profile")}
        >
          My Profile
        </button>
      </div>

      {/* Content */}
      <div className="mt-6">
        {activeTab === "bookings" && <MyBookings />}
        {activeTab === "profile" && <Profile />}
      </div>
    </div>
  );
}