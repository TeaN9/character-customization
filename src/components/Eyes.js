import React from "react";

function Eyes({ total }) {
  const Sources = Array(total.eyes)
    .fill()
    .map((item, index) => `/eyes/${index + 1}.png`);

  return (
    <div className="part-list">
      <h2>Eyes</h2>
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

export default Eyes;
