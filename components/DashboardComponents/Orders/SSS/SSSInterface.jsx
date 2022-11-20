import React from "react";
import Button from "../../../Button/Button";
import styles from "./SSSInterface.module.css";
import { useOrderContext } from "../../../../contexts/OrderContext";

const SSSInterface = ({ imageCount, service }) => {
  const { handleInputChange, setActiveService, handleClearService } =
    useOrderContext();
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div>
          Secure Storage Servers {"("}SSS{")"}
        </div>
        starting at 50c per 1GB
      </div>
      <p>Upload the images you need {service.ServiceName} done on.</p>
      <input
        multiple
        type="file"
        onChange={handleInputChange}
        onClick={() => setActiveService([service.ServiceName, service.Price])}
        accept="image/*,.psd"
      />
      <Button
        variant="plain"
        onClick={(e) => {
          e.preventDefault();
          handleClearService(service.ServiceName);
        }}
        disabled={imageCount != 0 ? false : true}
      >
        Clear
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6V18C18 19.1046 17.1046 20 16 20H8C6.89543 20 6 19.1046 6 18V6M15 6V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V6M4 6H20M10 10V16M14 10V16"
            stroke="var(--red)"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Button>
    </div>
  );
};

export default SSSInterface;
