import React, { useContext } from 'react';
import '../styles/Cards.scss';

import addCart from '@icons/bt_add_to_cart.svg';

const ProductCard = ({product}) => {
    return (
        <div className="product-card">
        <img src={product.urlImage} alt={product.title} />
        <div className="product-info">
          <div>
            <p>${product.price}</p>
            {product.discount > 0 ? <div>%{product.discount}</div> : null}            
            <p>{product.name}</p>
          </div>
          <figure>
            <img src={addCart} alt="" />
          </figure>
        </div>
      </div>
    );
}

export default ProductCard;