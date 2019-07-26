import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default class FormCreateChapter extends Component {
  state = {
    chapter_name: "",
    chapter_number: "",
    response_1: "",
    response_2: "",
    response_3: "",
    response_4: "",
    response_5: ""
  };
  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    console.log(this.state);
    axios
      .post(
        process.env.REACT_APP_BACKEND_URL + "/api/chapter/create-new-chapter",
        this.state
      )
      .then(serverRes => {
        console.log("ok", serverRes);
      })
      .catch(serverErr => console.log(serverErr.response));
    window.location = "/";
  };
  render() {
    return (
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <h1 className="title">Add a new Audit_Chapter</h1>
        <div className="form-group">
          <label htmlFor="chap_name">Chapter name</label>
          <input
            className="form-control"
            id="chap_name"
            type="text"
            name="chapter_name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="chap_number">Chapter number</label>
          <input
            className="form-control"
            id="chap_number"
            type="number"
            min="1"
            max="13"
            name="chapter_number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="r1">Response 1</label>
          <textarea className="form-control" id="r1" name="response_1" />
        </div>

        <div className="form-group">
          <label htmlFor="r2">Response 2</label>
          <textarea className="form-control" id="r2" name="response_2" />
        </div>

        <div className="form-group">
          <label htmlFor="r3">Response 3</label>
          <textarea className="form-control" id="r3" name="response_3" />
        </div>

        <div className="form-group">
          <label htmlFor="r4">Response 4</label>
          <textarea className="form-control" id="r4" name="response_4" />
        </div>

        <div className="form-group">
          <label htmlFor="r5">Response 5</label>
          <textarea className="form-control" id="r5" name="response_5" />
        </div>

        <button className="btn btn-success btn-lg btn-block btn-create">
          create !
        </button>
      </form>
    );
  }
}
