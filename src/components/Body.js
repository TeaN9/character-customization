import React from "react";

function Body({ total }) {
  const Sources = Array(total.body)
    .fill()
    .map((item, index) => `/body/${index + 1}.png`);

  return (
    <div className="part-list">
      <h2>Body</h2>
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

export default Body;
