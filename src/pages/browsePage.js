import Link from "next/link";
import Navbar from "../components/Navbar"
import Header from "src/components/Header.js";
import Browse from "../components/browse";

export default function Page() {
    return (
        <div>
            <Header />
            <Navbar />
            <Browse />
        </div>
    );
}