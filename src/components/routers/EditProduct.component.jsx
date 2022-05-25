import React from "react";
import { Link } from "react-router-dom";
class EditProduct extends React.Component {
  state = {
    id: this.props.location.selectedProduct.id,
    name: this.props.location.selectedProduct.name,
    price: this.props.location.selectedProduct.price,
  };
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    console.log("inside Edit", this.props);
    return (
      <div>
        <form>
          <div className="form-group">
            <label>Id</label>
            <input
              onChange={this.handleInput}
              type="number"
              className="form-control"
              name="id"
              value={this.state.id}
            />
          </div>
          <div className="form-group">
            <label>Name</label>
            <input
              onChange={this.handleInput}
              type="text"
              className="form-control"
              name="name"
              value={this.state.name}
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              onChange={this.handleInput}
              type="text"
              className="form-control"
              name="price"
              value={this.state.price}
            />
          </div>
          <div>
            <button
              type={"button"}
              className="btn btn-success"
              onClick={() => {
                this.props.onEdit(this.props.location.selectedProduct.id, {
                  id: this.state.id,
                  name: this.state.name,
                  price: this.state.price,
                });
                this.props.history.push("/");
              }}
            >
              Edit Product
            </button>
          </div>
        </form>
        <div>
          <Link to="/" className="btn btn-primary">
            Back To List
          </Link>
        </div>
      </div>
    );
  }
}

export default EditProduct;
