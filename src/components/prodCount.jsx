import "./prodCount.css";

const ProdCount = (props) => {
  return <h5 className="prodCount">We have {props.count} amazing products.</h5>;
};

export default ProdCount;
