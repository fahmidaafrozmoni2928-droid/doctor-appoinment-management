
import Card  from "@/components/Card";
import { getAllDetails } from "@/lib/details/data";


const allAppoinmentPage = async() => {
    const detailsData = await getAllDetails();
    console.log(detailsData);
    return(
        <div>
           <h1>All Appoinment</h1>
      
           <div className="grid grid cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto ">
            {
                detailsData?.map(detail => <Card key={detail._id} detail={detail} ></Card>

                
           ) }
           </div>
        </div>
    )
}
export default allAppoinmentPage;