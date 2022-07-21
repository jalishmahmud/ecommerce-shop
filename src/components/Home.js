import React from 'react';
import { CartState } from '../context/Context';
import Filters from './Filters';
import SingleProduct from './SingleProduct';

import './style.css';

const Home = () => {
  const {
    state: { products },
    productState: { byStock, byFastDelivery, sort, byRating, searchQuery },
  } = CartState();
  const transformProduct = () => {
    let sortedProduct = products;
    if (sort) {
      sortedProduct = sortedProduct.sort((a, b) =>
        sort === 'lowToHigh' ? a.price - b.price : b.price - a.price
      );
    }
    if (!byStock) {
      sortedProduct = sortedProduct.filter((product) => product.inStock);
    }
    if (byFastDelivery) {
      sortedProduct = sortedProduct.filter((product) => product.fastDelivery);
    }
    if (byRating) {
      sortedProduct = sortedProduct.filter(
        (product) => product.ratings >= byRating
      );
    }
    if (searchQuery) {
      sortedProduct = sortedProduct.filter((product) =>
        product.name.toLowerCase().includes(searchQuery)
      );
    }
    return sortedProduct;
  };
  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {transformProduct().map((product) => (
          <SingleProduct product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
