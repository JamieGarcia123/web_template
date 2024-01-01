import React from "react";
import logo from "@/assets/logoipsum-287.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer-content">
      <ul className="footer-inner-content">
        <li key="contact">contact us</li>
        <li key="etc">some other info</li>
        <li key="logo">
          {" "}
          <Image src={logo} alt="logo" width={100} height={175} className="" />
        </li>
      </ul>
    </footer>
  );
}
