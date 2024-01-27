import React from "react";
import IndividualCard from "./IndividualCard";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export default async function GameCards() {
  const products: ProductType[] = await getData();
  return (
    <main className="py-14">
      <div className="ml-2 lg:ml-28 md:mr-4 mr-0">
        <div className="flex flex-row justify-between my-4">
          <h1 className="font-pressStart px-0 sm:px-2 ml-4 md:text-4xl text-2xl">
            Most Trending
          </h1>
          <Link href="/shop" className="flex items-center gap-2 mr-4">
            <h2 className="hidden md:block"> GO TO GAME STORE</h2>{" "}
            <FaArrowRight />
          </Link>
        </div>

        <section>
          <div className="w-full h-42 overflow-y-scroll no-scrollbar flex space-x-4  overscroll-none p-3 ">
            {products?.map((product, index: number) => (
              <IndividualCard
                key={index}
                img={product.image}
                title={product.title}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
