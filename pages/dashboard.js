import React, { useState } from "react";
import Button from "../components/Button/Button";
import styles from "../styles/Home.module.css";
import Divider from "../components/Divider/Divider";
import Link from "next/link";
import OrdersInterface from "../components/Orders/OrdersInterface";
import Image from "next/image";
import OrdersIcon from "../public/Icons/Ordersicon.svg";
import ImageIcon from "../public/Icons/Imageicon.svg";
import ServiceIcon from "../public/Icons/Serviceicon.svg";
import AccountIcon from "../public/Icons/Accounticon.svg";
const Dashboard = () => {
  const [sbToggle, setSbToggle] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.menu + " " + (sbToggle ? styles.toggled : "")}>
        <ul className={styles.menulist}>
          <li>
            <Button variant="primary">
              <svg
                width="20"
                height="20"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 2.5C16 1.11929 14.8807 0 13.5 0C12.1193 0 11 1.11929 11 2.5V11H2.5C1.11929 11 0 12.1193 0 13.5C0 14.8807 1.11929 16 2.5 16H11V24.5C11 25.8807 12.1193 27 13.5 27C14.8807 27 16 25.8807 16 24.5V16H24.5C25.8807 16 27 14.8807 27 13.5C27 12.1193 25.8807 11 24.5 11H16V2.5Z"
                  fill="white"
                />
              </svg>
              <span className={styles.neworderbutton}></span>
            </Button>
          </li>
          <li>
            <h4>
              <Image src={OrdersIcon} />
              <Link href="/">All Orders</Link>
            </h4>
          </li>
          <li>
            <h4>
              <Image src={ImageIcon} />
              <Link href="/">Your Images</Link>
            </h4>
          </li>
          <li>
            <h4>
              <Image src={ServiceIcon} />
              <Link href="/">Services</Link>
            </h4>
          </li>
          <li>
            <Divider direction="horizontal" />
          </li>
          <li>
            <h4>
              <Image src={AccountIcon} />
              <Link href="/">Account</Link>
            </h4>
          </li>
        </ul>
        <div className={styles.menucontact}>
          <p>If you have any questions or queries please</p>
          <Button variant="primary" alternate>
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
        <div
          onClick={() => setSbToggle(!sbToggle)}
          className={
            styles.sidebartoggle + " " + (sbToggle ? styles.toggledbutton : "")
          }
        >
          <svg
            width="14"
            height="21"
            viewBox="0 0 14 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 1.5L11 10.5L2 19.5"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
      <div className={styles.displaycontainer}>
        <div className={styles.display + " " + styles.cards}>
          <span className={styles.displaytitle}>
            <h4>Ongoing Orders</h4>
            <Button variant="primary">
              <svg
                width="20"
                height="20"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 2.5C16 1.11929 14.8807 0 13.5 0C12.1193 0 11 1.11929 11 2.5V11H2.5C1.11929 11 0 12.1193 0 13.5C0 14.8807 1.11929 16 2.5 16H11V24.5C11 25.8807 12.1193 27 13.5 27C14.8807 27 16 25.8807 16 24.5V16H24.5C25.8807 16 27 14.8807 27 13.5C27 12.1193 25.8807 11 24.5 11H16V2.5Z"
                  fill="#0F3A5F"
                />
              </svg>
            </Button>
          </span>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
