import React from "react";

function Mouth({ total }) {
  const Sources = Array(total.mouth)
    .fill()
    .map((item, index) => `/mouths/${index + 1}.png`);
  return (
    <div className="part-list">
      <h2>Mouth</h2>
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

export default Mouth;
