import React from "react";

export const Products = (props) => {
  console.log(props)
  return (
    <div id="products">
      <div className="container">
        <div className="section-title text-center">
          <h2>Our products are available</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="product">
                    <div className="product-image">
                      {" "}
                      <img src={d.img} alt="" />{" "}
                    </div>
                    <div className="product-content">
                      <div className="product-meta"> - {d.name} </div>
                      <p>"{d.text}"</p>
                      <a href={d.url} target="_blank">Selengkapnya...</a>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
