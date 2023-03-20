import axios from "axios";
import React from "react";
import styled from "styled-components";

import { BASEURL } from "../../constants/urls";
import { WEEK } from "../../constants/week";

import { UserContext } from "../../components/App";

import { BsTrash } from "react-icons/bs"

export function HabitCard({ id, habitName, selectedDays, loadHabits, setHabits }) {
    const { token } = React.useContext(UserContext);

    function deleteHabit(id) {
        if (window.confirm(`Deseja excluir o hábito: ${habitName}?`)) {
            axios.delete(`${BASEURL}/habits/${id}`, { headers: { Authorization: `Bearer ${token}` } })
                .then((response) => {
                    loadHabits();
                })

                .catch((error) => {
                    alert(error.response.data.message);
                });
        }
    }

    return (
        <HabitContainer data-test="habit-container">
            <TitleContainer>
                <h3 data-test="habit-name">{habitName}</h3>
                <BsTrash
                    fontSize="18px"
                    color="#666666"
                    cursor="pointer"
                    onClick={() => deleteHabit(id)}
                    data-test="habit-delete-btn"
                />
            </TitleContainer>

            <WeekContainer>
                {WEEK.map((day) => (
                    <DayButton
                        name={day.weekDay}
                        type="button"
                        value={day.value}
                        isSelected={selectedDays.includes(day.value)}
                        disabled={true}
                        data-test="habit-day"
                    >
                        {day.letter}
                    </DayButton>
                ))}
            </WeekContainer>
        </HabitContainer>
    );
}

const HabitContainer = styled.div`
    width: 100%;
    padding: 18px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    margin-top: 18px;
    border-radius: 5px;
`;

const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #666666;
    }
`;

const WeekContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: left;
    margin-top: 8px;
`;

const DayButton = styled.button`
    width: 30px;
    height: 30px;
    background-color: ${props => props.isSelected ? "#CFCFCF" : "#FFFFFF"};
    font-weight: 400;
    font-size: 20px;
    color: ${props => props.isSelected ? "#FFFFFF" : "#DBDBDB"};
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 4px;

    &:disabled {
        cursor: initial;
    }
`;