import React, { useState } from "react";
import styles from "../../../styles/Modal.module.css";
import Services from "../../../shared/Data/services.json";
import Divider from "../../Divider/Divider";
import NewOrderService from "./NewOrderService";
import { useOrderContext } from "../../../contexts/OrderContext";
import Button from "../../Button/Button";
import { useRouter } from "next/router";

const NewOrder = () => {
  const { invoice } = useOrderContext();
  const router = useRouter();
  const [active, setActive] = useState(false);
  const customService = {
    ID: "SRV000",
    ServiceName: "Custom Service",
    Price: "0.0",
    Details:
      "Make sure you walk through handing over the proper permissions for the account in question. Curing this process you’ll get a warning that Google hasn’t verified the app. Go ahead and okay that by",
    BeforeImageLink: ["check1.jpg", "before image"],
    AfterImageLink: ["check2.png", "after image"],
    GotoLink: "/",
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Create a new order</h2>
      <div className={styles.content}>
        <div className={styles.servicepanel}>
          <div className={styles.customservicecontainer}>
            <p>
              Users have the choice to create their own custom order or select
              from one of the services below.
            </p>
          </div>
          <Divider direction="horizontal">
            Or create new order for a specific service
          </Divider>
          <div className={styles.servicecontainer + " " + styles.inner}>
            <ul className={styles.servicelist}>
              {Services.map((service) => {
                return <NewOrderService key={service.ID} service={service} />;
              })}
            </ul>
          </div>
        </div>
        <div className={styles.floating}>
          <Button
            alternate
            variant="primary"
            onClick={() => router.push("/secure/new_order?selection=success")}
            disabled={invoice.OrderLength ? false : true}
          >
            Done Selecting
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewOrder;
