"use client";
import {useState} from "react";
import Link from  "next/link";
// ============================
//   IMAGE IMPORTS SECTION
// ============================
import Image from "next/image";

// ============================
//   React Icons
// ============================
import { FaRegClock } from "react-icons/fa";
import { PiCalendarBlankBold } from "react-icons/pi"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { GrContactInfo } from "react-icons/gr";


export default function LandingPage() {
  const [items, setItem] = useState(0);
  function Cart() {
    setItem(items+1);
  }
  return (
    <div>
      
      <div className = "about-container">
         <header>
         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center gap-6 text-xl">
         <nav className="md:ml-auto mx-auto flex flex-wrap items-center text-base justify-center gap-4 md:gap-6 lg:gap-6 xl:gap-6 ">
         <Link href = "/" className="mr-5 text-black  font-sans cursor-pointer font-bold">Home</Link>
         <Link href = "/shop" className="mr-5 text-black  font-sans font-bold">Shop</Link>
         <Link href = "/cart" className="mr-5 text-black font-sans font-bold">Cart</Link>
         <Link href = "/contact" className="mr-5 text-black font-sans font-bold">Contact</Link>
         </nav>

         <div className = "flex gap-10">
         <Link href = "/contact"><b className = "cursor-pointer"><GrContactInfo/></b></Link>
         <b className = "cursor-pointer"><IoSearch/></b>
         <b className = "cursor-pointer"><FaRegHeart/></b>
         <span className = "relative">
         <Link href ="/cart"><AiOutlineShoppingCart/></Link>
         <span className = "absolute px-1 bg-red-600 text-white rounded-full -top-2 -right-2 text-xs">
            {items}
         </span>
         </span>
         </div>
         </div>
         </header>
         </div>


      {/* Section_01 Start */}
      {/*Hero section showcasing the "Rocket Single Seat"*/}
      <div className="about-container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pl-40 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="font-bold font-sans text-4xl lg:text-7xl md:text-7xl xl:text-7xl mb-4  text-black">
                                      Rocket single
      <br/>
                                      seater
      </h1>
      <br className="hidden lg:inline-block" />
       <Link href = "/shop"><h2 className = "font-bold font-sans text-xl text-black"><u>Shop Now</u></h2></Link>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/5 mb-10 md:mb-0">
      <Image
        className="rounded"
        alt="single_sofa_image"
        src="/images/single_sofa.png"
        width = {600}
        height = {600}

      />
      </div>
      </div>
      {/* Section_01 End */}





       {/* Section_02 Start */}
       <section className = "sec_02">
       <div className="container px-5 py-10 mx-auto">
       <div className="flex flex-wrap">
       <div className="sm:w-1/2 mb-10 px-4 text-center">
       <div className="rounded-lg  overflow-hidden">
          <Image
            alt="square_table_image"
            className="h-full w-full"
            src="/images/square_table.png"
            width = {600}
            height = {600}
       />
       </div>
       <h2 className="title-font text-3xl font-bold font-sans text-black mb-3">
                                Side table
       </h2>
        
       <button className="flex mx-auto text-xl mt-6 text-black font-bold font-sans border-0 py-2 px-5 focus:outline-none rounded">
       <Link href = "/shop"><u>View More</u></Link>
       </button>
       </div>
       <div className="sm:w-1/2 mb-10 px-4 text-center">
       <div className="rounded-lg overflow-hidden">
       <Image
            alt="3seater_sofa_image"
            className="h-full w-full"
            src="/images/3seater_sofa.png"
            width = {600}
            height = {600}
       />
       </div>
       <h2 className="pt-6 title-font text-3xl font-bold font-sans text-black mb-3">
                                 Side table
       </h2>
       <button className="flex mx-auto text-xl mt-6 text-black font-bold font-sans border-0 py-2 px-5 focus:outline-none rounded">
       <Link href = "/shop"><u>View More</u></Link>
       </button>
       </div>
       </div>
       </div>
       </section>
       {/* Section_02 End */}



       {/* Section_03 Start */}
       <section className="body-font">
       <div className="container px-5 py-24 mx-auto">
       <div className="flex flex-col">
       <h1 className = "text-center font-bold font-sans md:text-4xl lg:text-4xl xl:text-4xl text-2xl text-black">Top Picks For You</h1>
       <p className = "text-center font-sans text-gray-400 text-xl mb-20 mt-3">Find a bright ideal to suit your taste with our great selection of suspension, flooe and table lights.</p>
       </div>
       <div className="flex flex-wrap">
       <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
       <div className="relative group rounded-lg h-64 overflow-hidden">
        <Image
            alt="sofa set_image"
            className="w-full h-full"
            src= "/images/set_01.png"
            width = {600}
            height = {600}
        />
       <button onClick = {()=>Cart()} className = "text-center cart-btn absolute w-full py-1 font-bold font-serif text-white bottom-0 group-hover:opacity-100 opacity-0 transaction duration-300">Add to Basket</button>
        </div>
        <h2 className="text-lg font-sans text-black mt-5 md:text-left  lg:text-left xl:text-left text-center">
                                  <Link href = "/shops/product_01">Treton modular sofa_03</Link>
        </h2>
        <p className="font-sans font-bold leading-relaxed mt-2 text-xl md:text-left lg:text-left xl:text-left  text-center">
                                  RS 25,000.00
        </p>
        </div>
        <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
        <div className="relative group rounded-lg h-64 overflow-hidden">
        <Image
            alt="sofa set_image"
            className="w-full h-full"
            src= "/images/set_02.png"
            width = {600}
            height = {600}
        />
        <button onClick = {()=>Cart()}  className = "text-center cart-btn absolute w-full py-1 font-bold font-sans text-white bottom-0 group-hover:opacity-100 opacity-0 transaction duration-300">Add to Basket</button>

        </div>
        <h2 className="text-lg font-sans text-black mt-5 md:text-left  lg:text-left xl:text-left text-center">
                                   <Link href = "/shops/product_02">Granite dining table with 
        <br/>
                                 dining chair</Link>
        </h2>
        <p className="font-sans font-bold leading-relaxed mt-2 text-xl md:text-left lg:text-left xl:text-left  text-center">
                                 RS 25,000.00
        </p>
        </div>
        <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
        <div className="relative group rounded-lg h-64 overflow-hidden">
        <Image
            alt="sofa set_image"
            className="w-full h-full"
            src= "/images/set_03.png"
            width = {600}
            height = {600}
        />
       <button onClick = {()=>Cart()} className = "text-center cart-btn absolute w-full py-1 font-bold font-sans text-white bottom-0 group-hover:opacity-100 opacity-0 transaction duration-300">Add to Basket</button>

        </div>
        <h2 className="text-lg font-sans text-black mt-5 md:text-left  lg:text-left xl:text-left text-center">
                                 <Link href = "/shops/product_03"> Outdoor bar table and stool</Link>
        </h2>
        <p className="font-sans font-bold leading-relaxed mt-2 text-xl md:text-left lg:text-left xl:text-left  text-center">
                                  RS 25,000.00
        </p>
        </div>
        <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
        <div className="relative group rounded-lg h-64 overflow-hidden">
         
         <Image
            alt="sofa set_image"
            className="w-full h-full"
            src= "/images/set_04.png"
            width = {600}
            height = {600}

        />
       <button onClick = {()=>Cart()} className = "text-center cart-btn absolute w-full py-1 font-bold font-sans text-white bottom-0 group-hover:opacity-100 opacity-0 transaction duration-300">Add to Basket</button>

        </div>
        <h2 className="text-lg font-sans text-black mt-5 md:text-left  lg:text-left xl:text-left text-center">
                               <Link href = "/shops/product_04">Plain console with teak mirror
                               </Link>
        </h2>
        <p className="font-serif font-bold leading-relaxed mt-2 text-xl md:text-left lg:text-left xl:text-left  text-center">
                               RS 25,000.00
        </p>
        </div>
        </div>
        <p className = "text-center font-bold font-sans text-xl mt-8"><u><Link href = "/shop">View More</Link></u></p>
        </div>
        </section>
        {/* Section_03 End */}



        {/* Section_04 Start */}
        <section className="sec_04 body-font">
        <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
        <div className = "lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Image
            className="rounded"
            alt="Asgaard sofa_image"
            src="/images/asgaard_sofa.png"
            width={600}
            height = {600}
        />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col  items-center">
        <h1 className="text-center font-sans text-xl mb-4 text-black">
                                        New Arrivals
        </h1>  
        <h2 className="font-bold font-sans text-4xl md:text-4xl lg:text-6xl xl:text-6xl">
                                        Asgaard sofa
        </h2>
        <div className="flex justify-center">
        <Link href = "/shop/product_14" className="inline-flex text-black font-bold font-sans mt-10  border border-2 border-black py-2 px-14 focus:outline-none  rounded-xl text-lg">
                                        Order Now
        </Link>
        </div>
        </div>
        </div>
        </section>
        {/* Section_04 End */}


        {/* Section_05 Start */} 
        <section className=" body-font">
        <div className="container px-5 py-24 mx-auto">
        <h1 className = "text-center font-bold font-sans text-4xl text-black">Our Blogs</h1>
        <p className = "text-center font-sans text-gray-400 text-xl mb-20 mt-3">Find a bright ideal to suit your taste with our great selection.</p>
        <div className="flex flex-col">
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        <div className="p-4 md:w-1/3  sm:mb-0 mb-6 mx-auto mt-6">
        <div className="rounded-lg overflow-hidden">
        <Image
            alt="blog_image"
            className="h-full w-full"
            src="/images/blog_01.png"
            width = {600}
            height ={600}
         />
        </div>
        <h2 className="text-center text-xl font-sans text-black mt-5">
                                 Going all-in with millennial design
        <Link href = "/blog">                          
        <button className="flex mx-auto text-center md:text-xl lg:text-xl xl:text-xl text-sm text-black font-bold font-sans mt-3">
          <u>Read More</u>  
        </button>
        </Link>
        <div className = "flex mt-6 text-xl gap-2">
        <p className = "mx-auto flex md:text-md lg:text-md xl:text-md text-sm font-bold mr-3 font-sans"><FaRegClock/>5min 
        </p>
        <p className = "font-sans mx-auto flex md:text-md lg:text-md xl:text-md text-sm font-bold"><PiCalendarBlankBold/>12th 0ct 2022
        </p>
        </div>
        </h2>
        </div>
        <div className="p-4 md:w-1/3  sm:mb-0 mb-6 mx-auto mt-6">
        <div className="rounded-lg  overflow-hidden">
        <Image
            alt="blog_image"
            className="h-full w-full"
            src="/images/blog_02.png"
            width = {600}
            height ={600}
        />
        </div>
        <h2 className="text-center text-xl font-sans text-black mt-5">
                           Going all-in with millennial design 
        <Link href = "/blog">                                             
        <button className="flex mx-auto text-center text-black text-center md:text-xl lg:text-xl xl:text-xl text-sm font-bold font-sans mt-3">
        <u>Read More</u>  
        </button>
        </Link>
        <div className = "flex mt-6 text-xl gap-2">
        <p className = "font-sans mx-auto flex md:text-md lg:text-md xl:text-md text-sm font-bold mr-3"><FaRegClock/>5min 
        </p>
        <p className =  "font-sans mx-auto flex md:text-md lg:text-md xl:text-md text-sm font-bold"><PiCalendarBlankBold />12th 0ct 2022
        </p>
        </div>
        </h2>
        </div>
        <div className="p-4 md:w-1/3  sm:mb-0 mb-6 mx-auto mt-6">
        <div className="rounded-lg overflow-hidden">
        <Image
            alt="blog_image"
            className="h-full w-full"
            src="/images/blog_03.png"
            width = {600}
            height ={600}
         />
         </div>
         <h2 className="text-center text-xl font-sans text-black mt-5">
                                   Going all-in with millennial design
         <Link href = "/blog">                                                     
         <button className="flex mx-auto text-center text-black font-bold text-center md:text-xl lg:text-xl xl:text-xl  text-sm font-sans mt-3">
         <u>Read More</u> 
         </button>
         </Link> 
         <div className = "flex mt-6 text-xl gap-2">
         <p className = "font-sans mx-auto flex md:text-md lg:text-md xl:text-md text-sm font-bold mr-3"><FaRegClock/>5min 
         </p>
         <p className = "font-sans mx-auto flex md:text-md lg:text-md xl:text-md text-sm font-bold"><PiCalendarBlankBold />12th 0ct 2022
         </p>
         </div>
         </h2>
         </div>
         </div>
         <button className = "flex mx-auto font-bold font-sans text-xl mx-auto mt-12"><u><Link href = "/blog">View All Post</Link></u></button>
         </div>
        </section>
        {/* Section_05 End */}


    
        {/* Our Insta*/}
        <div>
        <div>
        <div className="flex flex-wrap  py-32 px-10 relative mb-4">
        <Image
          alt="instaPost"
          className="block opacity-100 absolute inset-0 w-full h-full"
          src="/images/our_insta.png"
          width = {600}
          height ={600}
        />
        <div className="text-center relative z-10 w-full">
        <h2 className="text-4xl md:text-6xl lg:text-6xl text-black font-bold font-sans mb-2">
                                          Our Instagram
        </h2>
        <p className="leading-relaxed font-sans font-bold">
                                          Follow our store on instagram.
        </p>
        <button className="mt-3 text-black bg-white font-bold font-sans inline-flex items-center px-12 py-2 rounded-2xl">
                                          Follow Us           
        </button>
        </div>
        </div>
        </div>
        </div>

    </div>
  );
}
