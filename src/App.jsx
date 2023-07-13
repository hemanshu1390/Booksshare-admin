
import { Route,Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import ContactUs from "./pages/ContactUs"
import BookStorep from "./pages/Bookstorep"
import DonorForm from "./components/DonorForm"
import BookSellForm from "./components/BookSellForm"

import Donor from "./pages/Donor"
import AboutUs from "./pages/Aboutus"
import Blog from "./pages/Blog"
import Cart from "./components/Cart"
import Signadi from "./pages/SignIn"
import Signupo from "./pages/Signup"
import 'bootstrap/dist/css/bootstrap.min.css';


import Aboutus from "./pages/Aboutus"
import Address from "./components/Address"
import Sidebar from "./components/sidebar"
// import Sidebarud from "./components/userdonation"
// import Sidebarup from "./components/usermyprofile"
// import Asidebar from "./components/Adash"
// import Graph from "./components/Adashg"
// import Afeedback from "./components/feedback"
import Amtransaction from "./pages/Atransaction"
import Amorder from "./pages/Aorder"
import Cpass from "./components/Admin/cp"
import Asettingm from "./pages/Settingm"




const App = () => {
  return (
    <div>
   

<Routes>
  <Route path="/" element={<Landing/>} />
  <Route path="/aboutus" element={<AboutUs/>}/>
  <Route path="/blogpage" element={<Blog/>}/>
  <Route path="/contactus" element={<ContactUs/>}/>
  <Route path="/donor" element={<Donor/>}/>
  <Route path="/store" element={<BookStorep/>}/>
  <Route path="/donate" element={<DonorForm/>}/>
  <Route path="/aboutus" element={<Aboutus/>}/>
  <Route path="/sell" element={<BookSellForm/>}/>
  <Route path="/cart" element={<Cart/>}/>
  <Route path="/login" element={<Signadi/>}/>
  <Route path="/register" element={<Signupo/>}/>
  <Route path="/address" element={<Address/>}/>
  <Route path="/sidebar" element={<Sidebar/>}/>
  {/* <Route path="/userdonation" element={<Sidebarud/>}/> */}
  {/* <Route path="/userprofile" element={<Sidebarup/>}/> */}
  {/* <Route path="/aside" element={<Asidebar/>}/> */}
  {/* <Route path="/aside" element={<Asidebar/>}/> */}
  {/* <Route path="/agraph" element={<Graph/>}/> */}
  {/* <Route path="/afeedback" element={<Afeedback/>}/> */}
  <Route path="/amtransaction" element={<Amtransaction/>}/>
  <Route path="/amorder" element={<Amorder/>}/>
  <Route path="/cpass" element={<Asettingm/>}/>









  {/* <Route path="/address" element={<Address/>}/> */}
  {/* <Route path="/address" element={<Address/>}/> */}
  

  
  
</Routes>



    </div>
  )
}
export default App