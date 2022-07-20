import React from 'react';
import { CartState } from '../context/Context';

const Home = () => {
  const {
    state: { products },
  } = CartState();
  console.log(products);
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

export default Home;
