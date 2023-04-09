import React from "react";

function Hat({ total }) {
  const Sources = Array(total.hat)
    .fill()
    .map((item, index) => `/accessories/hats/${index + 1}.png`);
  return (
    <div className="part-list">
      <h2>Hat</h2>
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

export default Hat;
