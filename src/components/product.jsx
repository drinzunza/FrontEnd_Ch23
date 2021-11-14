import "./product.css";
import QuantityPicker from "./quantityPicker";

const Product = () => {
  return (
    <div className="product">
      <img src="https://picsum.photos/200/300" alt="" />
      <h5>Title here</h5>

      <h6>$Total</h6>
      <h6>$Price</h6>

      <QuantityPicker></QuantityPicker>

      <button className="btn btn-sm btn-dark">Add</button>
    </div>
  );
};

export default Product;
