import React from 'react';

import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { UserContext } from "../../components/App";

export function TodayPage() {
    const { userImage, setUserImage, dailyProgress, setDailyProgress } = React.useContext(UserContext);

    return (
        <>
            <Header />
            <Menu />
        </>
    );
}