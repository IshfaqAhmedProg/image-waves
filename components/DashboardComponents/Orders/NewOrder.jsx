import React, { useState } from "react";
import styles from "../../../styles/Modal.module.css";
import Services from "../../../shared/Data/services.json";
import Divider from "../../Divider/Divider";
import NewOrderService from "./NewOrderService";
import { OrderContextProvider } from "../../../contexts/OrderContext";
import OrdersResult from "./OrdersResult";
import Button from "../../Button/Button";

const NewOrder = () => {
  const [active, setActive] = useState(false);
  return (
    <div className={styles.container}>
      <h2>Create a new order</h2>
      <div className={styles.content}>
        <div className={styles.servicepanel}>
          <div className={styles.customservicecontainer}>
            <p>
              Select a service and either paste your image repository link i.e.
              Google Drive, Dropbox, Mediafire Link or Upload your Photos. You
              can use our Secure Storage Servers&#40;SSS&#41; for an additional
              fee.
            </p>
            <div
              className={
                styles.service +
                " " +
                styles.outer +
                (active ? " " + styles.open : "")
              }
            >
              <div
                tabIndex="1"
                className={styles.servicetitle}
                onClick={() => setActive(!active)}
              >
                <span>Create a custom order</span>
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
              <div
                className={styles.serviceinfo + " " + styles.inner}
                tabIndex={active ? "1" : "-1"}
              >
                <Button variant="close" onClick={() => setActive(!active)}>
                  Close
                </Button>
                <p>Upload the images you need done on.</p>
              </div>
            </div>
          </div>
          <Divider direction="horizontal">or</Divider>
          <h4>Select from our most popular services</h4>
          <div className={styles.servicecontainer + " " + styles.inner}>
            <ul className={styles.servicelist}>
              {Services.map((service) => {
                return <NewOrderService key={service.ID} service={service} />;
              })}
            </ul>
          </div>
        </div>
        <div className={styles.floating}>
          <Button variant="primary">Done Selecting</Button>
        </div>
      </div>
    </div>
  );
};

export default NewOrder;
