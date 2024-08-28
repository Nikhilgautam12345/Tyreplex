import { FaCreditCard, FaRegCreditCard, FaWallet } from 'react-icons/fa';
import { IoIosCash } from 'react-icons/io';
import { CiBank } from "react-icons/ci";
const Payment = () => {
  return (
    <div className="paymentConatainer mt-4 flex justify-center poppins ">
    <div className='w-10/12 bg-white p-3 rounded'>
    <h2 className="font-semibold mb-3 sm:text-lg poppins ">Payment Methods</h2>
    
    <div className=" sm:flex sm:space-x-40 py-4 px-2">
    <div className='lg:text-base text-sm flex flex-col gap-y-4'>
      <div className="flex items-center ">
        <IoIosCash className="text-green-600 text-2xl" />
        <span className="ml-2">Deposit to Account</span>
      </div>

      
      <div className="flex items-center ">
        <FaCreditCard className="text-blue-600 text-2xl" />
        <span className="ml-2">Credit Card/Debit Card</span>
      </div>

      <div className="flex items-center ">
        <FaWallet className="text-blue-600 text-2xl" />
        <span className="ml-2">Wallets(PayTM /PhonePe/Amazon etc.)</span>
      </div>
    </div>
    <div className='lg:text-base text-sm flex flex-col gap-y-4'>
      <div className="flex items-center ">
        <CiBank className="text-blue-600 text-2xl" />
        <span className="ml-2">Net Banking</span>
      </div>
      
      <div className="flex items-center ">
        <FaRegCreditCard className="text-blue-600 text-2xl" />
        <span className="ml-2">UPI</span>
      </div>
      </div>

    </div>
  </div>
</div>
  );
};


export default Payment