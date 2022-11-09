import React, { useState } from "react";
import styles from "../../../styles/Modal.module.css";
import Services from "../../../shared/Data/services.json";
import Divider from "../../Divider/Divider";
import NewOrderService from "./NewOrderService";
import { OrderContextProvider } from "../../../contexts/OrderContext";
import OrdersResult from "./OrdersResult";

const NewOrder = () => {
  const [active, setActive] = useState(false);
  return (
    <OrderContextProvider>
      <div className={styles.container}>
        <h2>Create a new order</h2>
        <div className={styles.content}>
          <div className={styles.servicepanel}>
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
              <div className={styles.serviceinfo + " " + styles.inner}>
                <p>Upload the images you need done on.</p>
              </div>
            </div>
            <Divider direction="horizontal">or</Divider>
            <p>Select from our most popular services</p>
            <div className={styles.servicecontainer + " " + styles.inner}>
              <ul className={styles.servicelist}>
                {Services.map((service) => {
                  return <NewOrderService key={service.ID} service={service} />;
                })}
              </ul>
            </div>
          </div>
          <div className={styles.resultpanel}>
            <OrdersResult />
          </div>
        </div>
      </div>
    </OrderContextProvider>
  );
};

export default NewOrder;
