import React from "react";
import Link from "next/link";
import { useAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./Navbar.module.css";
import Button from "../Button/Button";

export default function Navbar() {
  const { user, logout } = useAuth();
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/" passHref>
          <a>
            <Image
              src="/Logos/Logo.png"
              alt="Logo"
              width={4}
              height={1}
              layout="responsive"
              priority
            />
          </a>
        </Link>
      </div>

      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link href="/">Services</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/">Pricing</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/">Contact Us</Link>
        </li>
        <li className={styles.menuItem}>
          {user ? ( //to show logout button
            <Button
              onClick={() => {
                router.replace("/");
                logout();
              }}
              variant="primary"
            >
              Logout
            </Button>
          ) : router.pathname == "/login" ? ( //to show sign up button
            <Link href="/signup" passHref>
              <a>
                <Button variant="primary">Sign Up</Button>
              </a>
            </Link>
          ) : (
            <Link href="/login" passHref>
              <a>
                <Button variant="primary">Log In</Button>
              </a>
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
}
