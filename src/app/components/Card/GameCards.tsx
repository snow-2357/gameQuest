import React from "react";
import IndividualCard from "./IndividualCard";

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
    <main className="rounded-lg ">
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
