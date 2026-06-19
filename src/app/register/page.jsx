'use client';
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const registerPage = () => {

    const onSubmit = async(e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData);

        console.log(user);

        const {data, error} = await authClient.signUp.email({
            email: user.email,
            password: user.password,
            name: user.name,
            image: user.image
        })
        console.log({data, error});

        if(data){
            redirect('/')
        }

        if(error) {
            alert("something is error")
        }
    };

    const handleGoogleRegister = async() => {
        await authClient.signIn.social({
            provider: "google"
        })
    }
    return(
        
        <div className="max-w-7xl mx-auto  ">
            
<h1 className="font-bold text-2xl flex justify-center items-center">Register</h1>
            <p className="text-gray-500 flex justify-center items-center">Create your account</p>
        
            
            <form onSubmit={onSubmit} className="fieldset bg-base-100 border-base-300 rounded-box w-xs border p-4">

                 <label className="font-semibold">Name</label>
  <input type="text" name="name" className="input" placeholder="Name" />
  

  <label className="font-semibold">Email</label>
  <input type="email" name="email" className="input" placeholder="Email" />

   <label className="font-semibold">Photo URL</label>
  <input type="text" name="photo url" className="input" placeholder="Photo URL" />

  <label className="font-semibold">Password</label>
  <input type="password" name="password" className="input" placeholder="Password" />

  <button type="submit" className="btn bg-blue-400 text-white mt-4">Register</button>

 
</form>
<div className="flex justify-center items-center text-gray-500">
    OR
</div>
<div>
    <button onClick={handleGoogleRegister} className="btn bg-white text-black mt-4 w-full"><FcGoogle /> Continue with Google</button>
</div>
<div className="flex justify-center items-center">
 <p className="text-gray-500">Already have an account?<Link href={"/login"}>Login</Link></p>
 </div>
        </div>
        
    )
}
export default registerPage;