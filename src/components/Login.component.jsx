import { Component } from "react";
import App from "../App.js";
class LoginIn extends Component {
  state = {
    user: { name: "mohamed", pass: "123" },
    txtname: "",
    txtpass: "",
    isValid: false,
  };
  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    let obj = { name: this.state.txtname, pass: this.state.txtpass };
    console.log("inside Submit obj", obj);
    console.log("inside Submit stateuser", this.state.user.name);
    if (
      this.state.user.name === obj.name &&
      this.state.user.pass === obj.pass
    ) {
      this.setState({ isValid: true });
    }
  };
  render() {
    if (!this.state.isValid) {
      return (
        <form onSubmit={this.onSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="txt"
              name="txtname"
              onChange={this.onInputChange}
              value={this.state.txtname}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="txtpass"
              onChange={this.onInputChange}
              value={this.state.txtpass}
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      );
    } else {
      return <App />;
    }
  }
}

export default LoginIn;
