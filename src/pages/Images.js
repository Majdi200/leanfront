import React from "react";
import photo1 from "../Assets/Photos/dane-deaner-iJ1lw8iNIy8-unsplash.jpg";
import photo2 from "../Assets/Photos/industrie-4.0.jpg";
import photo3 from "../Assets/Photos/helloquence-5fNmWej4tAA-unsplash.jpg";

const MyImage = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide allBackimage"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to="1" />
        <li data-target="#carouselExampleIndicators" data-slide-to="2" />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active imgCaroussel">
          <img className="d-block w-100" src={photo1} alt="First slide" />
        </div>
        <div className="carousel-item imgCaroussel">
          <img className="d-block w-100" src={photo2} alt="Second slide" />
        </div>
        <div className="carousel-item  imgCaroussel">
          <img className="d-block w-100" src={photo3} alt="Third slide" />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default MyImage;
