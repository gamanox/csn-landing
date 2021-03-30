import React, { Component } from "react";

export class Gallery extends Component {
  render() {
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Galería</h2>
            <p>
              Algunas fotografías de nuestros proyectos realizados.
            </p>
          </div>
          <div className="row">
            <div className="portfolio-items">
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    
                      
                      <img
                        src="img/portfolio/01-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    
                      
                      <img
                        src="img/portfolio/02-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    
                      
                      <img
                        src="img/portfolio/03-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    
                      
                      <img
                        src="img/portfolio/04-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    
                      
                      <img
                        src="img/portfolio/05-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    
                      
                      <img
                        src="img/portfolio/06-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    
                      
                      <img
                        src="img/portfolio/07-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    
                      
                      <img
                        src="img/portfolio/08-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    {/* <a
                      href="img/portfolio/09-large.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    > */}
                      {/* <div className="hover-text">
                        <h4>Adipiscing Elit</h4>
                      </div> */}
                      <img
                        src="img/portfolio/09-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    {/* </a>{" "} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
