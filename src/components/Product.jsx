import React from "react";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  return (
    <>
      <Link to="/products/1">
        <div className="">
          <img
            src={item.img}
            alt="product"
            className="h-[350px] w-[380px] object-cover"
          />
        </div>
      </Link>
    </>
  );
};

export default Product;
