import Link from "next/link";
import Navbar from "../components/Navbar"
import Header from "src/components/Header.js";
import Register from "src/pages/register/index.js";

export default function Page() {
    return (
        <div>
            <Header />
            <Navbar />
            <Register />
        </div>
    );
}