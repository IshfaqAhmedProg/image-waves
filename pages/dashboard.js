import React, { useState } from "react";
import Button from "../components/Button/Button";
import { useAuth } from "../contexts/AuthContext";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import styles from "../styles/Home.module.css";
import Divider from "../components/Divider/Divider";
import Link from "next/link";
import OrdersInterface from "../components/Orders/OrdersInterface";
import Image from "next/image";
import OrdersIcon from '../public/Icons/Ordersicon.svg'
import ImageIcon from '../public/Icons/Imageicon.svg'
import ServiceIcon from '../public/Icons/Serviceicon.svg'
import AccountIcon from '../public/Icons/Accounticon.svg'
const Dashboard = () => {
  const { user } = useAuth();
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
  {
    console.log([images]);
  }
  {
    console.log([urls]);
  }
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <ul className={styles.menulist}>
          <li>
            <Button variant="primary">+ Create New Order</Button>
          </li>
          <li>
            <h4>
              <Image src={OrdersIcon}/>
              <Link href="/">All Orders</Link>
            </h4>
          </li>
          <li>
            <h4>
              <Image src={ImageIcon}/>
              <Link href="/">Your Images</Link>
            </h4>
          </li>
          <li>
            <h4>
              <Image src={ServiceIcon}/>
              <Link href="/">Services</Link>
            </h4>
          </li>
          <li>
            <Divider direction="horizontal" />
          </li>
          <li>
            <h4>
              <Image src={AccountIcon}/>
              <Link href="/">Account</Link>
            </h4>
          </li>
        </ul>
        <div className={styles.menucontact}>
          <p>If you have any questions or queries please</p>
          <Button variant="primary">
            Send us a<br />
            Message!
          </Button>
          <h3>or</h3>
          <p>
            Send us an Email:
            <br />
            <Link href="/">imagewaves@gmail.com</Link>
          </p>
        </div>
      </div>
      <div className={styles.displaycontainer}>
        <div className={styles.display + " " + styles.cards}>
          <h4>Ongoing Orders</h4>
          <div className={styles.content}>
            <div className={styles.order}></div>
          </div>
        </div>
        <Divider direction="horizontal" />
        <div className={styles.display + " " + styles.list}>
          <h4>Recent Orders</h4>
          <div className={styles.content}>
            <OrdersInterface
              ordernum={23548689}
              orderamount={215}
              orderdate="Nov 5, 2022"
              orderstatus="Recieved"
            />
            <OrdersInterface
              ordernum={25486893}
              orderamount={215}
              orderdate="Nov 5, 2022"
              orderstatus="Complete"
            />
            <OrdersInterface
              ordernum={86823549}
              orderamount={215}
              orderdate="Nov 5, 2022"
              orderstatus="Processing"
            />
            <OrdersInterface
              ordernum={25486893}
              orderamount={215}
              orderdate="Nov 5, 2022"
              orderstatus="Complete"
            />
            <OrdersInterface
              ordernum={23548689}
              orderamount={215}
              orderdate="Nov 5, 2022"
              orderstatus="Recieved"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
