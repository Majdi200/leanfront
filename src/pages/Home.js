import React, { Component } from "react";
import MyButton from "./../component/MyButton";
import industryIMG from "../Assets/Photos/industrie-4.0.jpg";
import MyImage from "./Images";
export default class extends Component {
  action1 = () => {
    this.props.history.push("/signin");
  };

  action2 = () => {
    this.props.history.push("/register");
  };

  render() {
    return (
      <div>
        <div className="home-btn">
          <MyButton
            elementClass="btn btn-success margin-5"
            text="SignIn"
            clbk={this.action1}
          />
          <MyButton
            elementClass="btn btn-info"
            text="Register"
            clbk={this.action2}
          />
        </div>
        <br />
        <MyImage />
        {/* <img className="ImageFor" src={industryIMG} alt="industry4.0" /> */}
        {/* <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="../Industry 4.0.jpg" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../Industry 4.0.jpg" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../Industry 4.0.jpg" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> */}
      </div>
    );
  }
}
