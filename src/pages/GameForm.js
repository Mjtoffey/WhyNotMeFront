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
        e.preventDefault();

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
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                    <input
                        type="int"
                        name="points"
                        placeholder="Points"
                        value={formData.points}
                        onChange={(e) => setFormData({ ...formData, points: e.target.value })}
                    />
                    <input
                        type="text"
                        name="rebounds"
                        placeholder="Rebounds"
                        value={formData.rebounds}
                        onChange={(e) => setFormData({ ...formData, rebounds: e.target.value })}
                    />
                    <input
                        type="text"
                        name="blocks"
                        placeholder="Blocks"
                        value={formData.blocks}
                        onChange={(e) => setFormData({ ...formData, blocks: e.target.value })}
                    />
                    <input
                        type="text"
                        name="steals"
                        placeholder="Steals"
                        value={formData.steals}
                        onChange={(e) => setFormData({ ...formData, steals: e.target.value })}
                    />
                    <input
                        type="text"
                        name="assists"
                        placeholder="Assists"
                        value={formData.assists}
                        onChange={(e) => setFormData({ ...formData, assists: e.target.value })}
                    /><input
                        type="text"
                        name="saves"
                        placeholder="Saves"
                        value={formData.saves}
                        onChange={(e) => setFormData({ ...formData, saves: e.target.value })}
                    />
                    <input
                        type="text"
                        name="min_played"
                        placeholder="Minutes Played"
                        value={formData.min_played}
                        onChange={(e) => setFormData({ ...formData, min_played: e.target.value })}
                    />
                    {/* Other input fields for game data */}
                    <button type="submit">Submit Game</button>
                </form>
            </div>
        </div>
    );
};

export default GameForm;