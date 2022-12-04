import "./Product.css";
import { NavLink, useParams } from "react-router-dom";

export const ProductItem = ({ product: { title, url } }) => {
  return (
    <div>
      <img
        className="product-image"
        src={url}
      />
      <div className="product-title">{title}</div>
    </div>
  );
};

export const ProductList = ({ products }) => {
  console.log("products:", products);
  return (
    <ul className="product-list">
      {products.map((product) => (
        <li className="product-item" key={product.id}>
          <NavLink to={`/products/${product.id}`}>
            <ProductItem product={product} />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};


export const ProductDetail = ({ products }) => {

  const { productId } = useParams();
  console.log("productId =", productId);

  console.log("ProductDetail:products:", products);

  const product = products.find(({id}) => id === productId);
  console.log("product:", product);

  return (
    <ProductItem product={product} />
  );
};
