import React from "react";
import "./App.css";

const totalParts = {
  body: 17,
  eyes: 24,
  hair: 73,
  mouth: 24,
  eyebrows: 15,
  hat: 28,
  earrings: 32,
  neckwear: 18,
  glasses: 17,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
};

const totalPartsArray = Object.keys(totalParts);

// console.log(totalPartsArray);

function App() {
  const randomize = () => {
    // setBody(Math.floor(Math.random() * total.body));
  };

  const renderItemsInside = (part) => {
    const totalItemsOfPart = totalParts[part];
    return Array(totalItemsOfPart)
      .fill()
      .map((item, i) => (
        <div
          key={item}
          className="item"
          // onClick={() => set(i)}
        >
          <img key={item} src={`/${part}/${i + 1}.png`} alt="" />
        </div>
      ));
  };

  return (
    <div className="background">
      <div className="header">
        <h1>Character</h1>
        <h1>Customization</h1>
      </div>

      <div className="main">
        <div>
          <div className="avatar-wrapper">
            <div className="avatar"></div>
            <div className="button-random">
              <button onClick={() => randomize}>Randomize</button>
            </div>
          </div>
        </div>

        <div>
          {totalPartsArray.map((part, index) => {
            return (
              <div key={index} className="part-list">
                <h2>{part}</h2>
                <div key={index} className="list">
                  {renderItemsInside(part)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
