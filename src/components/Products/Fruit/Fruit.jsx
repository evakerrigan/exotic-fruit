import "./Fruit.css";
import { NavLink, useParams } from "react-router-dom";

export const FruitItem = ({ product: { title, url } }) => {
  return (
    <div>
      <img
        className="fruit-image"
        src={url}
        //  style={{ backgroundImage: `url(${url})` }}
      />
      <div className="fruit-title">{title}</div>
    </div>
  );
};

export const FruitList = ({ products }) => {
  console.log("products:", products);
  return (
    <ul className="fruit-list">
      {products.map((product) => (
        <li className="fruit-item" key={product.id}>
          <NavLink to={`/product/${product.id}`}>
            <FruitItem product={product} />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};


export const FruitDetail = ({ products }) => {
  const {productId} = useParams();
  console.log("FruitDetail:products:", products);

  const product = products.find(({id}) => id === productId);
  console.log("product:", product);

  return (
    <FruitItem product={product} />
  );
};
