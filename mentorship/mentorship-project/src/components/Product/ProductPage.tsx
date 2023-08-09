import { useEffect, useState } from "react";
import Product from "./Product";
import ProductItem from "../models/product";
import "./ProductPage.css";

const ProductPage = () => {
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [query, setQuery] = useState("");

  const fetchProductsHandler = async () => {
    setIsLoading(true);

    const res = await fetch("https://localhost:8000/api/products", {
      method: "GET",
    });

    const productsList = (await res.json()) as ProductItem[];

    setIsLoading(false);
    setProducts(productsList);
  };

  useEffect(() => {
    fetchProductsHandler();
  }, []);

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <>
      <div className="search-container">
        <form action="/action_page.php">
          <input
            type="text"
            placeholder="Search.."
            name="search"
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </div>
      <div className="container">
        {products
          .filter((product) => product.name.toLowerCase().includes(query))
          .map((product, index) => (
            <Product product={product} key={index} />
          ))}
      </div>
    </>
  );
};

export default ProductPage;
