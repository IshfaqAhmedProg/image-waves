import React, { useEffect, useState } from "react";
import { useOrderContext } from "../../../contexts/OrderContext";
import styles from "../../../styles/Modal.module.css";
import Divider from "../../Divider/Divider";
import InputField from "../../InputField/InputField";
import forms from "../../../styles/Forms.module.css";
import { formatPrice } from "../../../shared/Functions/formatPrice";
import Button from "../../Button/Button";
const NewOrderService = ({ service }) => {
  const [active, setActive] = useState(false);
  const { handleInputChange, setActiveService, handleClearService, cart } =
    useOrderContext();
  const [imageCount, setImageCount] = useState("");
  useEffect(() => {
    setImageCount(
      cart.filter((item) => item.service === service.ServiceName).length
    );
  }, [cart, service.ServiceName]);
  return (
    <li
      className={
        styles.service + " " + styles.outer + (active ? " " + styles.open : "")
      }
    >
      <div className={styles.servicetitle} onClick={() => setActive(!active)}>
        <div>
          <span>{service.ServiceName}</span>
          <span>
            starts at <strong>&nbsp;{formatPrice(service.Price)}</strong> /image
          </span>
          <span>
            {" "}
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
      <div className={styles.serviceinfooverlay}></div>
      <div className={styles.serviceinfo + " " + styles.outer}>
        <Button variant="close" onClick={() => setActive(!active)}>
          Close
        </Button>
        <form className={forms.form}>
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
              onClick={() =>
                setActiveService([service.ServiceName, service.Price])
              }
            />
            <Button
              variant="plain"
              onClick={(e) => {
                e.preventDefault();
                handleClearService(service.ServiceName);
              }}
            >
              Clear
            </Button>
          </fieldset>
        </form>
      </div>
    </li>
  );
};

export default NewOrderService;
