//import Bookings from "@/components/Bookings";
//import Profile from "@/components/Profile";
//import React, { useState } from "react";

const dashboardPage = () => {
  //  const [activeTab, setActiveTab] = useState("bookings")

   // {
       // activeTab === "bookings" && <Bookings></Bookings>
  //  }

   // {
       // activeTab === "profile" && <Profile></Profile>
   // }
    return(
        <div>
         <h1 className="font-bold text-xl">Dashboard</h1>

       {/* name of each tab group should be unique */}
<div className="tabs tabs-box">
  <input type="radio" name="my_tabs_1" className="tab " aria-label="My Bookings"  />
  <input type="radio" name="my_tabs_1" className="tab" aria-label="My Profile"  />
  
</div>
        </div>

    )
}
export default dashboardPage;
