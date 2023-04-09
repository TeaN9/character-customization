import React from "react";

function Hair({ total }) {
  const Sources = Array(total.eyes)
    .fill()
    .map((item, index) => `/hair/${index + 1}.png`);
  return (
    <div className="part-list">
      <h2>Hair</h2>
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

export default Hair;
