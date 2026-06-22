import { headers } from "next/headers";

export const getAllDetails = async () => {
    const res = await fetch("http://localhost:5000/details", {
        cache: 'no-store'
    });
    const data = await res.json();
    return data;

};


export const getDoctorDetailsById = async(id, token) => {
        const res = await fetch(`http://localhost:5000/details/${id}`, {

            cache: 'no-store',
headers: {
        authorization: `Bearer ${token}` || ""
       }
        });

       
        const data = await res.json();
    return data;

}

