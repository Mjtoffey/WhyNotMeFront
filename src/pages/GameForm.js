import { useState } from 'react';
import { useGlobalState } from "../context/GlobalState";
import jwtDecode from "jwt-decode";
import { useEffect } from 'react';
import Navbar from "../components/Navbar"
import Header from "src/components/Header.js";
import styles from "src/styles/GameForm.module.css"

const GameForm = () => {
    const { state, dispatch } = useGlobalState();
    const [formData, setFormData] = useState({
        user_id: '',
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
        event.preventDefault();

        try {
            const response = await fetch('/api/games', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
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
                        onChange={(e) => handleSubmit({ title: e.target.value })}
                    />
                    <input
                        type="int"
                        name="points"
                        placeholder="Points"
                        required
                        onChange={(e) => handleSubmit({ points: e.target.value })}
                    />
                    <input
                        type="text"
                        name="rebounds"
                        placeholder="Rebounds"
                        required
                        onChange={(e) => handleSubmit({ rebounds: e.target.value })}
                    />
                    <input
                        type="text"
                        name="blocks"
                        placeholder="Blocks"
                        required
                        onChange={(e) => handleSubmit({ blocks: e.target.value })}
                    />
                    <input
                        type="text"
                        name="steals"
                        placeholder="Steals"
                        required
                        onChange={(e) => handleSubmit({ steals: e.target.value })}
                    />
                    <input
                        type="text"
                        name="assists"
                        placeholder="Assists"
                        required
                        onChange={(e) => handleSubmit({ assists: e.target.value })}
                    /><input
                        type="text"
                        name="saves"
                        placeholder="Saves"
                        required
                        onChange={(e) => handleSubmit({ saves: e.target.value })}
                    />
                    <input
                        type="text"
                        name="min_played"
                        placeholder="Minutes Played"
                        required
                        onChange={(e) => handleSubmit({ min_played: e.target.value })}
                    />
                    {/* Other input fields for game data */}
                    <button type="submit">Submit Game</button>
                </form>
            </div>
        </div>
    );
};

export default GameForm;