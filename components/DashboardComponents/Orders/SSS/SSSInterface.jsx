import React, { useEffect, useState } from "react";
import styles from "./SSSInterface.module.css";
import { useOrderContext } from "../../../../contexts/OrderContext";
import DragnDrop from "./DragnDrop";
import DisplayImages from "./DisplayImages";
import Button from "../../../Button/Button";

const SSSInterface = ({
  imageCount,
  service,
  setActive,
  active,
  activateSSS,
}) => {
  const { handleInputChange } = useOrderContext();
  const [buttonState, setButtonState] = useState();
  useEffect(() => {
    imageCount != "" ? setButtonState(false) : setButtonState(true);
  }, [imageCount]);
  return (
    <div className={styles.container}>
      {activateSSS ? (
        <>
          <div className={styles.title}>
            <div>
              Secure Storage Servers {"("}SSS{")"}
            </div>
            Free for the first 2GB
          </div>
          <div className={styles.content}>
            <p>
              You can also use our Secure Storage Servers{"("}SSS{")"} for{" "}
              <strong>Free</strong>, for the first
              <strong> 2 GB</strong>, and then <strong>50c per 1 GB</strong>.
            </p>
            {buttonState ? (
              <label
                htmlFor="uploadfile"
                onChange={handleInputChange}
                className={styles.uploadbutton}
              >
                <input
                  id="uploadfile"
                  multiple
                  type="file"
                  accept="image/*,.psd"
                  hidden
                />
                Upload Images
                <svg
                  width="29"
                  height="28"
                  viewBox="0 0 29 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.4697 15.4315C23.1036 15.4315 22.7524 15.5771 22.4935 15.8361C22.2346 16.0951 22.0891 16.4465 22.0891 16.8128V17.3377L20.0459 15.2934C19.3244 14.5773 18.3493 14.1754 17.3331 14.1754C16.3168 14.1754 15.3417 14.5773 14.6202 15.2934L13.6539 16.2603L10.23 12.8347C9.49849 12.138 8.52719 11.7494 7.51721 11.7494C6.50723 11.7494 5.53593 12.138 4.80439 12.8347L2.76114 14.879V7.14384C2.76114 6.7775 2.9066 6.42617 3.1655 6.16713C3.42441 5.90809 3.77556 5.76256 4.14171 5.76256H13.8057C14.1719 5.76256 14.523 5.61703 14.7819 5.35799C15.0408 5.09895 15.1863 4.74762 15.1863 4.38128C15.1863 4.01494 15.0408 3.66361 14.7819 3.40457C14.523 3.14553 14.1719 3 13.8057 3H4.14171C3.04326 3 1.9898 3.43658 1.21308 4.2137C0.436358 4.99082 0 6.04483 0 7.14384V23.7192C0 24.8182 0.436358 25.8722 1.21308 26.6493C1.9898 27.4265 3.04326 27.863 4.14171 27.863H20.7086C21.807 27.863 22.8605 27.4265 23.6372 26.6493C24.4139 25.8722 24.8503 24.8182 24.8503 23.7192V16.8128C24.8503 16.4465 24.7048 16.0951 24.4459 15.8361C24.187 15.5771 23.8359 15.4315 23.4697 15.4315ZM4.14171 25.1005C3.77556 25.1005 3.42441 24.955 3.1655 24.6959C2.9066 24.4369 2.76114 24.0855 2.76114 23.7192V18.788L6.7648 14.7823C6.96762 14.5889 7.23704 14.4811 7.51721 14.4811C7.79738 14.4811 8.0668 14.5889 8.26962 14.7823L18.5825 25.1005H4.14171ZM22.0891 23.7192C22.0872 23.9836 22 24.2403 21.8406 24.4513L15.6143 18.1941L16.5807 17.2272C16.6796 17.1261 16.7978 17.0458 16.9282 16.991C17.0585 16.9362 17.1985 16.908 17.34 16.908C17.4814 16.908 17.6214 16.9362 17.7518 16.991C17.8822 17.0458 18.0003 17.1261 18.0993 17.2272L22.0891 21.2467V23.7192Z"
                    fill="#0F3A5F"
                  />
                  <path
                    d="M23.5081 0.393683L27.6499 4.53752C27.7792 4.66593 27.882 4.8187 27.952 4.98703C28.0221 5.15535 28.0582 5.33589 28.0582 5.51823C28.0582 5.70058 28.0221 5.88112 27.952 6.04944C27.882 6.21776 27.7792 6.37053 27.6499 6.49894C27.5215 6.62841 27.3688 6.73117 27.2006 6.80129C27.0323 6.87142 26.8519 6.90752 26.6696 6.90752C26.4874 6.90752 26.3069 6.87142 26.1387 6.80129C25.9705 6.73117 25.8178 6.62841 25.6894 6.49894L23.9085 4.70328V12.4246C23.9085 12.791 23.7631 13.1423 23.5041 13.4013C23.2452 13.6604 22.8941 13.8059 22.5279 13.8059C22.1618 13.8059 21.8106 13.6604 21.5517 13.4013C21.2928 13.1423 21.1474 12.791 21.1474 12.4246V4.70328L19.3664 6.49894C19.1065 6.75904 18.7539 6.90517 18.3862 6.90517C18.0186 6.90517 17.666 6.75904 17.406 6.49894C17.146 6.23884 17 5.88607 17 5.51823C17 5.3361 17.0359 5.15575 17.1055 4.98748C17.1752 4.81921 17.2773 4.66631 17.406 4.53752L21.5477 0.393683C21.679 0.267931 21.8339 0.169356 22.0033 0.103615C22.3394 -0.0345382 22.7164 -0.0345382 23.0525 0.103615C23.222 0.169356 23.3768 0.267931 23.5081 0.393683Z"
                    fill="#5CFC4E"
                  />
                </svg>
              </label>
            ) : (
              <Button variant="plain" onClick={() => setActive(!active)}>
                Done Selecting
              </Button>
            )}
          </div>
          <DragnDrop imageCount={imageCount} service={service} />
          <DisplayImages imageCount={imageCount} service={service} />
        </>
      ) : (
        <div className={styles.title}>
          <div>Clear link above to select</div>
        </div>
      )}
    </div>
  );
};

export default SSSInterface;
