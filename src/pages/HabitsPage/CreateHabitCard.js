import axios from "axios";
import React from "react";
import styled from "styled-components";

import { BASEURL } from "../../constants/urls";
import { WEEK } from "../../constants/week";

import { Loading } from "../../components/Loading";
import { UserContext } from "../../components/App";

export function CreateHabitCard({ setIsCreateHabitVisible }) {
    const { token } = React.useContext(UserContext);
    const [selectedDays, setSelectedDays] = React.useState([]);
    const [habitName, setHabitName] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);

    console.log(selectedDays);
    console.log(habitName);

    function createHabit(event) {
        event.preventDefault();
        setIsLoading(true);
        const body = { name: habitName, days: selectedDays };

        axios.post(`${BASEURL}/habits`, body, { headers: { Authorization: `Bearer ${token}` } })
            .then((response) => {
                console.log(response.data);
                setIsCreateHabitVisible(false);
            })

            .catch((error) => {
                alert(error.response.data.message);
                setIsLoading(false);
            });
    }

    function selectDay(day) {
        const isSelected = selectedDays.includes(day);

        if (isSelected) {
            const newList = selectedDays.filter((d) => d !== day)
            setSelectedDays(newList);
        } else {
            setSelectedDays([...selectedDays, day]);
        }
    }

    

    return (
        <CreateHabitContainer onSubmit={createHabit}>
            <input
                name="name"
                type="text"
                placeholder="nome do hábito"
                value={habitName}
                onChange={event => setHabitName(event.target.value)}
                disabled={isLoading}
            />

            <WeekContainer>
                {WEEK.map((day) => (
                    <DayButton
                        name={day.weekDay}
                        type="button"
                        value={day.value}
                        onClick={event => selectDay(parseInt(event.target.value))}
                        isSelected={selectedDays.includes(parseInt(day.value))}
                        disabled={isLoading}
                    >
                        {day.letter}
                    </DayButton>
                ))}
            </WeekContainer>

            <ButtonContainer>
                <CancelButton
                    type="button"
                    onClick={() => setIsCreateHabitVisible(false)}
                    disabled={isLoading}
                >
                    Cancelar
                </CancelButton>
                <ConfirmButton
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? <Loading /> : "Salvar"}
                </ConfirmButton>
            </ButtonContainer>
        </CreateHabitContainer>
    );
}

const CreateHabitContainer = styled.form`
    width: 100%;
    padding: 18px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    margin-top: 18px;
    border-radius: 5px;

    input {
        width: 100%;
        height: 45px;
        padding: 10px;
        background-color: #FFFFFF;
        font-weight: 400;
        font-size: 20px;
        color: #666666;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        outline: none;

        &::placeholder {
            color: #D4D4D4;
            opacity: 1;
        }

        &:disabled {
            background-color: #F2F2F2;
            color: #B3B3B3;
        }
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

const ButtonContainer = styled.div`
    display: flex;
    justify-content: right;
    margin-top: 30px;
`;

const CancelButton = styled.button`
    width: 85px;
    height: 35px;
    background-color: #FFFFFF;
    font-weight: 400;
    font-size: 16px;
    color: #52B6FF;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
    
    &:disabled {
        opacity: 0.7;
        cursor: initial;
    }
`;

const ConfirmButton = styled.button`
    width: 85px;
    height: 35px;
    background-color: #52B6FF;
    font-weight: 400;
    font-size: 16px;
    color: #FFFFFF;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:disabled {
        opacity: 0.7;
        cursor: initial;
    }
`;