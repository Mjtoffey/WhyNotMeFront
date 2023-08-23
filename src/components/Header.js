import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useGlobalState } from "../context/GlobalState";
import { useRouter } from "next/navigation";

function Header() {
  return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Image 
          src="/white-bg-logo.png"
          width={500}
          height={350}
          alt="Why Not Me Recruiting logo"
        />
      </div>
  );
}

export default Header;

