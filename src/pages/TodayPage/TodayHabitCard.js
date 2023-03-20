import axios from "axios";
import React from "react";
import styled from "styled-components";

import { BASEURL } from "../../constants/urls";

import { UserContext } from "../../components/App";

import { BsCheck } from "react-icons/bs";

export function TodayHabitCard({ id, name, done, currentSequence, highestSequence, loadTodayHabits, setTodayHabits }) {
    const { token } = React.useContext(UserContext);

    function checkHabit(id, done) {
        if (!done) {
            axios.post(`${BASEURL}/habits/${id}/check`, {}, { headers: { Authorization: `Bearer ${token}` } })
                .then((response) => {
                    loadTodayHabits();
                })

                .catch((error) => {
                    console.error(error.response.data.message);
                });
        } else {
            axios.post(`${BASEURL}/habits/${id}/uncheck`, {}, { headers: { Authorization: `Bearer ${token}` } })
                .then((response) => {
                    loadTodayHabits();
                })

                .catch((error) => {
                    console.error(error.response.data.message);
                });
        }
    }

    return (
        <TodayHabitContainer data-test="today-habit-container">
            <TitleContainer>
                <h4 data-test="today-habit-name">{name}</h4>
                <p data-test="today-habit-sequence">Sequência atual: {currentSequence}</p>
                <p data-test="today-habit-record">Seu recorde: {highestSequence}</p>
            </TitleContainer>
            <CheckButton isChecked={done} onClick={() => checkHabit(id, done)} data-test="today-habit-check-btn">
                <BsCheck
                    fontSize="70px"
                    color="#FFFFFF"
                />
            </CheckButton>
        </TodayHabitContainer>
    );
}

const TodayHabitContainer = styled.div`
    width: 100%;
    padding: 18px;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    margin-top: 18px;
    border-radius: 5px;
`;

const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    h4 {
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #666666;
        margin-bottom: 10px;
    }

    p {
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #666666;
    }
`;

const CheckButton = styled.div`
    width: 70px;
    height: 70px;
    background-color: ${props => props.isChecked ? "#8FC549" : "#EBEBEB"};  
    border: ${props => props.isChecked ? "none" : "1px solid #E7E7E7"};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;