import React from "react";
import bookImg from "./../../../Images/BooksImages/book-luv2code-1000.png";
const Carousel = () => {
  return (
    <div className="container mt-5" style={{ height: 550 }}>
      <div className="homepage-carousel-title">
        <h3>Find your "I stayed up too late reading book" here</h3>
        <div />
        <div
          id="carouselExampleControls"
          className="carousel carousel-dark slide mt-5 d-none d-lg-block"
          data-bs-interval="false"
        >
          <div className="carousel-item active">
            <div className="row d-flex justify-content-center align-item-center">
              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
                <div className="text-center">
                  <img
                    src={bookImg}
                    title="Img"
                    width="151"
                    height="233"
                    alt="book"
                  />
                  <h6 className="mt-2">Book</h6>
                  <p>Love to code</p>
                  <a href="#" className="btn main-color text-white">
                    Reserve
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
            <div className="row d-flex justify-content-center align-item-center">
              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
                <div className="text-center">
                  <img
                    src={bookImg}
                    title="Img"
                    width="151"
                    height="233"
                    alt="book"
                  />
                  <h6 className="mt-2">Book</h6>
                  <p>Love to code</p>
                  <a href="#" className="btn main-color text-white">
                    Reserve
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
            <div className="row d-flex justify-content-center align-item-center">
              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
                <div className="text-center">
                  <img
                    src={bookImg}
                    title="Img"
                    width="151"
                    height="233"
                    alt="book"
                  />
                  <h6 className="mt-2">Book</h6>
                  <p>Love to code</p>
                  <a href="#" className="btn main-color text-white">
                    Reserve
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true">
            {" "}
          </span>
          <span className="visually-hidden">Prev</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true">
            {" "}
          </span>
          <span className="visually-hidden">Prev</span>
        </button>
      </div>

      {/*Mobile */}
      <div className="d-lg-none mt-3">
        <div className="row-d-flex justify-content-center align-items-center">
          <div className="text-center">
            <img src={bookImg} width="151" height="233" alt="book" />
            <h6 className="mt-2">
              <b>Book</b>
            </h6>
            <p>Love to code</p>
            <a className="btn main-color text-white" href="#">
              Reverse
            </a>
          </div>
        </div>
      </div>
      <div className="homepage-carousel-title mt-3">
        <a href="#" className="btn btn-outline-secondary btn-g">
          View More
        </a>
      </div>
    </div>
  );
};

export default Carousel;
