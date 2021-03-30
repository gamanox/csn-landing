import React, { Component } from "react";
import ReactDOM from "react-dom";
import SimpleReactLightbox from 'simple-react-lightbox'


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
                    
                      <a
                        href="img/equipamiento/equipamiento-01.jpg"
                        title="Equipamiento"
                        data-lightbox-gallery="equipamiento"
                      >
                        <div className="hover-text">
                          <h4>Equipamiento</h4>
                        </div>
                      <img
                        src="img/equipamiento/equipamiento-01.jpg"
                        className="img-responsive"
                        alt="Equipamiento"
                      />{" "}
                      </a>
                      <a
                        href="img/equipamiento/equipamiento-02.jpg"
                        title="Equipamiento"
                        data-lightbox-gallery="equipamiento"
                        style={{display: "none"}}
                      ></a>
                      <a
                        href="img/equipamiento/equipamiento-03.jpg"
                        title="Equipamiento"
                        data-lightbox-gallery="equipamiento"
                        style={{display: "none"}}
                      ></a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/obracivil/obracivil-06.jpg"
                      title="Obra Civil"
                      data-lightbox-gallery="obracivil"
                    >
                      <div className="hover-text">
                        <h4>Obra Civil</h4>
                      </div>
                      
                      <img
                        src="img/obracivil/obracivil-06.jpg"
                        className="img-responsive"
                        alt="Obra Civil"
                      />{" "}
                      </a>
                      <a
                        href="img/obracivil/obracivil-01.jpg"
                        title="Obra Civil"
                        data-lightbox-gallery="obracivil"
                        style={{display: "none"}}
                      ></a>
                      <a
                        href="img/obracivil/obracivil-02.jpg"
                        title="Obra Civil"
                        data-lightbox-gallery="obracivil"
                        style={{display: "none"}}
                      ></a>
                      
                      <a
                        href="img/obracivil/obracivil-04.jpg"
                        title="Obra Civil"
                        data-lightbox-gallery="obracivil"
                        style={{display: "none"}}
                      ></a>
                      <a
                        href="img/obracivil/obracivil-05.jpg"
                        title="Obra Civil"
                        data-lightbox-gallery="obracivil"
                        style={{display: "none"}}
                      ></a>
                      <a
                        href="img/obracivil/obracivil-06.jpg"
                        title="Obra Civil"
                        data-lightbox-gallery="obracivil"
                        style={{display: "none"}}
                      ></a>
                      
                      <a
                        href="img/obracivil/obracivil-08.jpg"
                        title="Obra Civil"
                        data-lightbox-gallery="obracivil"
                        style={{display: "none"}}
                      ></a>
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
