import Product from "./product";

const Catalog = () => {
  return (
    <div className="catalog-page">
      <h3>This is our amazing catalog!</h3>
      <div className="product-container">
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
      </div>
    </div>
  );
};

export default Catalog;
