import Link from "next/link";
import Navbar from "../components/Navbar"
import Header from "src/components/Header.js";
import Welcome from "../components/Welcome";
import { useState } from 'react';
import jwtDecode from "jwt-decode";
import { useGlobalState } from "../context/GlobalState";
import { useEffect } from "react";

export default function Page() {
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
    return (
        <div>
            <Header />
            <Navbar />
            <Welcome />
        </div>
    );
}