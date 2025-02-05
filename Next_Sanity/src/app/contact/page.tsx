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
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";

export default function ContactUs() {
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
          src="/images/cover.png"
          width = {600}
          height ={600}
        />
        <div className="text-center relative z-10 w-full">
        <h2 className="text-4xl md:text-6xl lg:text-6xl text-black font-bold font-sans mb-2">
                                         Contact
        </h2>
        <button className="mt-3 text-black font-bold font-sans inline-flex items-center px-12 py-2 rounded-2xl">
                                          <Link href = "/">Home</Link><IoIosArrowForward />Contact           
        </button>
        </div>
        </div>
        </div>
        </div>
        </section>
        {/* Section_02 End */}

       









         <h1 className = "md:text-4xl lg:text-4xl xl:text-4xl text-3xl text-center text-black font-bold font-sans mt-16">Get In Touch With US</h1>
         <p className = "text-justify px-3 md:text-lg lg:text-lg xl:text-lg text-lg mt-4 md:text-center lg:text-center xl:text-center text-gray-400 font-sans">For More Information About Our Product & Services.Please Feel! Free To Drop Us 
         <br/>
         An Email.Our Staff Always Be There Top Help You Out.Dont Hasitate.
         </p>



         <section className="text-gray-600 body-font relative">
         <div className="container px-5 py-10 flex sm:flex-nowrap flex-wrap">
         <div>    
         <div className="bg-white relative  py-6 rounded">
         <div className="px-4">
         <h2 className="flex font-bold font-sans text-black tracking-widest text-2xl gap-2">
                                      <FaLocationDot/>Address
         </h2>
         <p className="mt-1 ml-7 text-black font-sans">
                                      236 5th SE Avenue New
         <br/>
                                      York NY10000 United
         <br/>
                                      States
         </p>
         </div>
         <div className="px-4 mt-12">
         <h2 className="flex font-bold font-sans text-black tracking-widest text-2xl gap-2">
                                     <FaPhone/> Phone
         </h2>
         <p className="mt-1 ml-7 text-black font-sans">
              Mobile: +(84) 546-6789
         <br/>
              Mobile: +(84) 546-6789
         </p>
          <h2 className=" flex mt-12 font-bold font-sans text-black tracking-widest text-2xl gap-2">
              <FaClock/> Working Time
          </h2>
         <p className="mt-1 ml-7 text-black font-sans">
              Monday-Friday: 9:00-
          <br/>
              22:00
          <br/>
              Saturday-Sunday: 9:00-
          <br/>
              21:00
          </p>
          </div>
          </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-md text-black font-sans font-bold">
                                           Your Name
          </label>
          <input
          type="text"
          id="name"
          name="name"
          placeholder = "Abc"
          className="mt-3 w-full bg-white rounded-xl border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          </div>
          <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-md text-black font-sans font-bold">
          Your Email
          </label>
          <input
          type="email"
          id="email"
          name="email"
          placeholder ="Abc@def.com"
          className="mt-3 w-full bg-white rounded-xl border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          </div>
          <div className="relative mb-4">
          <label htmlFor="subject" className="leading-7 text-md text-black font-sans font-bold">
          Subject
          </label>
          <input
          type="email"
          id="email"
          name="email"
          placeholder = "This is an optional"
          className="mt-3 w-full bg-white rounded-xl border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
         />
         </div>
         <div className="relative mb-4">
         <label htmlFor="message" className="leading-7 text-md text-black font-sans font-bold">
         Message
         </label>
         <textarea
          id="message"
          name="message"
          placeholder = "Hi! i'd like to ask about "
          className="mt-3 w-full bg-white rounded-xl border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
          defaultValue={""}
         />
         </div>
         <button className="w-60 text-black  border border-1 border-black py-2 font-bold font-sans px-6 focus:outline-none  rounded-xl text-lg">
          Submit
         </button>
         </div>
         </div>
         </section>




  
         <section className = 'tricker my-20'>
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
    </div>




 );
}