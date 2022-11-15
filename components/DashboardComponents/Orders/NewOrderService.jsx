import React, { useEffect, useState } from "react";
import { useOrderContext } from "../../../contexts/OrderContext";
import styles from "../../../styles/Modal.module.css";
import Divider from "../../Divider/Divider";
import InputField from "../../InputField/InputField";
import forms from "../../../styles/Forms.module.css";
import { formatPrice } from "../../../shared/Functions/formatPrice";
const NewOrderService = ({ service }) => {
  const [active, setActive] = useState(false);
  const { handleInputChange, setService, images } = useOrderContext();
  const [imageCount, setImageCount] = useState("");
  useEffect(() => {
    setImageCount(
      images.filter((item) => item.service === service.ServiceName).length
    );
  }, [images, service.ServiceName]);

  return (
    <li
      className={
        styles.service + " " + styles.outer + (active ? " " + styles.open : "")
      }
    >
      <div className={styles.servicetitle} onClick={() => setActive(!active)}>
        <span>{service.ServiceName}</span>
        <span>starts at {formatPrice(service.Price)}/image</span>
        <span>
          <input type="checkbox" checked={imageCount != "" ? true : false} />
          <p>{imageCount != 0 ? imageCount + " image(s) selected" : ""}</p>
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
      <div className={styles.serviceinfo + " " + styles.inner}>
        <form>
          <fieldset className={forms.formfield}>
            <InputField type="url" placeholder="Paste your link here" id="link">
              Paste your Drive link here
            </InputField>
          </fieldset>
          <fieldset className={forms.formfield}>
            <Divider direction="horizontal" colorMode="gray">
              or
            </Divider>
          </fieldset>
          <fieldset className={forms.formfield + " " + styles.sss}>
            <p>Upload the images you need {service.ServiceName} done on.</p>
            <input
              multiple
              type="file"
              onChange={handleInputChange}
              onClick={() => setService([service.ServiceName, service.Price])}
            />
          </fieldset>
        </form>
      </div>
    </li>
  );
};

export default NewOrderService;
