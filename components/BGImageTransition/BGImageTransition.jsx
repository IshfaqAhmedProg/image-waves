import Image from "next/image";
import React from "react";
import bg1 from "../../public/Splashscreen/1.webp";
import bg2 from "../../public/Splashscreen/2.webp";
import bg3 from "../../public/Splashscreen/3.webp";
import bg4 from "../../public/Splashscreen/4.webp";
import bg5 from "../../public/Splashscreen/5.webp";
import bg6 from "../../public/Splashscreen/6.webp";
import bg7 from "../../public/Splashscreen/7.webp";
export default function BGImageTransition() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Image src={bg1} alt={bg1} />
      <Image src={bg2} alt={bg2} />
      <Image src={bg3} alt={bg3} />
      <Image src={bg4} alt={bg4} />
      <Image src={bg5} alt={bg5} />
      <Image src={bg6} alt={bg6} />
      <Image src={bg7} alt={bg7} />
    </div>
  );
}
