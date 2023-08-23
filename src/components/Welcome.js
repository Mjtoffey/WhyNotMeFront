import Link from "next/link";
import styles from "src/styles/welcome.module.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/navigation";

export default function Welcome() {
    const router = useRouter(); 

    const handleSignUp = () => {
        router.push('src/pages/register'); 
    };

    const handleLogin = () => {
        router.push('/src/pages/login'); 
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
                <button className="button" onClick={handleSignUp}>Sign up</button>
                <button className="button" onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
}