import './Fruit.css'

export const FruitItem = ({ product :{title,url}}) => {
  return (
    <div>
      <div className="fruit-title">{title}</div>
      <img
        className="fruit-image" src={url}
        //  style={{ backgroundImage: `url(${url})` }}
      />
    </div>
  );
};

export const FruitList = ({products}) => {
  console.log("products:", products);
  return (
    <ul className="fruit-list">
      {products.map((product) => (
        <li className="fruit-item" key={product.id}>
            <FruitItem product={product}/>
        </li>
      ))}
    </ul>
  );
};
