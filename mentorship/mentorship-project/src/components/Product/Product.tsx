import "./Product.css";
import ProductItem from "../models/product";
import img1 from "../../assets/imgProdus1.png";

const Product: React.FC<{ product: ProductItem }> = (props) => {
  const { product } = props;

  return (
    <div className="card">
      <img src={img1} />
      <h1 className="title">{product.name}</h1>
      <p>{product.description}</p>
      <div className="button-box">
        <button className="purchase">Purchase</button>
      </div>
    </div>
  );
};
export default Product;
