import React from "react";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import ServicesCard from "./ServicesCard";
import styles from "./ServicesCarousel.module.css";
import Services from "../../shared/Data/services.json";
import Button from "../Button/Button";
//TODO services json data from firestore
const ServicesCarousel = () => {
  return (
    <div className={styles.container}>
      <Glider
        draggable
        hasArrows
        hasDots
        arrows={{
          prev: "#buttonPrev",
          next: "#buttonNext",
        }}
        responsive={[
          {
            breakpoint: 1490,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1124,
            settings: {
              slidesToShow: 2,
            },
          },
        ]}
        slidesToShow={1}
        slidesToScroll={1}
        scrollLock={true}
        dragVelocity={1}
        easing={function easeInBack(x) {
          const c1 = 1.70158;
          const c3 = c1 + 1;

          return c3 * x * x * x - c1 * x * x;
        }}
      >
        {Services.map((service) => {
          return (
            <div key={service.ID}>
              <ServicesCard
                beforeImageLink={service.BeforeImageLink}
                afterImageLink={service.AfterImageLink}
                serviceName={service.ServiceName}
                pricing={service.Pricing}
                details={service.Details}
              />
            </div>
          );
        })}
      </Glider>
      <div className="arrows">
        <div className="arrow">
          <Button id="buttonPrev" variant="leftarrow" />
        </div>
        <div className="arrow">
          <Button id="buttonNext" variant="rightarrow" />
        </div>
      </div>
      <style jsx>{`
        .arrows {
          position: absolute;
          inset: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          pointer-events: none;
        }
        .arrow {
          pointer-events: all;
          height: fit-content;
          width: 30px;
        }
        .glider-prev {
          top: 50%;
          width: 50px;
        }
        .glider-next {
          top: 50%;
          width: 50px;
        }

        .glider-prev {
          left: 50px;
          z-index: 5;
        }

        .glider-next {
          right: 50px;
        }
        .glider-wrap {
          position: relative;
          overflow: hidden;
        }
        .glider {
          scrollbar-width: none;
        }
        .glider ::-webkit-scrollbar {
          display: none;
        }
        .glider-contain {
          margin-bottom: 25px;
        }
        .glider-dots {
          margin-top: 15px;
        }
        .glider-track {
          height: 100%;
        }
        .glider-slide {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-inline: 1rem;
        }
        .glider-dot .active {
          background: #31b624;
        }
      `}</style>
    </div>
  );
};

export default ServicesCarousel;
