  {/* <div className=" grid grid-cols-1 w-full">
       
       <div className="w-full h-12 bg-[#81A356] text-white  ">
          <p className="translate-y-1/2 ms-6"> </p>
          <img src="" alt="" />
       </div>

         
        <div className='text-center'>
            <Typography variant="h6"  >My Donations</Typography> 
            <hr className="border-black  border-3" />
            <p>We are not able to find any Information . Books details will be updated on priority basis once received to us
                                             For more details kindly Write to us at support@mypustak.com</p>
           <Button color="green"  
    className="bg-[#81A356] font-normal px-4 py-2 lg:ms-8 lg:text-[18px] text-[14px]">Donate</Button>
      
        </div>
             
       </div> */}


       import { useState } from "react";
       import { Link } from "react-router-dom";
       import { Button  } from "@material-tailwind/react";
       import Example from "./Navbar";
       
       const Sidebarud = () => {
         const [open, setOpen] = useState(true);
         const Menus = [
           { title: "My Profile", src:'./sidebar/profil.png' , to:"/" },
           { title: "My Donations", src:'./sidebar/donation.png' ,to:"/sidebar" },
           { title: "My Orders", src:'./sidebar/order.png' ,to:"" },
           { title: "My Wishlist", src:'./sidebar/wishlist.png' ,to:"" },
           { title: "My Address", src:'./sidebar/address.png' ,to:"" },
           { title: "Log out", src:'./sidebar/lo.png' ,to:"" },
       ];
          
        
             const placeholderStyle = {
               fontSize: '16px', // Change the font size
               // Add any other desired styles
             };
       
         return (
           <div className="flex justify-center items-center">
           <div className="2xl:container "> <Example/> <br /><br /> <br /><br /><br />  
           <div className="flex">
             <div
               className={`${open ? "xl:w-72 sm:w-10 w-10" : "w-20 sm:w-40"}`  }
               id="main"
             >
               <img
                 src="./sidebar/b.png"
                 alt="control"
                 className={` cursor-pointer  w-12  float-right border-dark-purple
                   border-none  ${!open && "rotate-180"}`}
                 onClick={() => setOpen(!open)}
               />
               <div className="flex gap-x-4 items-center">
               
                 <h1
                   className={`text-white origin-left font-medium text-xl duration-200 ${
                     !open && "scale-0"
                   }`}
                 >
                   <br />
                 </h1>
               </div>
               <ul className="pt-6 ">
                 {Menus.map((Menu, index) => (
                   <Link
                   to={Menu.to}
                     key={index}
                     className={`flex  rounded-md p-2 cursor-pointer hover:bg-green-700 hover:text-white text-sm items-center gap-x-4 
                     ${Menu.gap ? "mt-9" : "mt-2"} ${
                       index === 0 && "bg-light-white"
                     } `}
                   >
                     <img src={Menu.src} alt="asset" />
                     <span className={`${!open && "hidden"} origin-left duration-200`}>
                       {Menu.title}
                     </span>
                   </Link>
                 ))}
               </ul>
             </div>
              
             {/* USER */}
               <div>
              
            <div className="w-full h-12 bg-[#81A356] text-white  ">
               <p className="translate-y-1/2 ms-6"> Enter Your Personal Details</p>
               <img src="" alt="" />
           </div>
       
               <br />
                 {/* form */}
            
                
             <div className="lg:p-[60px] p-[30px]   bg-[#F0ECEC]  ">
             {/* heading */}
           
             {/* form */}
       
             <div className=''>
               <form
                 action=""
                 className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3"
               >
                 <div className="lg:text-[24px] text-[20px]  ps-12 pe-12">
                   <label htmlFor=" " className="">
                     First Name <span className="text-[red]">*</span>
                   </label>
                   <input
                     type="text" style={placeholderStyle}
                     className="w-full border rounded mt-1 p-3  " placeholder="   Enter your first name"
                   />
                 </div>
       
                 <div className="lg:text-[24px] text-[20px] ps-12 pe-12">
                   <label htmlFor="" className="">
                     Last Name <span className=" text-[red]">*</span>
                   </label>style={placeholderStyle}
                   <input
                     type="text" placeholder="  Enter your Last name"
                     className="w-full border rounded mt-1 p-3 "
                   />
                 </div>
                 <div className="lg:text-[24px] text-[20px] ps-12 pe-12">
                   <label htmlFor="">
                     E-mail  <span className="text-[red]">*</span>
                   </label>style={placeholderStyle}
                   <input
                     type="text" placeholder="   Enter your E-mail"
                     className="w-full border mt-1 p-3 rounded  "
                   />
                 </div>
       
                 <div className="lg:text-[24px] text-[20px] ps-12 pe-12">
                   <label htmlFor="">
                     Mobile Number <span className="text-[red]">* </span>
                   </label>style={placeholderStyle}
                   <input
                     type="text" placeholder="   Enter Mobile  no."
                     className="w-full border rounded mt-1 p-3 "
                   />
                 </div>
         
         
       
                 <div className="lg:text-[24px] text-[20px] ps-12 pe-12">
                   <label htmlFor="">
                     Profile Pic <span className="text-[red]">* </span>
                   </label>style={placeholderStyle}
                   <input
                     type="file" placeholder="  "
                     className="w-full border border-green-500 rounded mt-1 pt-1 "
                   />
                 </div>
         
                 <div className="lg:text-[24px] text-[20px] ps-12 pe-12">
                   <label htmlFor="" className="">
                     Full Address <span className="text-[red]">*</span>
                   </label>style={placeholderStyle}
                   <textarea name="" id=""  rows="3" className="w-full border  rounded ps-2"></textarea>
                 </div>
                 
               </form>
             </div>
             
       
             {/* address */}
            
       
             {/* <div className="grid lg:grid-cols-2 grid-cols-1 lg:ms-[150px]"> */}
             
       
          
               <center className="py-6">
              {/* <Link to='/store'> */}
               {/* <Button  className="bg-[#f05345] font-normal px-4 py-2 lg:text-[18px] text-[14px]">Cancel </Button> */}
               {/* </Link>  */}
              {/* <Link to='/' ><Button color="green" onClick={notify } 
               className="bg-[#81A356] font-normal px-4 py-2 lg:ms-8 lg:text-[18px] text-[14px]"> Submit</Button></Link> */}
       
               <Button color="green"  
                className="bg-[#81A356] font-normal px-4 py-2 lg:ms-8 lg:text-[18px] text-[14px]">Update</Button>
          
               </center>
           
           </div>
           {/* <ToastContainer position='bottom-center'/> */}
              
           </div>
       
       
           </div>
           </div>
           </div>
         );
       };
       export default Sidebarud;    