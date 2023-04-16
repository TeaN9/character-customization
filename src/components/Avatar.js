import React from "react";
import Image from "./Image";

function Avatar({ selectedParts }) {
  return (
    <div className="avatar">
      <Image source={`/body/${selectedParts.body + 1}.png`} zIndex={1} />
      <Image source={`/eyes/${selectedParts.eyes + 1}.png`} zIndex={2} />
      <Image source={`/hair/${selectedParts.hair + 1}.png`} zIndex={2} />
      <Image source={`/mouth/${selectedParts.mouth + 1}.png`} zIndex={2} />
      <Image
        source={`/eyebrows/${selectedParts.eyebrows + 1}.png`}
        zIndex={3}
      />
      <Image source={`/hat/${selectedParts.hat + 1}.png`} zIndex={3} />
      <Image
        source={`/earrings/${selectedParts.earrings + 1}.png`}
        zIndex={2}
      />
      <Image
        source={`/neckwear/${selectedParts.neckwear + 1}.png`}
        zIndex={4}
      />
      <Image source={`/glasses/${selectedParts.glasses + 1}.png`} zIndex={3} />
      <Image
        source={`/clothing1/${selectedParts.clothing1 + 1}.png`}
        zIndex={3}
      />
      <Image
        source={`/clothing2/${selectedParts.clothing2 + 1}.png`}
        zIndex={4}
      />
      <Image
        source={`/clothing3/${selectedParts.clothing3 + 1}.png`}
        zIndex={5}
      />
      <Image source={`/nose/1.png`} zIndex={2} />
    </div>
  );
}

export default Avatar;
