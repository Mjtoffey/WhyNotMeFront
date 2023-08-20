import Link from "next/link";
import Navbar from "../components/Navbar"
import styles from "../styles/welcomepage.css"

export default function Welcome() {
    return (
        <div>
            <Navbar />
            <div className={styles.container}>
                <p>
                    Welcome to Why Not Me: Recruiting
                </p>
                <p>
                    This platform will allow student athletes to be connected to recruiters around the United States.
                </p>
                <p>
                    Once you have made your profile and customised your "games" your profile will be ready for recruiters to view and get into contact with you!
                </p>
            </div>
            <button> className={styles.sButton}</button>
            <button> className={styles.lButton}</button>
        </div>
    );
}