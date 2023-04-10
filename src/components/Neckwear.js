import React from "react";

function Neckwear({ total, set, selected, path }) {
  return (
    <div className="part-list">
      <h2>{path}</h2>
      <div className="list">
        {Array(total.neckwear)
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

export default Neckwear;
