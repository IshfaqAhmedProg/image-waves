import React, { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import styles from "../../../styles/Modal.module.css";
import Services from "../../../shared/Data/services.json";
import Divider from "../../Divider/Divider";
import Button from "../../Button/Button";
const NewOrder = () => {
  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);
  const [progress, setProgress] = useState(0);
  const storage = getStorage();

  const handleInputChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = user.email + "IMG" + i;
      setImages((prevState) => [...prevState, newImage]);
    }
  };
  const handleUpload = () => {
    images.map((image) => {
      const storageRef = ref(storage, user.email + "/" + image.name);
      const uploadTask = uploadBytesResumable(storageRef, image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          setProgress(
            () => (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.log([error]);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUrls((prev) => [...prev, downloadURL]);
            //TODO per image progress
          });
        }
      );
    });
  };
  return (
    <div className={styles.container}>
      <h2>Create a new order</h2>
      <div className={styles.content}>
        <div className={styles.servicepanel}>
          <p>
            Select a service and either paste your image repository link i.e.
            Google Drive, Dropbox, Mediafire Link or Upload your Photos. You can
            use our Secure Storage Servers&#40;SSS&#41; for an additional fee.
          </p>
          <div className={styles.servicecontainer + " " + styles.inner}>
            <ul className={styles.servicelist}>
              {Services.map((service) => {
                return (
                  <li className={styles.service + " " + styles.outer}>
                    <div className={styles.servicetitle}>
                      <span>{service.ServiceName}</span>
                      <span>starts at {service.Pricing}&#162;/image</span>
                      <span>
                        <svg
                          width="10"
                          height="auto"
                          viewBox="0 0 14 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
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
                    <div className={styles.serviceinfo}>
                      <p>
                        Upload the images you need {service.ServiceName} done
                        on.
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={styles.resultpanel}>
          <div className={styles.resultcard + " " + styles.outer}>
            <table>
              <tr>
                <th>Order Details</th>
              </tr>
              <tr>
                <td>
                  <span>350</span> images
                </td>
                <td>
                  <span>
                    25.6<i>GB</i>
                  </span>
                  size
                </td>
              </tr>
            </table>
            7 Service&#40;s&#41; selected
          </div>
          <div className={styles.resultcard + " " + styles.outer}>
            <table>
              <tr>
                <th></th>
                <th>Qty</th>
                <th>Total Price</th>
              </tr>
              <tr>
                <td>Clipping Path</td>
                <td>15</td>
                <td>50$</td>
              </tr>
              <tr>
                <td>Clipping Path</td>
                <td>15</td>
                <td>50$</td>
              </tr>
              <tr>
                <td>Clipping Path</td>
                <td>15</td>
                <td>50$</td>
              </tr>
            </table>
          </div>
          <div className={styles.resultcard + " " + styles.outer}>
            <table>
              <tr>
                <th>Total</th>
                <td>
                  <h4>150 USD</h4>
                </td>
              </tr>
            </table>
          </div>
          <div className={styles.resultcard + " " + styles.outer}>
            <h4>Order Summary</h4>
            <table>
              <tr>
                <td>Order Created:</td>
                <td>Sun, May 7, 2022</td>
              </tr>
              <tr>
                <td>Subtotal:</td>
                <td>150$</td>
              </tr>
              <tr>
                <td>Expected Delivery</td>
                <td>Sun, May 14, 2022</td>
              </tr>
            </table>
            <Divider direction="horizontal" />
            <Button variant="primary">Confirm Order</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewOrder;
