import React, { useState } from "react";
import styles from "../../../styles/Modal.module.css";
import Button from "../../Button/Button";
import InputField from "../../InputField/InputField";
import Divider from "../../Divider/Divider";
import SSSInterface from "./SSS/SSSInterface";

const NewOrderUpload = ({ service, imageCount, active, setActive }) => {
  const [pasteLink, setPasteLink] = useState();
  return (
    <div className={styles.serviceupload + " " + styles.outer}>
      <div className={styles.closeButton}>
        <Button variant="close" onClick={() => setActive(!active)}>
          Close
        </Button>
      </div>
      <div className={styles.serviceuploadcontainer + " " + styles.container}>
        <h2 className={styles.title}>
          Upload Images for {service.ServiceName}
        </h2>
        <div className={styles.pastelink}>
          <p>
            You can either send us your image for Free by pasting a link to your drive{" "}
            {"("}Google Drive, Dropbox, weTransfer etc.{")"} below.
          </p>
          <form className={styles.pastelinkform}>
            <InputField
              type="url"
              placeholder="Paste your link here"
              id="pastelink"
              onChange={(e) =>
                e.target.value != ""
                  ? setPasteLink(e.target.value)
                  : setPasteLink(undefined)
              }
            >
              Paste your Drive link here
            </InputField>
            {pasteLink == undefined ? (
              <span>NO STORAGE FEE</span>
            ) : (
              <Button variant="primary" type="submit">
                Submit
              </Button>
            )}
          </form>
        </div>

        <Divider direction="horizontal">or</Divider>
        <SSSInterface imageCount={imageCount} service={service} />
      </div>
    </div>
  );
};

export default NewOrderUpload;
