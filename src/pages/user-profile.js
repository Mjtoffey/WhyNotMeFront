import { useEffect, useState } from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "src/styles/welcome.module.css";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";


export default function UserProfile({ user }) {
    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Head>
                <title>{user.first_name}'s Profile</title>
            </Head>
            <h1>{user.first_name}'s Profile</h1>
            <p>First Name: {user.first_name}</p>
            <p>Last Name: {user.last_name}</p>
            <p>School: {user.school}</p>
            <p>Social Media: {user.social_media}</p>
            <p>Email: {user.email}</p>
            <p>Sport: {user.sport}</p>
            <p>User Type: {user.player ? "Player" : "Non-Player"}</p>
        </div>
    );
}

export async function getServerSideProps({ query }) {
    const { userId } = query;

    try {
        const response = await fetch(`http://127.0.0.1:8000/api/users/${userId}/`);
        const user = await response.json();

        return {
            props: {
                user,
            },
        };
    } catch (error) {
        console.error("Error fetching user data:", error);
        return {
            props: {
                user: null,
            },
        };
    }
}