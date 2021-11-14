import React, { useState } from "react";

const QuantityPicker = () => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    let val = quantity + 1;
    setQuantity(val);
  };

  const decrease = () => {
    if (quantity > 1) {
      let val = quantity - 1;
      setQuantity(val);
    }
  };

  const test1 = () => {
    return <button>TEST</button>;
  };

  return (
    <div className="quantity-picker">
      <button className="btn btn-sm btn-info" onClick={increase}>
        +
      </button>

      <label>{quantity}</label>

      <button className="btn btn-sm btn-info" onClick={decrease}>
        -
      </button>
    </div>
  );
};

export default QuantityPicker;
