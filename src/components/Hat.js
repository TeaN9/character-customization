import React from "react";

function Hat({ total, set, selected, path }) {
  return (
    <div className="part-list">
      <h2>{path}</h2>
      <div className="list">
        {Array(total.hat)
          .fill()
          .map((item, index) => (
            <div
              key={item}
              className={selected === index ? "selected item" : "item"}
              onClick={() => set(index)}
            >
              <img src={`/${path}/${index + 1}.png`} alt="" />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Hat;
