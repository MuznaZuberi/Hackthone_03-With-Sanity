"use client";
import { useState } from "react";

import Link from "next/link";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { GrContactInfo } from "react-icons/gr";

export default function Header() {
   const [items] = useState(0);

   return (
   	  <div>  	
         {/* Header Section Start */}  	
         <header>
         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center gap-6 text-xl">
         <nav className="md:ml-auto mx-auto flex flex-wrap items-center text-base justify-center gap-4 md:gap-6 lg:gap-6 xl:gap-6 ">
         <Link href = "/" className="mr-5 text-black  font-sans cursor-pointer font-bold">Home</Link>
         <Link href = "/shop" className="mr-5 text-black  font-sans font-bold">Shop</Link>
         <Link href = "/cart" className="mr-5 text-black  font-sans font-bold">Cart</Link>
         <Link href = "contact" className="mr-5 text-black font-sans font-bold">Contact</Link>
         </nav>

         <div className = "flex gap-10">
         <Link href = "/contact"><GrContactInfo/></Link>
         <IoSearch/>
         <FaRegHeart/>
         <span className = "relative">
             <Link href = "/cart"><AiOutlineShoppingCart/></Link>
         <span className = "absolute px-1 bg-red-600 text-white rounded-full -top-2 -right-2 text-xs">
                  {items}
         </span>
         </span>
         </div>
         </div>
         </header>
         {/* Header Section End */}    
   	  </div>

   	);
}