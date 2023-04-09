import React from "react";

function Earring({ total }) {
  const Sources = Array(total.earring)
    .fill()
    .map((item, index) => `/accessories/earrings/${index + 1}.png`);
  return (
    <div className="part-list">
      <h2>Earring</h2>
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

export default Earring;
