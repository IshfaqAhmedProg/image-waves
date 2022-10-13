import React from "react";

import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
} from "react-compare-slider";

export default function CompareImageSlider({
  style,
  beforeImg,
  afterImg,
  ...props
}) {
  return (
    <ReactCompareSlider
      {...props}
      handle={
        <ReactCompareSliderHandle
          buttonStyle={{
            WebkitBackdropFilter: "blur(20px)",
            backdropFilter: "blur(20px)",
            border: "2px solid #5CFC4E55",
            background: "#5CFC4E35",
            color: "#FFFFFF",
          }}
          linesStyle={{ color: "#5CFC4E", opacity: 0.5 }}
        />
      }
      boundsPadding={0}
      changePositionOnHover
      itemOne={beforeImg}
      itemTwo={afterImg}
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        ...style,
      }}
    />
  );
}
