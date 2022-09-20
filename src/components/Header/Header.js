import React from "react";
import { SiDiscord } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import styles from "./Header.module.css";
import { useState } from "react";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const navArray = [
    { navItem: "Home", to: "/" },
   // { navItem: "Whitelist", to: "/whitelist" },
   // { navItem: "OGMINT", to: "/freemint"}

  ];
  return (
    <div className={styles.navBar}>
      <div className={`${styles.header} ${sidebar && styles.sidebar}`}>
        <div className={styles.navItems}>
          {navArray.map((el, i) => (
            <Link to={el.to} key={i} className={styles.navLink}>
              {el.navItem}
            </Link>
          ))}
        </div>
        <div className={styles.socialContainer}>
          <a href="/#" target="_blank" rel="noreferrer">
            <SiDiscord className={styles.icon} />
          </a>
          <a href="/#" target="_blank" rel="noreferrer">
            <BsTwitter className={styles.icon} />
          </a>{" "}
          <a href="/#" target="_blank" rel="noreferrer">
            <RiInstagramFill className={styles.icon} />{" "}
          </a>
        </div>
      </div>

      {sidebar ? (
        <MdClose
          className={` ${styles.hamburger}`}
          onClick={() => setSidebar((prev) => !prev)}
        />
      ) : (
        <GiHamburgerMenu
          className={` ${styles.hamburger}`}
          onClick={() => setSidebar((prev) => !prev)}
        />
      )}
    </div>
  );
};

export default Header;
