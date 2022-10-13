import React from "react";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import ServicesCard from "./ServicesCard";
import Services from '../../shared/Data/services.json'
//TODO services json data from firestore
const ServicesCarousel = () => {
  return (
    <div>
     {/*  <Glider draggable hasArrows hasDots slidesToShow={4} slidesToScroll={1}>
        <div>
          <ServicesCard />
        </div>
        <div>
          <ServicesCard />
        </div>
        <div>
          <ServicesCard />
        </div>
        <div>
          <ServicesCard />
        </div>
        <div>
          <ServicesCard />
        </div>
      </Glider> */}
    </div>
  );
};

export default ServicesCarousel;
