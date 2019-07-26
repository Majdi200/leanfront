import React, { Component } from "react";
import APIHandler from "../api/Handler";

const apiHandler = new APIHandler();

export default class Register extends Component {
  state = {
    // isPasswordOk: false,
    firstname: "",
    lastname: "",
    email: "",
    // avatar: "",
    password: "",
    interested_by: "",
    comment: ""
    // passwordConfirm: "1234"
  };

  // @todo => code this function to validate form according your needs
  checkAllFields() {
    return true;
  }

  //   checkPasswordMatch() {
  //     const { password, passwordConfirm } = this.state;
  //     var passed = false;
  //     if (password && passwordConfirm) passed = password === passwordConfirm;
  //     else passed = true;
  //     return passed;
  //   }

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    if (!this.checkAllFields()) return console.warn("form incomplete");

    // simulate multipart/formdata ...

    apiHandler
      .post("/auth/signup", this.state) // let's post the built formData object as a regular payload
      .then(serverRes => {
        // everything is fine, redirect to dashboard
        window.location = "/";
        console.log(serverRes);
      })
      .catch(serverErr => {
        this.setState({
          errMessage: serverErr.response.data.message.toUpperCase()
        });
        console.error(serverErr.response.data.message);
      });
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { firstname, lastname, email, password, comment } = this.state;
    return (
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <h1>Signup</h1>

        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">name</label>
          <input
            className="form-control"
            name="firstname"
            id="Name"
            placeholder="your Name"
            type="text"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlInput1"> Nom de Famille </label>
          <input
            className="form-control"
            name="lastname"
            id="LastName"
            placeholder="Last Name"
            type="text"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Your Email</label>
          <input
            className="form-control"
            name="email"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            type="email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Mot de passe</label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        <label htmlFor="interested_by">je suis intéressé par </label>
        <select
          className="form-control form-control-lg"
          name="interested_by"
          id="listeProject"
        >
          <option>--- Choose an option ---</option>
          <option value="lean management">Lean Management</option>
          <option value="six sigma">Six Sigma</option>
          <option value="supply chain">Supply Chain</option>
        </select>

        <label htmlFor="comment" className="describMargin">
          {" "}
          Décrire votre processus et comment il peut être améliorer{" "}
        </label>
        <textarea
          className="form-control"
          name="comment"
          id="LastName"
          placeholder="Décrire votre processus"
          type="text"
        />

        <hr />
        <div className="register_infos">
          <button className="btn btn-primary"> Submit</button>
          {this.state.errMessage ? (
            <div>
              <h5>{this.state.errMessage}</h5>
            </div>
          ) : null}
        </div>
      </form>
    );
  }
}
