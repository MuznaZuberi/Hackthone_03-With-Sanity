import Link from "next/link";
import Header from "../../components/Header";
// ============================
//   IMAGE IMPORTS SECTION
// ============================
import Image from "next/image";




// ============================
//   React Icons
// ============================
import { IoIosArrowForward } from "react-icons/io";

export default function Account() {
	return (
 <div>
 	       

        {/* Header Section Start*/} 	  	
               <Header/>
        {/* Header Section End*/}   
         


        {/* Account  Section Start */}
        <section>
        <div>
        <div>
        <div className="flex flex-wrap  py-32 px-10 relative mb-4">
        <Image
          alt="shop_bg_image"
          className="block opacity-100 absolute inset-0 w-full h-full"
          src="/images/cover.png"
          width = {600}
          height ={600}
        />
        <div className="text-center relative z-10 w-full">
        <h2 className="text-4xl md:text-6xl lg:text-6xl text-black font-bold font-sans mb-2">
                                         My Account
        </h2>
        <button className="mt-3 text-black font-bold font-sans inline-flex items-center px-12 py-2 rounded-2xl">
                                          <Link href = "/">Home</Link><IoIosArrowForward />My_Account         
        </button>
        </div>
        </div>
        </div>
        </div>
        </section>


        <section>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/1 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="md:pt-10 lg:pt-10 xl:pt-10  mb-3 text-4xl mb-4 font-bold font-sans text-black">
                                       Log In
        </h1>  
        <h2 className = "font-bold font-sans mb-4 mt-4">Username or email address
        </h2>
        <input type ="email" className = "md:w-80 lg:w-80 w-62 border border-1 border-black py-3 px-6 rounded-xl"/>
        <h2 className = "font-bold font-sans mb-4 mt-10">Password
        </h2>
        <input type ="email" className = "md:w-80 lg:w-80 w-62 border border-1 border-black py-3 px-6 rounded-xl"/>
        <div className="flex justify-center">
        <div>
        </div>
        </div>
        <button className="mt-14 inline-flex text-black font-sans font-bold  border border-1 border-black py-3 px-16 focus:outline-none  rounded-xl text-lg">
                                               Log in
        </button>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="md:pt-10 lg:pt-10 xl:pt-10 pt-20 mb-3 text-4xl mb-4 font-bold font-sans text-black">
 
                                                Register

        </h1>  
        <h2 className = "font-bold font-sans mb-4 mt-4">Email Address
        </h2>
        <input type ="email" className = "border border-1 border-black py-3 px-6 rounded-xl"/>
        <p className="mt-4 mb-8 leading-relaxed text-black font-sans">
                                    A link to set a new password will be sent to your email
                                    address.
        <br/>
        <br/>
                                    Your personal data will be used to support your experience throughtout this website, to manage access
                                    to your account, and for other purpose described in our 
        <b>Privacy Policy.</b>
        </p>
        <div className="flex justify-center">
        <button className="inline-flex text-black font-sans font-bold  border border-1 border-black py-3 px-16 focus:outline-none  rounded-xl text-lg">
                                     Register
        </button>
        </div>
        </div>
        </div>
        </section>








        <section  className = 'tricker my-20'>
        <div className = "py-24">
        <div className="flex flex-wrap">
        <div className="mx-auto  mx-auto lg:mb-0 mb-6">
        <div className="pl-4 h-full text-center">
        <h1 className = "text-black text-2xl md:text-3xl lg:text-3xl xl:text-3xl mb-3 text-left font-serif font-bold">Free Delivery</h1>
        <p className=" leading-relaxed font-sans text-justify text-gray-400 md:text-lg lg:text-lg text:md">
                                     For all orders over $50, consectetur
        <br/>
                                     adipim scing elit.
        </p>
        </div>
        </div>
        <div className="mx-auto lg:mb-0 mb-6 ">
        <div className="pl-4 h-full text-center">
        <h1 className = "text-black text-2xl md:text-3xl lg:text-3xl xl:text-3xl mb-3 text-left font-serif font-bold">90 Days Return</h1>
        <p className=" leading-relaxed font-sans text-justify text-gray-400 md:text-lg lg:text-lg text:md">
                                    If goods have problems, consectetur
        <br/>
                                    adipim scing elit.
        </p>
        </div>
        </div>
        <div className="mx-auto lg:mb-0 mb-6">
        <div className="pl-4 h-full text-center">
        <h1 className = "text-black text-2xl md:text-3xl lg:text-3xl xl:text-3xl mb-3 text-left font-serif font-bold">Secure Payment</h1>
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
        {/* Account Section End */}


 </div>


);
}