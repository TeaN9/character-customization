import React from "react";

function Clothing1({ total, set, selected, path }) {
  return (
    <div className="part-list">
      <h2>clothing (l1)</h2>
      <div className="list">
        {Array(total.clothing1)
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

export default Clothing1;
