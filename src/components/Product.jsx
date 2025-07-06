import React from "react";

const Product = ({ product }) => {
  
  return (
    <li className="product-item">
      <a href="#">
        <img
          src={product.image}
          width="100px"
          height="100px"
          // alt={product.title}
        />
      </a>
      <div className="title-price">
        <h4>
          <a href="#">{product.title}</a>
        </h4>
        <h6>${product.price}</h6>
      </div>
      <div className="down-content">
        <p>{product.description}</p>
        <div className="rating-container">
          <ul className="stars">
            {[...Array(5)].map((_, i) => (
              <li key={i}>
                <i
                  className={`fa ${
                    i < product.rating ? "fa-star" : "fa-star-o"
                  }`}
                  style={{ color: "#ffd700" }}
                ></i>
              </li>
            ))}
          </ul>
          <span style={{ color: "red" }}>Reviews ({product.reviews})</span>
        </div>

      </div>
    </li>
  );
};
export default Product;
