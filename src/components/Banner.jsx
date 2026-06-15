import Image from "next/image";
import React from "react";

const Banner = () => {
    return(
        <div className="bg-blue-50 ">
        <div className="max-w-7xl mx-auto py-8 ">
            
            <Image src="/banner.png.png" alt="banner" width={1300} height={800}></Image> 
         </div>    
        </div>
    )
}
export default Banner;