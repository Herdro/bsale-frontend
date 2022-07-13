import React, { useRef } from "react";
import { useSearchParams, useNavigate, } from "react-router-dom";
import ProductCard from "@components/ProductCard";
import useGetProducts from "../hooks/useGetProducts";
import "../styles/Cards.scss";

const CardContainer = () => {
  let [searchParams] = useSearchParams();
  if (searchParams.has("limit") === false) {
    searchParams.append("limit", "10");
  }

  const form = useRef(null);

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const data = {
      search: formData.get("search"),
    };
		console.log(data);
  };

  const API = `https://polar-falls-16849.herokuapp.com/api/product?${searchParams.toString()}`;
  console.log(API);
  const products = useGetProducts(API);

  return (
    <section className="main-container">
      <form action="/" className="form" ref={form}>
        <input
          type="text"
          name="search"
          placeholder="busqueda"
          className="input input-email"
        />
        <button onClick={handleSubmit} className="primary-button login-button">
          Buscar
        </button>
      </form>
      <div className="cards-container">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default CardContainer;
