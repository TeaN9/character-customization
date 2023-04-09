import React, { useState, useEffect } from "react";
import "./App.css";
import Body from "./components/Body";
import Eyes from "./components/Eyes";
import Hair from "./components/Hair";
import Mouth from "./components/Mouth";
import Eyebrow from "./components/Eyesbrow";
import Glasse from "./components/Glasse";
import Earring from "./components/Earring";
import Neckwear from "./components/Neckwear";
import Hat from "./components/Hat";
import Clothing1 from "./components/Clothing1";
import Clothing2 from "./components/Clothing2";
import Clothing3 from "./components/Clothing3";

function App() {
  const [body, setBody] = useState(null);
  const [eyes, setEyes] = useState(null);
  const [hair, setHair] = useState(null);
  const [mouth, setMouth] = useState(null);
  const [eyebrow, setEyebrow] = useState(null);
  const [glasse, setGlasse] = useState(null);
  const [earring, setEarring] = useState(null);
  const [neckwear, setNeckwear] = useState(null);
  const [hat, setHat] = useState(null);
  const [clothing1, setClothing1] = useState(null);
  const [clothing2, setClothing2] = useState(null);
  const [clothing3, setClothing3] = useState(null);

  useEffect(() => randomize, []);

  const total = {
    body: 17,
    eyes: 24,
    hair: 73,
    facialHair: 17,
    mouth: 24,
    eyebrows: 15,
    hat: 28,
    earring: 32,
    neckwear: 18,
    glasses: 17,
    clothing1: 5,
    clothing2: 5,
    clothing3: 9,
  };

  const randomize = () => {};

  const handleClick = () => {};

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
              <button>Randomize</button>
            </div>
          </div>
        </div>

        <div>
          <Body total={total} />

          <Eyes total={total} />

          <Hair total={total} />

          <Mouth total={total} />

          <Eyebrow total={total} />

          <Glasse total={total} />

          <Earring total={total} />

          <Neckwear total={total} />

          <Hat total={total} />

          <Clothing1 total={total} />

          <Clothing2 total={total} />

          <Clothing3 total={total} />
        </div>
      </div>
    </div>
  );
}

export default App;
