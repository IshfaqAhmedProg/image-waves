import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./Navbar.module.css";
import Button from "../Button/Button";
import HamburgerIcon from "./HamburgerIcon/hamburgerIcon";

export default function Navbar() {
  const [toggled, setToggled] = useState(false);
  const { user, logout } = useAuth();
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.bg}></div>
      <div className={styles.logo}>
        <Link href="/" passHref>
          <a>
            <Image
              src="/Logos/LogoWhiteH.svg"
              alt="Logo"
              width={247}
              height={60}
              layout="fixed"
              priority
            />
          </a>
        </Link>
      </div>
      <HamburgerIcon onClick={() => setToggled(!toggled)} toggle={toggled} />
      <div
      className={toggled?styles.menubg:styles.menubg+" "+styles.hidden}
        
        onClick={() => setToggled(!toggled)}
      ></div>

      <ul className={toggled ? styles.menu + " " + styles.open : styles.menu}>
        <li className={styles.menuItem} onClick={() => setToggled(!toggled)}>
          <Link href="/interface/services">Services</Link>
        </li>
        <li className={styles.menuItem} onClick={() => setToggled(!toggled)}>
          <Link href="/interface/help">Help</Link>
        </li>
        <li className={styles.menuItem} onClick={() => setToggled(!toggled)}>
          <Link href="/">Contact Us</Link>
        </li>
        {user && router.pathname != "/dashboard" ? (
          <li className={styles.menuItem} onClick={() => setToggled(!toggled)}>
            <Link href="/dashboard">Dashboard</Link>
          </li>
        ) : (
          ""
        )}
        <li className={styles.menuItem} onClick={() => setToggled(!toggled)}>
          {user ? ( //to show logout button
            <Button
              onClick={() => {
                router.replace("/");
                logout();
              }}
              variant="primary"
              alternate
            >
              Logout
            </Button>
          ) : router.pathname != "/login" ? ( //to show log in button
            <Link href="/login" passHref>
              {router.pathname != "/" ? (
                <a>
                  <Button variant="primary">Log In</Button>
                </a>
              ) : (
                "Log In"
              )}
            </Link>
          ) : (
            //to show sign up button
            <Link href="/signup" passHref>
              <a>
                <Button variant="primary">Sign Up</Button>
              </a>
            </Link>
          )}
        </li>
        {router.pathname == "/" && user == null ? (
          <li className={styles.menuItem} onClick={() => setToggled(!toggled)}>
            <Link href="/signup">
              <a>
                <Button variant="primary">Try for free!</Button>
              </a>
            </Link>
          </li>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
}
