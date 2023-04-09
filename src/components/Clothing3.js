import React from "react";

function Clothing3({ total }) {
  const Sources = Array(total.clothing3)
    .fill()
    .map((item, index) => `/clothes/layer_3/${index + 1}.png`);
  return (
    <div className="part-list">
      <h2>Clothing (L3)</h2>
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

export default Clothing3;
