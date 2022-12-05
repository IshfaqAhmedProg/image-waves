import React, { useEffect, useState } from "react";
import styles from "../../../styles/Modal.module.css";
import Button from "../../Button/Button";
import InputField from "../../InputField/InputField";
import Divider from "../../Divider/Divider";
import SSSInterface from "./SSS/SSSInterface";
import { useOrderContext } from "../../../contexts/OrderContext";

const NewOrderUpload = ({
  service,
  imageCount,
  setImageCount,
  active,
  setActive,
}) => {
  const { handlePasteLink } = useOrderContext();
  const [pasteLink, setPasteLink] = useState({ link: "", amount: "" });

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
            You can either send us your image for Free by pasting a link to your
            drive {"("}Google Drive, Dropbox, weTransfer etc.{")"} below.
          </p>
          <form
            className={styles.pastelinkform}
            onSubmit={(e) => {
              handlePasteLink(e, pasteLink);
              setActive(!active);
              setImageCount("Drive Link");
              console.log({ imageCount });
            }}
          >
            {imageCount != "" ? (
              <InputField disabled={true}>Clear below to add link</InputField>
            ) : (
              <InputField
                type="url"
                placeholder="Paste your link here"
                id="pastelink"
                required
                onChange={(e) =>
                  e.target.value != ""
                    ? setPasteLink({ ...pasteLink, link: e.target.value })
                    : setPasteLink({ link: "", amount: "" })
                }
              >
                Paste your Drive link here
              </InputField>
            )}
            {pasteLink.link == "" ? (
              <span>NO STORAGE FEE</span>
            ) : (
              <>
                <InputField
                  required
                  type="number"
                  placeholder="Number of Pictures"
                  id="number"
                  min={1}
                  onChange={(e) =>
                    setPasteLink({ ...pasteLink, amount: e.target.value })
                  }
                >
                  Number of images
                </InputField>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </>
            )}
          </form>
        </div>

        <Divider direction="horizontal">or</Divider>
        <SSSInterface
          imageCount={imageCount}
          service={service}
          setActive={setActive}
          active={active}
          activateSSS={pasteLink.link != "" ? false : true}
        />
      </div>
    </div>
  );
};

export default NewOrderUpload;
