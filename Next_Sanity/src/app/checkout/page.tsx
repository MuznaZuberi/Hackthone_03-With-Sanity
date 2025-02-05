import Header from "../../components/Header";
import Link from "next/link";
// ============================
//   IMAGE IMPORTS SECTION
// ============================
import Image from "next/image";



// ============================
//   React Icons
// ============================
import { IoIosArrowForward } from "react-icons/io";

export default function Checkout() {
    return (
    <div>
         {/* Header Section_01 Start*/}           
         <Header/>
         {/* Header Section_01 Start*/}   
         
    
        {/* Section_02 Start */}
        <section>
        <div>
        <div>
        <div className="flex flex-wrap  py-32 px-10 relative mb-4">
        <Image
          alt="contact"
          className="block opacity-100 absolute inset-0 w-full h-full"
          src="/images/shop_slide.png"
          width ={600}
          height = {600}
        />
        <div className="text-center relative z-10 w-full">
        <h2 className="text-4xl md:text-6xl lg:text-6xl text-black font-bold font-sans mb-2">
                                         CheckOut
        </h2>
        <button className="mt-3 text-black font-bold font-sans inline-flex items-center px-12 py-2 rounded-2xl">
                                          <Link href = "/">Home</Link><IoIosArrowForward />Checkout         
        </button>
        </div>
        </div>
        </div>
        </div>
        </section>
        {/* Section_02 End */}

       


        <section className="text-gray-600 body-font">
        <div className="container md:px-20 lg:px-20 xl:px-20 px-10 py-24 mx-auto">
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        <div className="p-4 md:w-1/3 lg:1/3 xl:1/3 w-1/1 sm:mb-0 mb-6">
        <h2 className="text-2xl font-bold font-sans text-black mt-5">
                             Billing Details
        </h2>
        <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
        <div className="relative font-sans font-bold mt-4 ml-2">
        <label htmlFor="firstname" className="leading-7 text-sm text-gray-600">
                            First Name
       </label>
       <input
              type="text"
              id="firstname"
              name="firstname"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
       />
       </div>
       </div>
       <div className="p-2 w-1/2">
       <div className="relative font-sans font-bold mt-4 ml-2">
       <label htmlFor="lastname" className="leading-7 text-sm text-gray-600">
                              Last Name
       </label>
       <input
              type="text"
              id="lastname"
              name="lastname"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
       />
      </div>
      </div>
      <div className="relative font-sans font-bold mt-4 ml-3">
      <label htmlFor="companyname" className="leading-7 text-sm text-gray-600">
                                Company Name (Optional)
      </label>
      <input
              type="text"
              id="companyname"
              name="companyname"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
      </div>
      <div className="relative font-sans font-bold mt-4 ml-3">
      <label htmlFor="country/region" className="leading-7 text-sm text-gray-600 font-sans">
                               Country / Region
      </label>
      <input
              type="text"
              id="country/region"
              name="country/region"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
      </div>
      <div className="relative font-sans font-bold mt-4 ml-3">
      <label htmlFor="streetaddress" className="leading-7 text-sm text-gray-600">
                              Street Address
      </label>
      <input
              type="text"
              id="streetaddress"
              name="streetaddress"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
      </div>
      <div className="relative font-sans font-bold mt-4 ml-3">
      <label htmlFor="town/city" className="leading-7 text-sm text-gray-600">
                                    Town / City
      </label>
      <input
              type="text"
              id="town/city"
              name="town/city"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
      </div>
      <div className="relative font-sans font-bold mt-4 ml-3">
      <label htmlFor="province" className="leading-7 text-sm text-gray-600">
                                    Province
      </label>
      <input
              type="text"
              id="province"
              name="province"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
      </div>
      <div className="relative font-sans font-bold mt-4 ml-3">
      <label htmlFor="zipcode" className="leading-7 text-sm text-gray-600">
                                     ZIP code
      </label>
      <input
              type="text"
              id="zipcode"
              name="zipcode"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
      </div>
      <div className="relative font-sans font-bold mt-4 ml-3">
      <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
                                    Phone
      </label>
      <input
              type="text"
              id="phone"
              name="phone"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
     />
      </div>
      <div className="relative font-sans font-bold mt-4 ml-3">
      <label htmlFor="emailaddress" className="leading-7 text-sm text-gray-600">
                                 Email address
      </label>
      <input
              type="email"
              id="emailaddress"
              name="emailaddress"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
      </div>
      <div className="relative font-sans font-bold mt-4 ml-3">
      <label htmlFor="additionalinfo" className="leading-7 text-sm text-gray-600">
                              Additional Information
      </label>
      <input
              type="text"
              id="additionalinfo"
              name="additionalinfo"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
      </div>
      </div>
      </div>
        <div className="p-4 md:w-1/3 lg:1/3 xl:1/3 w-1/1 sm:mb-0 mb-6">
      <h2 className="text-xl font-bold font-sans text-black mt-5">
                              Product
      </h2>
      <p className="text-base leading-relaxed mt-2">
                             Asgaard sofa <b>x 1</b>
      </p>
      <h2 className = "mt-3 font-bold font-sans text-black">Subtotal</h2>
      <h2 className = "mt-3 font-bold font-sans text-black">Total</h2>
      <div className="mt-16 h-1  bg-gray-200 rounded overflow-hidden">
      <div className="w-full h-full bg-gray-200" />
      </div> 
      <h2 className = "mt-6 md:text-xl lg:text-xl xl:text-xl text-xs font-bold font-sans text-black">Direct Bank Transfer</h2>
      <p className  = "text-gray-400 font-sans pt-3">Make your payment directly into our bank account. Please use 
        your Order ID as the payment refrence. Your order will not be shipped until the funds have clean in our account.</p>
      <div className = "md:mt-4 lg:mt-4 xl:mt-4 mt-6  md:mb-4 lg:mb-4 xl:mb-4 mb-6 font-sans text-gray-400 font-bold md:text-lg lg:text-lg xl:text-lg text-xs ">
      <input type = "radio" name = "payment" id = "bankTransfer"/> Direct Bank Transfer
      <br/>
      <input type = "radio" name = "payment" id =  "bankTransfer" className = "mt-3"/> Cash On Delivery
      </div>
      <p className = "pt-3 font-sans text-black">Your personal data will be used to support your experience throughout this website,to manage access to your account,and for other purpose described in our <b>privacy policy.</b></p>
      <button className = "border border-1 border-black md:px-12 lg:px-12  xl:px-12  px-2 text-black font-sans font-bold text-lg mt-6 py-3 rounded-xl">Place Order</button>
      </div>
      <div className="p-10 md:w-1/3 sm:mb-0 mb-6">
      <h2 className="text-xl font-bold font-sans text-black mt-5">
                                     Subtotal
      </h2>
      <p className="text-base leading-relaxed mt-2 font-sans">
                                     Rs 250,000.00
      </p>
      <p className="text-base leading-relaxed mt-2 font-sans">
                                      Rs 250,000.00
      </p>
      <h2 className = "font-bold font-sans text-xl mt-2 text-yellow-600">Rs. 250,000.00</h2>
      </div>
      </div>
      </div>
      </section>







         <section className = 'sec_02 my-20'>
         <div className = "py-24">
         <div className="flex flex-wrap">
         <div className="mx-auto  mx-auto lg:mb-0 mb-6">
         <div className="pl-4 h-full text-center">
         <h1 className = "text-black text-2xl md:text-3xl lg:text-3xl xl:text-3xl mb-3 text-left font-sans font-bold">Free Delivery</h1>
         <p className=" leading-relaxed font-sans text-justify text-gray-400 md:text-lg lg:text-lg text:md">
                           For all orders over $50, consectetur
         <br/>
                           adipim scing elit.
         </p>
         </div>
         </div>
         <div className="mx-auto lg:mb-0 mb-6 ">
         <div className="pl-4 h-full text-center">
         <h1 className = "text-black text-2xl md:text-3xl lg:text-3xl xl:text-3xl mb-3 text-left font-sans font-bold">90 Days Return</h1>
         <p className=" leading-relaxed font-sans text-justify text-gray-400 md:text-lg lg:text-lg text:md">
                            If goods have problems, consectetur
         <br/>
                            adipim scing elit.
         </p>
         </div>
         </div>
         <div className="mx-auto lg:mb-0 mb-6">
         <div className="pl-4 h-full text-center">
         <h1 className = "text-black text-2xl md:text-3xl lg:text-3xl xl:text-3xl mb-3 text-left font-sans font-bold">Secure Payment</h1>
         <p className=" leading-relaxed font-sans text-justify text-gray-400 md:text-lg lg:text-lg text:md">
                             100% secure payment consectetur
         <br/>
                             adipim scing elit.
         </p>
         </div>
         </div>
         </div>
         </div>
         </section>  

    </div>







   );
}