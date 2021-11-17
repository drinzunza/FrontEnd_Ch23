import React, { useState, useEffect } from "react";
import Product from "./product";
import DataService from "../services/dataService";
import ProdCount from "./prodCount";

const Catalog = () => {
  // create a data state variable to contain an array
  const [data, setData] = useState([]);

  const loadData = () => {
    console.log("catalog loaded!");
    // get data from the service
    let service = new DataService(); // create a instance of a class
    let response = service.getCatalog();
    console.log("The data", response);
    setData(response);
  };

  // when the component loads, execute the arrow fn
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="catalog-page">
      <h3>This is our amazing catalog!</h3>
      <ProdCount count={data.length}></ProdCount>
      <div className="product-container">
        {data.map((prod) => (
          <Product key={prod._id} prodData={prod}></Product>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
