import React from "react";

function Clothing2({ total, set, selected, path }) {
  return (
    <div className="part-list">
      <h2>clothing (l2)</h2>
      <div className="list">
        {Array(total.clothing2)
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

export default Clothing2;
