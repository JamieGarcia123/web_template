import React from "react";
import logo from "@/assets/logoipsum-287.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer-content">
      <ul className="footer-inner-content">
        <li>contact us</li>
        <li>some other info</li>
        <li>
          {" "}
          <Image src={logo} alt="logo" width={100} height={175} className="" />
        </li>
      </ul>
    </footer>
  );
}
