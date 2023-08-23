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
        <div className="page-container">
            <div className="container">
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
            <div className="button-container">
                <Link href={`/register`}>Text goes here</Link>
                <Link href={`/login`}>Text goes here</Link>
            </div>
        </div>
    );
}