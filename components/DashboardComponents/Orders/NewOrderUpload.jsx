import React from "react";
import styles from "../../../styles/Modal.module.css";
import Button from "../../Button/Button";
import InputField from "../../InputField/InputField";
import Divider from "../../Divider/Divider";
import SSSInterface from "./SSS/SSSInterface";

const NewOrderUpload = ({ service, imageCount, active, setActive }) => {
  return (
    <div
      className={
        styles.serviceupload + " " + styles.outer + " " + styles.container
      }
    >
      <div className={styles.closeButton}>
        <Button variant="close" onClick={() => setActive(!active)}>
          Close
        </Button>
      </div>
        <h2 className={styles.title}>Upload Images for {service.ServiceName}</h2>
      <div className={styles.pastelink}>
        <p>
          You can send us your image for Free by pasting a link to your drive{" "}
          {"("}Google Drive, Dropbox, weTransfer etc.{")"} below.
        </p>
        <InputField type="url" placeholder="Paste your link here" id="link">
          Paste your Drive link
        </InputField>
      </div>

      <Divider direction="horizontal">Or</Divider>
      <SSSInterface imageCount={imageCount} service={service}/>
      {/* <h2>Upload Images for {service.ServiceName}</h2>
      <form>
        <fieldset>
         
        </fieldset>
        <fieldset>
          <Divider direction="horizontal" colorMode="gray">
            or
          </Divider>
        </fieldset>
       
        <fieldset className={styles.sss}>
          <p>Upload the images you need {service.ServiceName} done on.</p>
          <input
            multiple
            type="file"
            onChange={handleInputChange}
            onClick={() =>
              setActiveService([service.ServiceName, service.Price])
            }
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
        </fieldset>
      </form> */}
    </div>
  );
};

export default NewOrderUpload;
