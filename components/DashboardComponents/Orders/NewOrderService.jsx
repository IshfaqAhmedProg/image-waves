import React, { useEffect, useState } from "react";
import { useOrderContext } from "../../../contexts/OrderContext";
import styles from "../../../styles/Modal.module.css";
import { formatPrice } from "../../../shared/Functions/formatPrice";
import NewOrderUpload from "./NewOrderUpload";
const NewOrderService = ({ service }) => {
  const [active, setActive] = useState(false);
  const { cart, setActiveService } = useOrderContext();
  const [imageCount, setImageCount] = useState("");

  useEffect(() => {
    const imageServices = cart.filter(
      (item) => item.variant == "Image" && item.service === service.ID
    ).length;
    const linkServices = cart.filter(
      (item) => item.variant == "Link" && item.service === service.ID
    ).length;
    imageServices == 0 && linkServices != 0
      ? setImageCount("Drive Link")
      : setImageCount(imageServices);
  }, [cart, service.ID]);

  return (
    <li
      className={
        styles.service + " " + styles.outer + (active ? " " + styles.open : "")
      }
    >
      <div
        className={styles.servicetitle}
        onClick={() => {
          setActive(!active);
          setActiveService([service.ID, service.Price]);
        }}
      >
        <div>
          <span>{service.ServiceName}</span>
          <span>
            starts at <strong>&nbsp;{formatPrice(service.Price)}</strong> /image
          </span>
          <span>
            <p>{imageCount != 0 ? imageCount + " image(s) selected" : ""}</p>
          </span>
        </div>
        <span>
          <input
            type="checkbox"
            checked={imageCount != "" ? true : false}
            readOnly
          />
        </span>
        <span>
          <svg
            width="10"
            height="auto"
            viewBox="0 0 14 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.arrow}
          >
            <path
              d="M2 1.5L11 10.5L2 19.5"
              stroke="var(--primary)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </div>

      <div className={styles.serviceuploadoverlay}></div>
      <NewOrderUpload
        service={service}
        imageCount={imageCount}
        setImageCount={setImageCount}
        active={active}
        setActive={setActive}
      />
    </li>
  );
};

export default NewOrderService;
