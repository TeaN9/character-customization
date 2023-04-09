import React from "react";

function Eyebrow({ total }) {
  const Sources = Array(total.eyebrows)
    .fill()
    .map((item, index) => `/eyebrows/${index + 1}.png`);
  return (
    <div className="part-list">
      <h2>Eyebrow</h2>
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

export default Eyebrow;
