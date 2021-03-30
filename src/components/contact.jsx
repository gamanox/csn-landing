import React, { Component } from "react";


import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
const greyMap = require("../data/yellowMap.json");
const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={6}
    defaultOptions={{styles: greyMap}}
    defaultCenter={{ lat: 24.081435805657605, lng: -103.18272572702908 }}
  >
    <Marker position={{ lat: 21.183846684875732, lng: -101.76508479695937 }} />
    <Marker position={{ lat: 22.273985792134578, lng: -101.1194075959908 }} />
    <Marker position={{ lat: 20.605894517284757, lng: -100.07916081453264 }} />
    <Marker position={{ lat: 25.43655852632524, lng: -100.96902672358719 }} />
    {/* {props.isMarkerShown && <Marker position={{ lat: 22.273985792134578, lng: -101.1194075959908 }} />} */}
  </GoogleMap>
))


export class Contact extends Component {
  render() {
    return (
      <div>
        <div id="contact">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>Contáctanos</h2>
                  <p>
                    Envíanos un mensaje para trabajar juntos.
                  </p>
                </div>
                <form action="mailto:info@w3docs.com" method="get" encType="text/plain" name="sentMessage" id="contactForm" noValidate>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Nombre"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Correo"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Mensaje"
                      required
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <button type="submit" className="btn btn-custom btn-lg">
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>Información de contacto</h3>
                {/* <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Céntro de Operaciones
                  </span>
                  {this.props.data ? this.props.data.address : "loading"}
                </p> */}
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Teléfonos
                  </span>{" "}
                  
                  Saltillo {this.props.data ? this.props.data.phone_saltillo : "loading"} <br/>
                  San Luis {this.props.data ? this.props.data.phone_sanluis : "loading"} <br/>
                  León {this.props.data ? this.props.data.phone_leon : "loading"} <br/>
                  Querétaro {this.props.data ? this.props.data.phone_queretaro : "loading"} <br/>
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope"></i> Correo
                  </span>{" "}
                  <a href="mailto:contacto@csnoreste.com" target="_blank" rel="noopener noreferrer" style={{
                    textDecoration: 'none',
                    color: 'white'
                  }}>

                  {this.props.data ? this.props.data.email : "loading"}
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <MyMapComponent
                  isMarkerShown
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDf-Cm-w0ZIO9B22xs7PPxBaNu0x1BjvLc&v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `400px` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a
                        href={this.props.data ? this.props.data.facebook : "/"} target="_blank"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.instagram : "/"} target="_blank">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.instagram : "/"} target="_blank">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.whatsapp : "/"} target="_blank">
                        <i className="fab fa-whatsapp"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div className="container text-center">
            <p>
              &copy; 2021 Construcciones y Servicios del Noreste. 
              {/* <a href="http://www.templatewire.com" rel="nofollow">
                TemplateWire
              </a> */}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
