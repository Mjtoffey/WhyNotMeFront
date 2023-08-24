// components/GameForm.js
import { useState, useEffect } from 'react';

const GameForm = ({ userId }) => {
    const [userSport, setUserSport] = useState('Basketball'); // Default sport
    const [formData, setFormData] = useState({
        title: '',
        win: true,
        points: 0,
        rebounds: 0,
        goals: 0,
        saves: 0,
        assists: 0,
        minutesPlayed: 0,
    });

    const sportDisplayNames = {
        Basketball: {
            points: 'Points',
            rebounds: 'Rebounds',
            assists: 'Assists',
            minutesPlayed: 'Minutes Played',
        },
        Soccer: {
            goals: 'Goals',
            assists: 'Assists',
            saves: 'Saves',
            minutesPlayed: 'Minutes Played',
            rebounds: '50/50 Balls Won', // Rename rebounds for soccer
        },
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // ... (same as before)
    };

    useEffect(() => {
        // Fetch user's sport based on userId and update state
        const fetchUserSport = async () => {
            try {
                const response = await fetch(`/api/getUserSport?userId=${userId}`);
                if (response.ok) {
                    const data = await response.json();
                    setUserSport(data.sport);
                }
            } catch (error) {
                console.error('Error fetching user sport:', error);
            }
        };

        fetchUserSport();
    }, [userId]);

    return (
        <div>
            <p>Selected Sport: {userSport}</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" name="title" value={formData.title} onChange={handleChange} />
                </label>
                {/* Render inputs based on user's sport */}
                {Object.keys(sportDisplayNames[userSport]).map((key) => (
                    <label key={key}>
                        {sportDisplayNames[userSport][key]}:
                        <input
                            type="number"
                            name={key}
                            value={formData[key]}
                            onChange={handleChange}
                        />
                    </label>
                ))}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default GameForm;