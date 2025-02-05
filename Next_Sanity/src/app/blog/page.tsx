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
import { RiAdminFill } from "react-icons/ri";
import { FaCalendar } from "react-icons/fa6";
import { FaTags } from "react-icons/fa";

export default function Blog() {
	return (
    <div>
    	   {/* Header Section Start*/} 	  	
         <Header/>
         {/* Header Section End*/}   
         

        {/* Blogs Section*/}
        <section>
        <div>
        <div>
        <div className="flex flex-wrap  py-32 px-10 relative mb-4">
        <Image
          alt="blog"
          className="block opacity-100 absolute inset-0 w-full h-full"
          src="/images/cover.png"
          width = {600}
          height ={600}
        />
        <div className="text-center relative z-10 w-full">
        <h2 className="text-4xl md:text-6xl lg:text-6xl text-black font-bold font-sans mb-2">
                                         Blog
        </h2>
        <button className="mt-3 text-black font-bold font-sans inline-flex items-center px-12 py-2 rounded-2xl">
                                         <Link href = "/">Home</Link><IoIosArrowForward />Blog          
        </button>
        </div>
        </div>
        </div>
        </div>
        </section>


        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2  mb-10 lg:mb-0 rounded-lg overflow-hidden">
        <Image
          alt="blogs_img"
          className="w-full"
          src="/images/blog_02.png"
          width = {600}
          height ={600}
       />
        <div className = "flex gap-4 text-gray-400 font-bold mt-4 text-xs md:text-md lg:text-md xl:text-md">
        <div  className = "flex gap-2 font-sans"><RiAdminFill/>Admin</div>
        <div className = "flex gap-2 font-sans"><FaCalendar/>14 Oct 2022</div>
        <div className = "flex gap-2 font-sans"><FaTags/>Wood</div>
        </div>
        <h1 className="font-sans mt-6 text-3xl mb-4 text-black font-bold">
                         Going all-in with millennial design
        </h1>
        <p className="mb-8 leading-relaxed font-sans text-justify text-gray-400 text-md">
        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
        tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
        chambray.Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
        tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
        chambray.
        </p>
        <button className = "font-sans text-black font-bold"><u>Read More</u></button>



        <Image
        alt="blogs_img"
        className="w-full mt-20 rounded-xl "
        src="/images/blog_post_02.png"
        width = {600}
        height ={600}
        />
        <div className = "flex gap-4 text-gray-400 font-bold mt-4 text-xs md:text-md lg:text-md xl:text-md">
        <div  className = "flex gap-2 font-sans"><RiAdminFill/>Admin</div>
        <div className = "flex gap-2 font-sans"><FaCalendar/>14 Oct 2022</div>
        <div className = "flex gap-2 font-sans"><FaTags/>Wood</div>
        </div>
     
        <h1 className="font-sans mt-6 text-3xl mb-4 text-black font-bold">
                        Exploring new ways of decorating
        </h1>
        <p className="mb-8 leading-relaxed text-justify font-sans text-gray-400 text-md">
        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
        tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
        chambray.Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
        tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
        chambray.
        </p>
        <button className = "font-sans text-black font-bold"><u>Read More</u></button>

        <Image
          alt="blogs_img"
          className="w-full mt-20 rounded-xl"
          src="/images/blog_post_03.png"
          width = {600}
          height ={600}
       />
        <div className = "flex gap-4 text-gray-400 font-bold mt-4 text-xs md:text-md lg:text-md xl:text-md">
        <div  className = "flex gap-2 font-sans"><RiAdminFill/>Admin</div>
        <div className = "flex gap-2 font-sans"><FaCalendar/>14 Oct 2022</div>
        <div className = "flex gap-2 font-sans"><FaTags/>Wood</div>
        </div>
        <h1 className="font-sans mt-6 text-3xl mb-4 text-black font-bold">
                    Handmade pieces took time to make
        </h1>
        <p className="mb-8 leading-relaxed text-justify font-sans text-gray-400 text-md">
         Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
         plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
         tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
         chambray.Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
         plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
         tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
         chambray.
        </p>
        <button className = "font-sans text-black font-bold"><u>Read More</u></button>
        </div>
        <div className="mx-auto flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
        <div className="flex flex-col mb-10 lg:items-start items-center">
        <input type = "search" placeholder = "search here......." className = "px-6 py-2 border border-2 border-gray-400 rounded-xl"/>
        </div>
        <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="flex-grow">
        <h2 className="ml-7 text-black font-bold font-sans text-lg mb-3">
                              Categorise
        </h2>

        <section className="text-gray-600 body-font">
        <div  className="container px-5 py-4 mx-auto">
        <div className="lg:w-2/2 w-full overflow-auto">
        <table className="table-auto w-full text-left whitespace-no-wrap">
        <thead>
        <tr>                      
        </tr>
        </thead>
        <tbody>
        <tr>
            <td className="px-4 py-3 font-sans">Crafts</td>
            <td className="px-4 py-3 font-sans"></td>
            <td className="px-4 py-3 font-sans">2</td>
        </tr>
        <tr>
            <td className="px-4 py-3 font-sans">Design</td>
            <td className="px-4 py-3 font-sans"></td>
            <td className="px-4 py-3 font-sans">
                         8
        </td>
        </tr>
        <tr>
        <td className="px-4 py-3 font-sans">Homemade</td>
        <td className="px-4 py-3 font-sans"></td>
        <td className="px-4 py-3 font-sans">
                         7
        </td>
        </tr>
        <tr>
        <td className="px-4 py-3 font-sans">
                      Interior
        </td>            
        <td className="px-4 py-3 font-sans">
             
        </td>
        <td className="px-4 py-3 font-sans">
                          1
        </td>
        </tr>

        <tr>
        <td className=" px-4 py-3 font-sans">
                         Wood
        </td>
        <td className="px-4 py-3">
              
        </td>
        <td className="px-4 py-3 font-sans">
                      6
        </td>
        </tr>
        </tbody>
        </table>
        <div>
        <h2 className = "font-bold font-sans text-3xl text-black mt-64">Recent Posts</h2>
        <div>
        <div className = "flex gap-3 mt-6">
        <Image
          alt="blogs_img"
          className="w-24 h-24 rounded-xl"
          src="/images/repost_01.png"
          width = {600}
          height ={600}
        />
        <h2  className = "pt-2 text-black font-sans text-left md:text-lg lg:text-lg xl:text-lg  text-xs">Going in all with
        <br/> 
                           millennial design
        <p className = "text-gray-400 font-bold font-sans">03 Aug 2022</p>
        </h2>
        </div>

        <div className = "flex gap-3 mt-6">
        <Image
          alt="blogs_img"
          className="w-24 h-24 rounded-xl"
          src="/images/repost_02.png"
          width = {600}
          height ={600}
        />
        <h2  className = "pt-2 text-black font-sans text-left md:text-lg lg:text-lg xl:text-lg  text-xs">Exploring new ways
        <br/> 
                           of decorating
        <p className = "text-gray-400 font-bold font-sans">03 Aug 2022</p>
        </h2>
        </div>
        <div className = "flex gap-3 mt-6">
        <Image
          alt="blogs_img"
          className="w-24 h-24 rounded-xl"
          src="/images/repost_03.png"
          width = {600}
          height ={600}
        />
        <h2  className = "pt-2 text-black font-sans text-left md:text-lg lg:text-lg xl:text-lg  text-xs">Handmade pieces
        <br/> 
                          that took time to make
        <p className = "text-gray-400 font-bold font-sans">03 Aug 2022</p>
        </h2>
        </div>
        <div className = "flex gap-3 mt-6">
        <Image
          alt="blogs_img"
          className="w-24 h-24 rounded-xl"
          src="/images/repost_04.png"
          width = {600}
          height ={600}
        />
        <h2 className = "pt-2 text-black font-sans text-left md:text-lg lg:text-lg xl:text-lg  text-xs">Modern home in
        <br/> 
                    Milan
        <p className = "text-gray-400 font-bold font-sans">03 Aug 2022</p>
        </h2>
        </div>
        <div className = "flex gap-3 mt-6">
        <Image
          alt="blogs_img"
          className="w-24 h-24 rounded-xl"
          src="/images/repost_05.png"
          width = {600}
          height ={600}
        />
        <h2  className = "pt-2 text-black font-sans text-left md:text-lg lg:text-lg xl:text-lg  text-xs">Colorful office
        <br/> 
             redesign
        <p className = "text-gray-400 font-bold font-sans">03 Aug 2022</p>
        </h2>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
        </div>
        </div>
        </div>
        </div> 
        </section>

         <section className = 'sec_02 my-20'>
         <div className = "py-24">
         <div className="flex flex-wrap">
         <div className="mx-auto  mx-auto lg:mb-0 mb-6">
         <div className="pl-4 h-full text-center">
         <h1 className = "text-black text-2xl md:text-3xl lg:text-3xl xl:text-3xl mb-3 text-left font-serif font-bold">Free Delivery</h1>
         <p className=" leading-relaxed font-serif text-justify text-gray-400 md:text-lg lg:text-lg text:md">
                           For all orders over $50, consectetur
         <br/>
                           adipim scing elit.
         </p>
         </div>
         </div>
         <div className="mx-auto lg:mb-0 mb-6 ">
         <div className="pl-4 h-full text-center">
         <h1 className = "text-black text-2xl md:text-3xl lg:text-3xl xl:text-3xl mb-3 text-left font-serif font-bold">90 Days Return</h1>
         <p className=" leading-relaxed font-serif text-justify text-gray-400 md:text-lg lg:text-lg text:md">
                            If goods have problems, consectetur
         <br/>
                            adipim scing elit.
         </p>
         </div>
         </div>
         <div className="mx-auto lg:mb-0 mb-6">
         <div className="pl-4 h-full text-center">
         <h1 className = "text-black text-2xl md:text-3xl lg:text-3xl xl:text-3xl mb-3 text-left font-serif font-bold">Secure Payment</h1>
         <p className=" leading-relaxed font-serif text-justify text-gray-400 md:text-lg lg:text-lg text:md">
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