"use client";
import "./Product.css";

import { Card } from "flowbite-react";
import ProductItem from "../models/product";

const Product: React.FC<{ product: ProductItem }> = (props) => {
  const { product } = props;

  return (
    <Card>
      <img width={500} height={500} src={product.image_path} />
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {product.name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {product.description}
      </p>
    </Card>
  );
};

export default Product;
