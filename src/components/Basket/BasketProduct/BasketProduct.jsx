import "./BasketProduct.css";
import { useState } from "react";

export const BasketProduct = (productId) => {
  const [basket, setBasket] = useState({ "products": {} });

  // console.log("исходный basket =", basket);

  const addProductToBasket = (productId) => {
    console.log("ткнули на плюс, productId =", productId);

    const initProductCount = basket.products[productId] || 0;
    setBasket({
      ...basket,
      products: {
        ...basket.products,
        [productId]: initProductCount + 1,
      },

      // if (productId in basket.products) {
      //   basket.products[productId] = initProductCount + 1
      // } else {
      //   basket.products[productId] = 1
      // }
    });
    console.log("basket =", basket);
  };

  const removeProductToBasket = (productId) => {
    console.log("ткнули на минус, productId =", productId);

    const initProductCount = basket.products[productId] || 0;
    setBasket({
      ...basket,
      products: {
        ...basket.products,
        [productId]: initProductCount - 1
      }
    });
    console.log('basket =', basket);
  };

  return (
    <div>
      {/* <button onClick={() => addProductToBasket(productId)} className="basket-product">+</button> */}
      <div className="basket-product-wrapper">
        <div className="">
          <button
            className="basket-product-button"
            type="button"
            onClick={() => removeProductToBasket(productId)}
          >
            -
          </button>
        </div>
        <input
          placeholder="0"
          type="text"
          name=""
          defaultValue="0"
          id=""
          className="basket-product-input"
          readOnly
        />
        <div className="">
          <button
            className="basket-product-button"
            type="button"
            onClick={() => addProductToBasket(productId)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
