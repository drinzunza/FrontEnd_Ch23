import React, { useState } from "react";
import "./product.css";
import QuantityPicker from "./quantityPicker";

const Product = (props) => {
  // create an state variable (quantity)
  const [quantity, setQuantity] = useState(1);

  const quantityChange = (val) => {
    console.log("Quantity has changed!", val);

    // set the state variable
    setQuantity(val);
  };

  const getTotal = () => {
    let total = quantity * props.prodData.price;
    return total.toFixed(2);
  };

  return (
    <div className="product">
      <label className="category">{props.prodData.category}</label>

      <img src={"/images/" + props.prodData.image} alt="" />

      <h5>{props.prodData.title}</h5>

      <h6>${getTotal()}</h6>
      <h6>${props.prodData.price.toFixed(2)}</h6>

      <QuantityPicker test="something" onQuantityChange={quantityChange}></QuantityPicker>

      <button className="btn btn-sm btn-dark">Add</button>
    </div>
  );
};

export default Product;
