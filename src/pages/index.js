import Link from "next/link";

export default function Page() {
    return <div>
      <h1>Home page JDH</h1>
      <Link href="/welcome">Welcome</Link>
      <Link href="/about">about</Link>
      <Link href="../login/index.js">log in</Link>
      <Link href="../register/index.js">register</Link>
    </div>
  }