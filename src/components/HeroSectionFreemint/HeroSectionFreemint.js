import React, { useEffect, useState } from "react";
import styles from "./HeroSectionFreemint.module.css";
import { SiDiscord } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { useMoralis } from "react-moralis";
import { FaEthereum } from "react-icons/fa";
import { ogMint } from '../../utils/beastLike';


const HeroSectionFreemint = () => {
  const { account, authenticate, Moralis } = useMoralis();
  const text = "Minting Is Live!";

  const handleAuth = async () => {
    await authenticate({ signingMessage: "Welcome to the BeastLike Mint!" });
  };

 
  const handleMint = async () => {
    await ogMint(1, account, Moralis);
  };

  return (
    <div className={styles.heroSection}>
      <div className={styles.textContainer}>
        <div className={styles.logo}>
          <img src="images/beastlike.png" alt="#" className={styles.image} />
        </div>
        <p
          className={`${styles.text} ${styles.fn_desc} ${styles.fn_animated_text} ${styles.ready} ${styles.stop}`}
        >
          {text.split("").map((el, i) => (
            <span
              style={{
                animationDelay: `${i * 0.04}s`,
              }}
            >
              {el}
            </span>
          ))}
        </p>
        <button
          className={styles.mint}
          onClick={account ? handleMint : handleAuth}
        >
          <span className={styles.mintIcon}>
            <FaEthereum />
          </span>
          <span className={styles.mintText}>
            {" "}
            {account ? "MINT" : "CONNECT WALLET"}
          </span>
        </button>
        
        <h2 style={{ color: "white" }}>
          {account
            ? account.substring(0, 5) + "..." + account.substring(38, 42)
            : ""}
        </h2>
      </div>
      ;
    </div>
  );
};

export default HeroSectionFreemint;
