import React, { Component } from "react";
import { AuthConsumer } from "./../auth/Guard";
export default class Signin extends Component {
  state = {
    email: "",
    password: ""
  };

  submit = (e, signin) => {
    e.preventDefault();
    signin(status => {
      console.log("TRYIN TO SIGNIN", status);
    }, this.state);
    this.props.history.push("/");
  };

  checkAllFieldsFilled() {}

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { handleChange, submit } = this;

    return (
      <AuthConsumer>
        {({ signin }) => (
          <form
            className="form"
            onSubmit={e => submit(e, signin)}
            onChange={handleChange}
          >
            <h2 className="title">Signin</h2>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                name="email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
              <br />
              <button className="btn btn-primary"> ok </button>
            </div>
          </form>
        )}
      </AuthConsumer>
    );
  }
}
