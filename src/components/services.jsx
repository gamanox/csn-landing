import React, { Component } from "react";

export class Services extends Component {
  render() {
    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Servicios</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p> */}
          </div>
          <div className="row-centered">
            {this.props.data
              ? this.props.data.map((d, i) => (
                
                  <div  key={`${d.name}-${i}`} className="col-md-4 service">
                    {" "}
                    <i className={d.icon}></i>
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                      {/* {d.items.map((item,index) => (
                        <p className="serv-item">{item}</p>
                      ))} */}
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
