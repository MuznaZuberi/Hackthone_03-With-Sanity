"use client";
import Link from "next/link";
import Header from "../../components/Header";
import { useState, useEffect } from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import {client} from "../../sanity/lib/client"; // Sanity client import


type ProductDetails = {
  id: number;
  image: string;
  title: string;
  description: string;
  price: string;
};

export default function Cart() {
  const [products, setProducts] = useState<ProductDetails[]>([]);
  const [cart, setCart] = useState<ProductDetails[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await client.fetch(`*[_type == "product"]{
        _id,
        title,
        description,
        "image": image.asset->url,
        price
      }`);
      setProducts(data);
    }
    fetchData();
  }, []);

  const addToCart = (product: ProductDetails) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (index: number) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const totalAmount = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.-]+/g, "").replace(/,/g, ""));
    return sum + price;
  }, 0);

  return (
    <div>

      <Header />


      <section>
      <div>
      <div className="flex flex-wrap py-32 px-10 relative mb-4">
      <Image
              alt="shopcover_image"
              className="block opacity-100 absolute inset-0 w-full h-full"
              src="/images/cover.png"
              width={600}
              height={600}
      />
      <div className="text-center relative z-10 w-full">
      <h2 className="text-4xl md:text-6xl lg:text-6xl text-black font-bold font-serif mb-2">
                                                    Cart
      </h2>
      <Link href="/" className="mt-3 text-black font-bold font-serif inline-flex items-center px-12 py-2 rounded-2xl">
                Home <IoIosArrowForward /> Cart
      </Link>
      </div>
      </div>
      </div>
      </section>
      <div className="flex xl:flex-row flex-col justify-between px-6">
      <div>
          {products.map((product) => (
      <div key={product.id}>
      <div className="flex md:flex-row lg:flex-row xl:flex-row flex-col gap-7 py-4 rounded-xl items-center shadow-xl px-4 mb-10">
      <Image src={product.image} alt={product.title} width={200} height={200} />
      <h2 className="font-sans font-bold text-md lg:text-xl">{product.title}</h2>
      <p className="text-gray-400 text-lg font-bold font-sans">{product.price}</p>
      <button onClick={() => addToCart(product)} className="about-container px-6 py-2 text-black font-bold font-sans rounded-xl">
                                            AddToCart
      </button>
      </div>
      </div>
          ))}
      </div>
      <div className="shadow-xl h-full text-4xl px-16 py-6 mt-10 font-bold font-sans text-center">
          Cart Items
          {cart.length === 0 ? (
            <p className="text-sm">Your cart is empty.</p>
          ) : (
      <div>
              {cart.map((item, index) => (
      <div key={index} className="flex justify-between items-center mt-4">
      <div>
      <h3 className="text-sm mt-10 text-justify">{item.title}</h3>
      <p className="text-sm text-justify">{item.price}</p>
      </div>
      <button onClick={() => removeFromCart(index)} className="text-red-500 text-sm ml-6 mt-10">
                                        Remove
      </button>
      </div>
              ))}
      <h3 className="mt-4 text-xl text-justify mt-6">
                SubTotal: <p className="text-md text-gray-400"> Rs.{totalAmount.toFixed(2)}</p>
      </h3>
      <h3 className="mt-4 text-xl text-justify">
                Total: <p className="text-md text-yellow-600"> Rs.{totalAmount.toFixed(2)}</p>
      </h3>
      <button className="border border-1 border-black px-4 rounded-xl mt-6 py-2 md:text-xl lg:text-xl xl:text-xl text-sm">Check Out</button>
      </div>
          )}
      </div>
      </div>
      <section className="sec_02 my-20">
      <div className="py-24">
      <div className="flex flex-wrap">
            {/* ... rest of your Free Delivery, 90 Days Return, Secure Payment sections ... */}
      </div>
      </div>
      </section>
    </div>
  );
}
