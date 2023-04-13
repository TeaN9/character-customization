import React from "react";

function SinglePart({ total, name, set, selected, index }) {
  return (
    <div key={index} className="part-list">
      <h2>{name}</h2>
      <div key={index} className="list">
        {Array(total)
          .fill()
          .map((item, i) => (
            <div
              key={item}
              className={selected === index ? "selected item" : "item"}
              onClick={() => set(i)}
            >
              <img key={item} src={`/${name}/${i + 1}.png`} alt="" />
            </div>
          ))}
      </div>
    </div>
  );
}

export default SinglePart;
