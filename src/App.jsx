
import Deals from "./components/Deals/Deals"
import NavBar from "./components/NavBar/NavBar"
import ShopDesc from "./components/ShopDesc/ShopDesc"
import Service from "./components/Service/Serice"
import ReviewComponent from "./components/ReviewComponent/ReviewComponent"
import TyreCardListing from "./components/TyreCardListing/TyreCardListing "
import Payment from "./components/Payment/Payment"
import Footer from "./components/Footer/Footer"
function App() {

  return (
   <>
    <NavBar/>
    <ShopDesc/>
    <Deals/>
    <Service/>
    <ReviewComponent/>
    <TyreCardListing/>
    <Payment/>
    <Footer/>
    
   </>
  )
}

export default App
