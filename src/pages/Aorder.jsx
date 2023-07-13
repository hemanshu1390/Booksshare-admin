import Aorder from "../components/Admin/Aorder";
import Asidebar from "../components/Admin/Asidebar";
import Mnavbar from "../components/Admin/mnavbar";



export default function Amorder(){

    return(
         <>
  <div className=" ">
      <div className="2xl:container mx-auto w-full ">
           
           <div className="">            <Mnavbar />
           </div>

           {/* flex w-full */}
            <div className="static ">          
            <Aorder/>
                <div className="absolute top-28 ps-2">
                 <Asidebar />
                </div>
            </div>
        </div>   </div>
         </>


    )






}