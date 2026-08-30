


      



export const getAllDetails = async (search = "") => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/details?search=${search}`, {
        cache: 'no-store',
        credentials: "include"
    });
   // const data = await res.json();
    return res.json();

};




export const getDoctorDetailsById = async(id, token) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/details/${id}`, {

            cache: 'no-store',
headers: {
        authorization: `Bearer ${token}` || ""
       }
        });

       
        const data = await res.json();
    return data;

}

