import Link from "next/link";
import Navbar from "../components/Navbar"
import Header from "src/components/Header.js";
import Welcome from "../components/Welcome";

export default function Page() {
    return (
        <div>
            <Header />
            <Navbar />
            <Welcome />
        </div>
    );
}