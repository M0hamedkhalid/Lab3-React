import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProduct from "./routers/AddProduct.component";
import DetailsProduct from "./routers/DetailsProduct.component";
import EditProduct from "./routers/EditProduct.component";
import ListProduct from "./routers/ListProduct.component";
class MainPage extends Component {
  state = {
    products: this.props.products,
  };
  onAdd = (newProduct) => {
    console.log("inside Add", this.state);

    console.log("inside Add", this.state.products);
    let newArray = [...this.state.products, newProduct];
    this.setState({ products: newArray });
  };
  onEdit = (id, updated) => {
    let index = this.state.products.findIndex((p) => p.id === id);
    console.log("onEdit", index);
    console.log("onEdit product", this.state.products[index]);
    console.log("onEdit updated", updated);
    this.state.products[index] = updated;
    this.setState({ products: this.state.products });
  };
  onDelete = (index) => {
    let newProducts = this.state.products.filter((product, i) => {
      return i !== index;
    });
    this.setState({ products: newProducts });
  };
  render() {
    console.log(this.props.products);
    return (
      <Router>
        <Route
          component={() => (
            <ListProduct
              products={this.state.products}
              onDelete={this.onDelete}
            ></ListProduct>
          )}
          path="/"
          exact
        ></Route>
        <Route component={DetailsProduct} path="/Details/:id" exact></Route>
        <Route
          component={(props) => (
            <EditProduct onEdit={this.onEdit} {...props}></EditProduct>
          )}
          path="/Edit/:id"
          exact
        ></Route>
        <Route
          component={() => <AddProduct onAdd={this.onAdd}></AddProduct>}
          path="/Add"
          exact
        ></Route>
      </Router>
    );
  }
}

export default MainPage;
