import Link from "next/link";
import React from "react";
import Button from "../Button/Button";
//TODO Design the card
//TODO Add Props
//TODO image comparison component
const ServicesCard = () => {
  return (
    <div>
      <div>Image</div>
      <div>
        <div>Service Name</div>
        <div>Service Price</div>
        <div>Service Desc</div>
      </div>
      <div>
        <Button variant="primary">Order Now</Button>
        <Link href="/">Details</Link>
      </div>
    </div>
  );
};

export default ServicesCard;
