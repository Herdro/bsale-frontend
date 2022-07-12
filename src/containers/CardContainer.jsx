import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "@components/ProductCard";
import useGetProducts from "../hooks/useGetProducts";
import "../styles/Cards.scss";

const CardContainer = () => {
  let [searchParams] = useSearchParams();
  if (searchParams.has('limit') === false) {
    searchParams.append('limit', '10')
  } 

  const API = `https://polar-falls-16849.herokuapp.com/api/product?${searchParams.toString()}`;
  console.log(API);
  const products = useGetProducts(API);
  
  return (
    <section className="main-container">
      <div className="cards-container">
        {products.map(product => (
            <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default CardContainer;
