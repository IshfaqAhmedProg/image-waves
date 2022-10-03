import React from "react";


import {
    ReactCompareSlider,
    ReactCompareSliderImage
  } from "react-compare-slider";

export default function CompareImageSlider({style,imageSet,...props}) {

    return (    
      <ReactCompareSlider
        {...props}
        itemOne={
          <ReactCompareSliderImage
            src={'/'+imageSet.beforeImg}
            alt={imageSet.beforeAlt}
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={'/'+imageSet.afterImg}
            alt={imageSet.afterAlt}
          />
        }
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          ...style
        }}
      />
    );
  };