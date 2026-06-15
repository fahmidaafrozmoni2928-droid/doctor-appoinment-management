import Image from "next/image";
import Link from "next/link";
import React from "react";


const Navber = () => {
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
  <div className="">
    <Link href={'/login'}><button className="btn bg-blue-400 text-white">Login</button></Link>
  </div>
</div>
</div>
    
    )
}
export default Navber;