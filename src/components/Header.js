import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useGlobalState } from "../context/GlobalState";
import { useRouter } from "next/navigation";

function Header() {
  const [state, dispatch] = useGlobalState();

  return (
    <div>
        <div>
        <Image
          src="/white-bg-logo.png"
          width={500}
          height={500}
          alt="Why Not Me Recruiting logo"
        />
        <h1>Why Not Me: Recruiting</h1>
        </div>
    </div>
  );
}

export default Header;

