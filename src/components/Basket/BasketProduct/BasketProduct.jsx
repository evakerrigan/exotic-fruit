import './BasketProduct.css';
import { useState } from "react";

export const BasketProduct = (productId) => {

const [ basket, setBasket ] = useState({products: {}});

const addProductToBasket = (productId) => {
  const initProductCount = basket.products[productId] || 0;
  setBasket({
    ...basket,
    products: {
      ...basket.products,
      [productId]: initProductCount + 1
    }
  });
  console.log('basket =', basket);
}


  return (
    <div>
      <button onClick={() => addProductToBasket(productId)} className="basket-product">+</button>
    </div>
  )
}