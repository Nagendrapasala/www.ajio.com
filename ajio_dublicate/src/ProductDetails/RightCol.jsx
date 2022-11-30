import React from "react";
import "../ProductDetails/Cols.css";

export default function RightCol() {
  return (
    <div className="prodDetails">
      <h2 className="brand">GLAM ROOTS</h2>
      <h1 className="prodName">Floral Flare Kurta</h1>
      <h3 className="price">₹800</h3>
      <div className="strPriceDis">
        MRP <span className="strP">₹1999</span>
        <span className="dis">
          <strong>(60% OFF)</strong>
        </span>{" "}
      </div>
      <p>Price inclusive of all taxes</p>
    </div>
  );
}
