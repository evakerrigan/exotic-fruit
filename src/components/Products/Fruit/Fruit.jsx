import './Fruit.css'

export const FruitItem = ({ product :{title,url}}) => {
  return (
    <div>
      <img
        className="fruit-image" src={url}
        //  style={{ backgroundImage: `url(${url})` }}
      />
      <div className="fruit-title">{title}</div>
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
