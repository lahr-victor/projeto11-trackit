import React from "react";
import styled from "styled-components";

import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { Link } from "react-router-dom";

import { UserContext } from "./App";

export function Menu() {
    const { dailyProgress } = React.useContext(UserContext);

    return (
        <Container data-test="menu">
            <Link to="/habitos" data-test="habit-link">
                <button>Hábitos</button>
            </Link>
            <ProgressBar>
                <Link to="/hoje" data-test="today-link">
                    <CircularProgressbar 
                    value={dailyProgress} 
                    text="Hoje"
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#52B6FF",
                        textColor: "#FFFFFF",
                        pathColor: "#FFFFFF",
                        trailColor: "transparent"
                    })}
                    />
                </Link>
            </ProgressBar>
            <Link to="/historico" data-test="history-link">
                <button>Histórico</button>
            </Link>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 70px;
    padding: 20px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0px;
    left: 0px;

    button {
        padding: 0px;
        background-color: inherit;
        border: none;
        outline: none;
        font-weight: 400;
        font-size: 18px;
        color: #52B6FF;
        cursor: pointer;
    }
`;

const ProgressBar = styled.div`
    width: 91px;
    height: 91px;
    margin-bottom: 70px;
`;