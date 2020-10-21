import React, {useState, useEffect} from "react";
import UseFetch from "./useFetch";
import Product from "./products";

const url = "https://course-api.netlify.app/api/react-prop-types-example";

const CustomHooks = () => {
  const {products} = UseFetch(url);
  console.log(products.map(item => item.image));
  return (
    <div className="container">
      <h2 className="pb-6">Products</h2>
      {products.map(product => {
        return <Product key={product.id} {...product} />;
      })}
    </div>
  );
};

export default CustomHooks;
