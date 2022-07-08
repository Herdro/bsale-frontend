import React from "react";
import "@styles/Header.scss";

import menu from "@icons/icon_menu.svg";
import logo from "@logos/logobsale.jpg";
import useGetProducts from "../hooks/useGetProducts";

const API = "http://localhost:3000/api/category";

const Header = () => {
  const categories = useGetProducts(API)
  return (
    <nav>
      <img src={menu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          {categories.map(category => (
            <li>
              <a href={`/${category.name}`} >{category.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
