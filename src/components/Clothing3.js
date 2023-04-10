import React from "react";

function Clothing3({ total, set, selected, path }) {
  return (
    <div className="part-list">
      <h2>clothing (l3)</h2>
      <div className="list">
        {Array(total.clothing3)
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

export default Clothing3;
