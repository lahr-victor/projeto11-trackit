import React from 'react';

import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { UserContext } from "../../components/App";

import styled from "styled-components";

export function HistoryPage() {
    const { dailyProgress, setDailyProgress } = React.useContext(UserContext);

    return (
        <>
            <Header />
            <Container>
                <h2>Histórico</h2>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </Container>
            <Menu />
        </>
    );
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    padding-top: 90px;
    padding-bottom: 105px;
    padding-right: 15px;
    padding-left: 15px;
    background-color: #E5E5E5;

    h2 {
        height: 35px;
        font-weight: 400;
        font-size: 22px;
        line-height: 28px;
        color: #126BA5;
        display: flex;
        align-items: center;
    }

    p {
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
        margin-top: 18px;
    }
`