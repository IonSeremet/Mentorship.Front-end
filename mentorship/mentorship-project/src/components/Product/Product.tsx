import ProductItem from "../models/product";

const Product: React.FC<{ product: ProductItem[] }> = (props) => {
  return (
    <>
      <ul>
        {props.product.map((item) => (
          <>
            <li>{item.name}</li>
            <li>{item.category}</li>
          </>
        ))}
      </ul>
    </>
  );
};

export default Product;
