import React from "react";

export function formatPrice(value) {
  let result,
    unit,
    price = Math.round(value * 100) / 100;
  if (price < 1.0) {
    result = (parseFloat(price) * 100).toString();
    unit = "c";
  } else {
    result = price;
    unit = " USD";
  }
  return (
    <>
      {result}
      <i>
        <strong>{unit}</strong>
      </i>
    </>
  );
}
