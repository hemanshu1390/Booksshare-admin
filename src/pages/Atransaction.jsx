import Atransaction from "../components/Admin/Atransaction";
import Asidebar from "../components/Admin/Asidebar";
import Adminnavbar from "../components/Admin/Navbaradmin";
import Mnavbar from "../components/Admin/mnavbar";



export default function Amtransaction(){

    return(
         <>
  <div className=" ">
      <div className="2xl:container mx-auto w-full ">
           
           <div className="">            <Mnavbar />
           </div>

           {/* static  */}
           <div className="flex ">
              <div className="">
                <Asidebar/>  </div>
                <Atransaction />
                {/* <div className="absolute top-36 ps-2">
                </div> */}
            </div>
        </div>   </div>
         </>


    )






}