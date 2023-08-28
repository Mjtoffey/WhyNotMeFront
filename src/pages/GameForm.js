import { useState } from 'react';
import { useGlobalState } from "../context/GlobalState";
import jwtDecode from "jwt-decode";
import { useEffect } from 'react';
import Navbar from "../components/Navbar"
import Header from "src/components/Header.js";
import styles from "src/styles/GameForm.module.css"
import API_URL from 'src/services/auth.constants.js';

const GameForm = () => {
    const { state, dispatch } = useGlobalState();
    const [formData, setFormData] = useState({
        // user_id: state.user.user_id,
        title: '',
        points: '',
        rebounds: '',
        blocks: '',
        steals: '',
        assists: '',
        saves: '',
        min_played: '',
    });
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

    const handleSubmit = async (e) => {
        console.log(formData)
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:8000/api/games/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ formData }),
                user: state.user.user_id,
            });

            const data = await response.json();
            console.log(data); // Display success or error message
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <div>
            <Header />
            <Navbar />
            <div className={styles.container}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        required
                        onChange={(e) => setFormData({ title: e.target.value })}
                    />
                    <input
                        type="int"
                        name="points"
                        placeholder="Points"
                        required
                        onChange={(e) => setFormData({ points: e.target.value })}
                    />
                    <input
                        type="text"
                        name="rebounds"
                        placeholder="Rebounds"
                        required
                        onChange={(e) => setFormData({ rebounds: e.target.value })}
                    />
                    <input
                        type="text"
                        name="blocks"
                        placeholder="Blocks"
                        required
                        onChange={(e) => setFormData({ blocks: e.target.value })}
                    />
                    <input
                        type="text"
                        name="steals"
                        placeholder="Steals"
                        required
                        onChange={(e) => setFormData({ steals: e.target.value })}
                    />
                    <input
                        type="text"
                        name="assists"
                        placeholder="Assists"
                        required
                        onChange={(e) => setFormData({ assists: e.target.value })}
                    /><input
                        type="text"
                        name="saves"
                        placeholder="Saves"
                        required
                        onChange={(e) => setFormData({ saves: e.target.value })}
                    />
                    <input
                        type="text"
                        name="min_played"
                        placeholder="Minutes Played"
                        required
                        onChange={(e) => setFormData({ min_played: e.target.value })}
                    />
                    <button type="submit">Submit Game</button>
                </form>
            </div>
        </div>
    );
};

export default GameForm;