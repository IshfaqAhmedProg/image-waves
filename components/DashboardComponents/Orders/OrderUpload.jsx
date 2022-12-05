import { useRouter } from "next/router";
import React from "react";
import { useOrderContext } from "../../../contexts/OrderContext";
import styles from "../../../styles/Modal.module.css";
import Button from "../../Button/Button";
import ProgressBar from "../../ProgressBar/ProgressBar";

const OrderUpload = () => {
  const { uploadStatus, uploadProgress } = useOrderContext();
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.resultpanel}>
        <div className={styles.resultcard + " " + styles.outer}>
          <h3>Uploading your files</h3>
          <p
            style={{
              textAlign: "center",
              fontSize: "0.9em",
              paddingInline: "0.5em",
              color: "var(--red)",
            }}
          >
            Please do not close this window while files are uploading
          </p>
          <ProgressBar value={uploadProgress} />
          <p>Upload is {uploadStatus}</p>
        </div>
        {uploadStatus == "complete" ? (
          <Button
            alternate
            variant="primary"
            onClick={() => router.replace("/dashboard")}
          >
            Back to Dashboard
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default OrderUpload;
