import React from "react";
import { Link } from "react-router-dom";
class AddProduct extends React.Component {
  state = {
    id: "",
    name: "",
    price: "",
  };
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
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
                this.props.onAdd({
                  id: this.state.id,
                  name: this.state.name,
                  price: this.state.price,
                });
              }}
            >
              Add New Product
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

export default AddProduct;
