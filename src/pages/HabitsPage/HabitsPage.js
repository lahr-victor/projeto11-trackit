import axios from 'axios';
import React, { useEffect } from 'react';

import { BASEURL } from "../../constants/urls";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { UserContext } from "../../components/App";

export function HabitsPage() {
    const { dailyProgress, setDailyProgress, token } = React.useContext(UserContext);

    useEffect(() => {
        axios.get(`${BASEURL}/habits`, { headers: { Authorization: `Bearer ${token}` } })
            .then((response) => {
                console.log(response.data);
            })

            .catch((error) => {
                console.error(error.response.data.message);
            });
    }, [token]);

    return (
        <>
            <Header />
            <Menu />
        </>
    );
}