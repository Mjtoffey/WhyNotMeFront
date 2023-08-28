import Link from "next/link";
import styles from "src/styles/welcome.module.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";


export default function Welcome() {

    const router = useRouter();

    const handleSignUp = () => {
        router.push('src/pages/register/index.js');
    };

    const handleLogin = () => {
        router.push('/src/pages/login/index.js');
    };
    return (
        <div className={styles.pageContainer}>
            <div className={styles.cardContainer}>
                <h1>Welcome to Why Not Me: Recruiting</h1>
                <p>A platform designed around students athletes to help them connect to recruiters by making them the center of attention! </p>
                <p>Student athletes will be able to make a profile, and upload a "game" this game will have you fill out stats, and post the game to your profile so users all around the world can see the progess you make in games and gives tangible results.</p>
                <p>As you make progress recruiters will be able to see your contact information and reach out as they see your growth and the value that you bring to your teams.</p>
            </div>
            <div className={styles.buttonContainer}>
                <Button href={`/register`}>Register Here!</Button>
                <Button href={`/login`}>Login</Button>
            </div>
        </div>
    );
}