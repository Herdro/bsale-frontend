import React, { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import ProductCard from "@components/ProductCard";
import useGetProducts from "../hooks/useGetProducts";
import "../styles/Cards.scss";

const CardContainer = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const entries = Object.fromEntries([...searchParams]);
  console.log(entries);
  if (!entries.limit) {
    setSearchParams({ ...entries ,limit: 10 })
  }

  const { search } = useLocation();
  useEffect (() => {
  },[search])

  const API = `https://polar-falls-16849.herokuapp.com/api/product${search}`;
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
