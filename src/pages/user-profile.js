import { useEffect, useState } from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "src/styles/welcome.module.css";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import Link from "next/link"; // Import Link
import Navbar from "../components/Navbar";
import Header from "src/components/Header.js";
import { useGlobalState } from "../context/GlobalState";
import jwtDecode from "jwt-decode";

export default function UserProfile({ user, games }) {
    const { state, dispatch } = useGlobalState();
    useEffect(() => {
        // Function to retrieve user data from local storage
        const getUserFromLocalStorage = () => {
            const userData = localStorage.getItem('user');
            if (userData) {
                const user = jwtDecode(userData);
                console.log('User data:', user);
                dispatch({
                    type: 'SET_USER',
                    payload: user
                });
            }
        };
        getUserFromLocalStorage();
    }, []);


    // const isCurrentUserProfile = state.user && state.user.id === user.id;

    return (
        <div className={styles.profileContainer}>
            <Header />
            <Navbar />
            <Head>
                {/* <title>{state.user.first_name}'s Profile</title> */}
            </Head>
            <div className={styles.profileContent}>
                <h1>Matt's Profile</h1>
                <p>First Name: Matt</p>
                <p>Last Name: Toff</p>
                <p>School: TCHS</p>
                <p>Social Media: mtoff</p>
                <p>Email: mjtoffey</p>
                <p>Sport: soccer</p>
                <p>User Type: Athlete</p>



                {/* Display Game Objects */}
                {Array.isArray(games) && games.length > 0 ? (
                    <div>
                        <h2>Game Objects:</h2>
                        <ul>
                            {games.map((game) => (
                                <li key={game.id}>{game.name} - {game.date}</li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p>No games available for this user.</p>
                )}
            </div>
        </div>
    );
}

export async function getServerSideProps({ query }) {
    const { userId } = query;

    try {
        const [userResponse, gamesResponse] = await Promise.all([
            fetch(`http://127.0.0.1:8000/api/users/${userId}/`),
            fetch(`http://127.0.0.1:8000/api/games/${userId}/`), // Adjust the endpoint URL accordingly
        ]);

        const user = await userResponse.json();
        const games = await gamesResponse.json();

        return {
            props: {
                user,
                games,
            },
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            props: {
                user: null,
                games: [],
            },
        };
    }
}