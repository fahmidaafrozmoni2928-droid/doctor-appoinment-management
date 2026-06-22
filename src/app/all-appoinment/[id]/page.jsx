import { getDoctorDetailsById } from "@/lib/details/data";
import { IoMdTime } from "react-icons/io";
import { BsHospital } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineWallet } from "react-icons/hi2";
import Link from "next/link";
import Modal from "@/components/Modal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
const doctorDetailsPage = async({params}) => {

    const paramsPromise = await params;
    const {id} = paramsPromise;

    const { token } = await auth.api.getToken({
        
        headers: await headers(), // headers containing the user's session token
    });
    
    const data = await getDoctorDetailsById(id, token);
    console.log(data);


    


    return(
        <div className="max-w-4xl mx-auto">
           doctor details
           <div className="card card-side bg-base-100 shadow-sm">
  <figure className="w-1/2">
    <img
      src={data.image} className="w-full h-full object-cover"
      alt="doctor" />
  </figure>
  <div className="card-body">
    <h2 className="card-title font-bold text-2xl">{data.name}</h2>
    <h2 className="text-blue-400 font-semibold">{data.speciality}</h2>
    <p className="text-gray-500">{data.description}</p>
    <div className="grid grid-cols-2 gap-4">
        <div className="flex border border-white rounded-xl p-3 m-2 shadow-sm gap-3">
            <div className="flex items-center">
<IoMdTime className="text-blue-400" size={25} />
            </div>
            <div>
                <p className="text-gray-500">Experience</p>
                <p className="font-bold">{data.experience}</p>
            </div>
        </div>
        <div className="flex border border-white rounded-xl p-3 m-2 shadow-sm gap-3">
            <div className="flex items-center">
              <BsHospital className="text-blue-400" size={25}/>     
            </div>
            <div>
                <p className="text-gray-500" >Hospital</p>
                <p className="font-bold">{data.hospital}</p>
            </div>
        </div>
        <div className="flex border border-white rounded-xl p-3 m-2 shadow-sm gap-3">
            <div className="flex items-center">
              <IoLocationOutline className="text-blue-400" size={25} />
            </div>
            <div>
                <p className="text-gray-500">Location</p>
                <p className="font-bold">{data.location}</p>
            </div>
        </div>
        <div className="flex border border-white rounded-xl p-3 m-2 shadow-sm gap-3">
            <div className="flex items-center">
                <HiOutlineWallet className="text-blue-400" size={25}/>
            </div>
            <div>
                <p className="text-gray-500">Consultation Fee</p>
                <p className="font-bold">{data.fee}</p>
            </div>
        </div>
    </div>

    <div className="space-y-2">
        <p className="font-bold">Availability</p>
       
        <div className="badge badge-outline p-4 text-blue-400 border-blue-400">
            {data.availability}
        </div>
        
    </div>

   {/* <div className="card-actions justify-start m-3">
        <button className="btn bg-blue-500 text-white rounded-xl">Book Appoinment</button>
      
    </div>*/}

    <div className="card-actions justify-start m-3">
    <Modal data={data} />
</div>
  </div>
</div>
        </div>
    )
}
export default doctorDetailsPage;