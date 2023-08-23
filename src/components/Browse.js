import React from "react";
import { useState, useEffect } from "react";

export default function Browse() {
    const [accounts, setAccounts] = useState([]);
    

    useEffect(() => {
        const axios = require('axios');

        axios.get(url)
            .then(response => {
                setAccounts(response.data.results);
            })
    });
}

    return (
        <div className="accountContainer container-fluid">
            {accounts.map(account => (
                //adjust for user info
            ))}
        </div>
    )