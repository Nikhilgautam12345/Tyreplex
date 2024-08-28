import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
const Footer = () => {
  return (
    <div className="footer flex justify-center mt-10">
    <div className="sm:w-10/12 bg-white">
        <div className="questionSection p-3 flex justify-between" style={{backgroundColor:"#FFEAAA"}}>
           <div className="sm:w-2/3 w-fit poppins">
            <div className="font-semibold mb-3 sm:text-lg ">Have a question about Tyres?</div>
            <div className="lg:text-base text-sm">Get an answer in 24 hours from our experts.</div>
            <div className="mt-4"><input type="text" className="lg:text-base text-xs sm:px-4 px-2 py-2  w-full sm:w-10/12 rounded-full" placeholder="Ask or search your question"/></div>
            </div>
            <div className="sm:w-1/3 w-20 flex sm:justify-center mt-3">
                <img className="w-16 h-16" src="https://cdn.tyreplex.net/themes/moonlight/images/haveQuestion-bg.png?v=600&tr=q-60"/>
            </div>
        </div>


        <div className="infoSection p-3 sm:flex border-b justify-around">
        <div className="socialSecion mb-3 sm:mb-0">
            <div className="w-full flex justify-center" ><img src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo-mbl.png?tr=w-150,q-77&v=512" style={{width:"92px", height:"22px"}}/></div>
            <div className="flex pt-3 mr-3 justify-center space-x-2"><SlSocialFacebook className="size-5 text-gray-700"/><FaInstagram className="size-5 text-gray-700"/></div>
        </div>
        <div className="metaAboutSection text-sm text-gray-400 poppins ">
            <div>Who We Are</div>
            <div>Are you a Tyre Dealer?</div>
        </div>
        <div className="privacySection text-sm text-gray-400 poppins ">
            <div>Privacy Policy</div>
            <div>Terms of use</div>
        </div>
        <div className="contactSection text-sm text-gray-400 poppins ">
            <div>Contact Us</div>
            <div>Career</div>
            <div>Shipping & Return Policy</div>
        </div>
        </div>
        <div className="copyRightSection p-3 flex justify-center text-sm text-gray-400 poppins">
        ©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.
        </div>
        </div>
    </div>
  )
}

export default Footer