import React, { createContext, useContext, useReducer } from 'react';
import { faker } from '@faker-js/faker';
import { cartReducer } from './Reducer';

const Cart = createContext();

const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.food(640, 480, true),
    fastDelivery: faker.datatype.boolean(),
    inStock: faker.helpers.arrayElements([0, 3, 7, 8, 10], 1)[0],
    ratings: faker.helpers.arrayElements([1, 2, 3, 4, 5], 1)[0],
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
