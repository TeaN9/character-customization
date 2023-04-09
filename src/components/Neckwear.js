import React from "react";

function Neckwear({ total }) {
  const Sources = Array(total.neckwear)
    .fill()
    .map((item, index) => `/accessories/neckwear/${index + 1}.png`);
  return (
    <div className="part-list">
      <h2>Neckwear</h2>
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

export default Neckwear;
