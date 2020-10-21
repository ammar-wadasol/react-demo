import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../assets/default-image.png";

const Product = ({image, name, price}) => {
  const imageUrl = image && image.url;
  return (
    <div className="flex mb-2 p-2 border rounded-full">
      <div className="w-20 flex">
        {/* {image ? (
          <img src={image.url} alt={name} className="w-20 h-20 rounded-full" />
        ) : (
          <p className="w-20 h-20 py-8 px-2">{name}</p>
        )} */}
        <img
          src={imageUrl || defaultImage}
          alt={name}
          className="w-20 h-20 rounded-full"
        />
      </div>
      <div className="flex-col text-left px-4 py-4">
        <div className="flex">
          <p className="mb-0 font-semibold w-10 mx-4">Name</p>
          <p className="mb-0 ">{name}</p>
        </div>
        <div className="flex">
          <p className="mb-0 font-semibold w-10 mx-4">Price</p>
          <p className="mb-0 ">{price || "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// Product.defaultProps = {
//   image: defaultImage,
//   name: "default name",
//   price: 3.99,
// };

export default Product;
