'use client'
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const Navber = () => {

   const { 
        data: session, 
       
    } = authClient.useSession() 
    const user = session?.user

   // console.log(session)

    const handleSignOut = async() => {
await authClient.signOut();
    }

    return(
        <div className=" bg-blue-50  " >
<div className="navbar max-w-7xl mx-auto flex justify-between  ">
<div className="">
 
    <Image src="/logo.png.png" alt="logo" width={100} height={50}></Image>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
      <li><Link href={'/'}>Home</Link></li>
      <li><Link href={'/all-appoinment'}>All Appoinment</Link></li>
      <li><Link href={'/dashboard'}>Dashboard</Link></li>
     
    </ul>
  </div>
  <ul className="flex items-center gap-4">
    {
      user ? <>
       <li> <Link href={'/profile'}><button className="btn rounded-xl bg-blue-400 text-white">Profile</button></Link></li>
   <li>
    {
      user?.image ? (
        <div className="avatar">
  <div className="w-10 rounded-full">
       <Image alt="image" width={25} height={25} src={user?.image}></Image>
       </div>
</div>
      ) : (
        <div className="avatar placeholder">
          <div className="bg-neutral text-neutral-content w-12 rounded-full">
             <span className="text-xl flex items-center justify-center">
          {
            user?.name?.charAt(0).toUpperCase()
          }
             </span>
          </div>
        </div>
      )
    }
    
   </li>
 <li> <Link href={'/logout'}><button onClick={handleSignOut} className="btn rounded-xl bg-red-400 text-white">Logout</button></Link></li>

      </>  : <>
      <li> <Link href={'/login'}><button className="btn rounded-xl bg-blue-400 text-white">Login</button></Link></li>
   <li> <Link href={'/register'}><button className="btn rounded-xl bg-blue-400 text-white"> Register</button></Link></li>
      </>
    }

   
   
  </ul>
</div>
</div>
    
    )
}
export default Navber;