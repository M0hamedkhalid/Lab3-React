import { Link } from "react-router-dom";

let ListProduct = (props) => {
  let list = props.products.map((product, index) => {
    return (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.quantity}</td>
        <td>
          <img
            src={"images/" + product.productimag}
            alt="product"
            style={{
              width: "80px",
              height: "80px",
            }}
          />
        </td>
        <td>
          <Link
            className="btn btn-primary me-2"
            to={{
              pathname: `/Details/${product.id}`,
              selectedProduct: product,
            }}
          >
            Details
          </Link>
          <Link
            className="btn btn-primary me-2"
            to={{
              pathname: `/Edit/${product.id}`,
              selectedProduct: product,
            }}
          >
            Edit
          </Link>
          <button
            className="btn btn-danger"
            onClick={() => {
              props.onDelete(index);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
  return (
    <>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Image</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
      <div>
        <Link to="/Add" className="btn btn-primary btn-lg offset-6">
          Add
        </Link>
      </div>
    </>
  );
};

export default ListProduct;
