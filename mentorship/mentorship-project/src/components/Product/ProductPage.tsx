import { useEffect, useState } from "react";
import Product from "./Product";
import ProductItem from "../models/product";

const ProductPage = () => {
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
      {products.map((product, index) => (
        <Product product={product} key={index} />
      ))}
    </>
  );
};

export default ProductPage;
