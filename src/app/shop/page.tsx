import React from "react";
import IndividualCard from "../_components/Card/IndividualCard";
import Dropdown from "../_components/Dropdown";

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

export default async function page() {
  const products: ProductType[] = await getData();
  return (
    <div className="ml-2 lg:ml-28 md:mr-4 mr-0">
      <section className="flex flex-row items-center justify-between px-8">
        <div>
          <h1>Search results for &quot;Valorant&quot;</h1>
          <p>10 results found</p>
        </div>
        <Dropdown />
      </section>
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-4 xl:gap-8 mt-10 mb-5"
      >
        {products.map((product) => {
          return (
            <IndividualCard
              key={product.id}
              img={product.image}
              title={product.title}
              //   size={"small"}
            />
          );
        })}
      </section>
    </div>
  );
}

// type ProductProps = {
//   item: ProductType;
// };

// const Product: React.FC<ProductProps> = ({ item }) => {
//   return (
//     <div className="w-72 bg-white shadow-md duration-500 hover:scale-105 hover:shadow-xl">
//       <div>
//         <div>
//           <Image
//             src={item.image}
//             alt="Product"
//             className="h-80 w-72 object-contain"
//           />
//         </div>
//         <div className="px-4 py-3 w-72">
//           {/* <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span> */}
//           <p className="text-xl font-bold text-black truncate block capitalize">
//             {item.title}
//           </p>
//           <div className="flex items-center">
//             <p className="text-lg font-semibold text-black cursor-auto my-3">
//               {item.price}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
