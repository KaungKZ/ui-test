import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__wrapper section-content">
        <h6 className="navbar__label">Apple TV +</h6>
        <div>
          <Link href="/sub" className="navbar__link p4-regular-12 black-font">
            Stream now
          </Link>
        </div>
      </div>
    </div>
  );
}
