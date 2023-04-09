import React from "react";

function Glasse({ total }) {
  const Sources = Array(total.glasses)
    .fill()
    .map((item, index) => `/accessories/glasses/${index + 1}.png`);
  return (
    <div className="part-list">
      <h2>Glasse</h2>
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

export default Glasse;
