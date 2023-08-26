import Link from "next/link";
import Navbar from "../components/Navbar"
import Header from "src/components/Header.js";
import Login from "src/pages/loginPage.js";

export default function Page() {
    return (
        <div>
            <Header />
            <Navbar />
            <Login />
        </div>
    );
}