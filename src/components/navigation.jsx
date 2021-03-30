import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Mostrar navegación</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              <img src="img/logo.png" height="39" width="auto" alt="" style={{
                display: 'inline-block'
              }}/> CSN
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#features" className="page-scroll">
                  Clientes
                </a>
              </li>
              <li>
                <a href="#about" className="page-scroll">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#services" className="page-scroll">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#portfolio" className="page-scroll">
                  Galería
                </a>
              </li>
              {/* <li>
                <a href="#testimonials" className="page-scroll">
                  Testimonios
                </a>
              </li> */}
              {/* <li>
                <a href="#team" className="page-scroll">
                  Team
                </a>
              </li> */}
              <li>
                <a href="#contact" className="page-scroll">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
