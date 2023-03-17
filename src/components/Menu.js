import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { Link } from "react-router-dom";

import styled from "styled-components";

export function Menu() {
    const percentage = 66;

    return (
        <Container data-test="menu">
            <Link to="/habitos">
                <button>Hábitos</button>
            </Link>
            <ProgressBar>
                <Link to="/hoje">
                    <CircularProgressbar 
                    value={percentage} 
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
            <Link to="/historico">
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