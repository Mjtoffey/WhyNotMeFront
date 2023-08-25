import { useEffect, useState } from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "src/styles/welcome.module.css";
import { Button } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
    const [users, setUsers] = useState([]);
    const router = useRouter();
    const { userId } = router.query;

    useEffect(() => {
        // Fetch data from the API
        fetch("http://127.0.0.1:8000/api/users/")
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, []);

    return (
        <div>
            <Head>
                <title>User Browse Page</title>
            </Head>
            <header
                style={{
                    backgroundColor: "#35424a",
                    color: "white",
                    padding: "10px",
                    textAlign: "center",
                }}
            >
                <h1>User Browse Page</h1>
            </header>
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "20px auto",
                    padding: "20px",
                    display: "flex",
                    flexWrap: "wrap",
                }}
            >
                {users.map((user) => (
                    <div
                        key={user.id}
                        style={{
                            backgroundColor: "white",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                            padding: "10px",
                            margin: "10px",
                            width: "calc(33.33% - 20px)",
                            boxSizing: "border-box",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                borderRadius: "50%",
                                overflow: "hidden",
                                marginBottom: "10px",
                            }}
                        >
                            <img
                                src={user.avatar}
                                alt={`${user.first_name} ${user.last_name}`}
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        </div>
                        <div style={{ fontWeight: "bold", marginBottom: "5px" }}>
                            {user.first_name} {user.last_name}
                        </div>
                        <div>{user.school}</div>
                        <div>{user.social_media}</div>
                        <div>{user.email}</div>
                        <div>{user.sport}</div>
                        <div> {user.player ? "Player" : "Recruiter"}</div>
                        <Link href={`/user-profile/${user.id}`}>

                            View Profile

                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}