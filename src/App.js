import React, { useState, useEffect } from "react";
import "./App.css";
// import Body from "./components/Body";
// import Eyes from "./components/Eyes";
// import Hair from "./components/Hair";
// import Mouth from "./components/Mouth";
// import Eyebrow from "./components/Eyesbrow";
// import Glasses from "./components/Glasse";
// import Earring from "./components/Earring";
// import Neckwear from "./components/Neckwear";
// import Hat from "./components/Hat";
// import Clothing1 from "./components/Clothing1";
// import Clothing2 from "./components/Clothing2";
// import Clothing3 from "./components/Clothing3";
import SinglePart from "./components/SinglePart";

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

const totalPartsArray = Object.keys(totalParts)

console.log(totalPartsArray)

function App() {
  // const [body, setBody] = useState(null);
  // const [eyes, setEyes] = useState(null);
  // const [hair, setHair] = useState(null);
  // const [mouth, setMouth] = useState(null);
  // const [eyebrow, setEyebrow] = useState(null);
  // const [glasses, setGlasses] = useState(null);
  // const [earrings, setEarrings] = useState(null);
  // const [neckwear, setNeckwear] = useState(null);
  // const [hat, setHat] = useState(null);
  // const [clothing1, setClothing1] = useState(null);
  // const [clothing2, setClothing2] = useState(null);
  // const [clothing3, setClothing3] = useState(null);
  const randomize = () => {
    // setBody(Math.floor(Math.random() * total.body));
    // setEyes(Math.floor(Math.random() * total.eyes));
    // setHair(Math.floor(Math.random() * total.hair));
    // setMouth(Math.floor(Math.random() * total.mouth));
    // setEyebrow(Math.floor(Math.random() * total.eyebrows));
    // setGlasses(Math.floor(Math.random() * total.glasses));
    // setEarrings(Math.floor(Math.random() * total.earring));
    // setNeckwear(Math.floor(Math.random() * total.neckwear));
    // setHat(Math.floor(Math.random() * total.hat));
    // setClothing1(Math.floor(Math.random() * total.clothing1));
    // setClothing2(Math.floor(Math.random() * total.clothing2));
    // setClothing3(Math.floor(Math.random() * total.clothing3));
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
          {totalPartsArray.map((part, index)=>{
            return  <SinglePart name={part} index={index} totalParts={totalParts} />
          })}

          {/* <Body total={total} path="body" set={setBody} selected={body} />
          <Eyes total={total} path="eyes" set={setEyes} selected={eyes} />
          <Hair total={total} path="hair" set={setHair} selected={hair} />
          <Mouth total={total} path="mouth" set={setMouth} selected={mouth} />
          <Eyebrow
            total={total}
            path="eyebrow"
            set={setEyebrow}
            selected={eyebrow}
          />
          <Glasses
            total={total}
            path="glasses"
            set={setGlasses}
            selected={glasses}
          />
          <Earring
            total={total}
            path="earrings"
            set={setEarrings}
            selected={earrings}
          />
          <Neckwear
            total={total}
            path="neckwear"
            set={setNeckwear}
            selected={neckwear}
          />
          <Hat total={total} path="hat" set={setHat} selected={hat} />
          <Clothing1
            total={total}
            path="clothing1"
            set={setClothing1}
            selected={clothing1}
          />
          <Clothing2
            total={total}
            path="clothing2"
            set={setClothing2}
            selected={clothing2}
          />
          <Clothing3
            total={total}
            path="clothing3"
            set={setClothing3}
            selected={clothing3}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
