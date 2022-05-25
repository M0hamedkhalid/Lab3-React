import { Link } from "react-router-dom";

let DetailsProduct = (props) => {
  console.log("inside details product", props);
  return (
    <div>
      <div className="card">
        <img
          src={"/images/" + `${props.location.selectedProduct.productimag}`}
          className="card-img-top"
          alt="..."
          style={{ width: "300px", height: "300px" }}
        />
        <div className="card-body">
          <h5 className="card-title">
            Name:{props.location.selectedProduct.name}
          </h5>
          <p className="card-text">
            Price {props.location.selectedProduct.price}
          </p>
          <Link to="/">Back To List </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsProduct;
