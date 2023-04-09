import React from "react";

function Clothing2({ total }) {
  const Sources = Array(total.clothing2)
    .fill()
    .map((item, index) => `/clothes/layer_2/${index + 1}.png`);
  return (
    <div className="part-list">
      <h2>Clothing (L2)</h2>
      <div className="list">
        {Sources.map((source, index) => (
          <div className="item">
            <img key={index} src={source} alt={`item ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clothing2;
