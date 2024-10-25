"use client";

import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";
import Link from "next/link";
import data from "@/data/galectica.json";
import SocialmediaItem from "./socialMediaItem";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faTiktok,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

export const Footer = () => {
  const path = usePathname().split("?")[0];

  return (
    <footer className={path !== "/" ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>
          Explore the universe and beyond. Your journey to the stars starts here.
        </p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>

      <div className={styles.footerLinks}>
        <h3>Pages</h3>
        <ul className={styles.footerList}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about_us">About Us</Link>
          </li>
          <li>
            <Link href="/destination">Destination</Link>
          </li>
          <li>
            <Link href="/nasa_">NASA Collaboration</Link>
          </li>
        </ul>
      </div>

      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={styles.footerList}>
          {data.socialMediaLinks.map((socialMedia, index) => {
            const iconMap = {
              "fab fa-linkedin": faLinkedin,
              "fab fa-facebook": faFacebook,
              "fab fa-instagram": faInstagram,
              "fab fa-tiktok": faTiktok,
              "fab fa-google": faGoogle,
            };
            return (
              <SocialmediaItem
                key={index}
                url={socialMedia.url}
                title={socialMedia.title}
                icon={iconMap[socialMedia.icon]}
              />
            );
          })}
        </ul>
      </div>
    </footer>
  );
};
