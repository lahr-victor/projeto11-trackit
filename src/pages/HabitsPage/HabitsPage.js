import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";

import { BASEURL } from "../../constants/urls";

import { CreateHabitCard } from './CreateHabitCard';
import { HabitCard } from "./HabitCard";

import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { UserContext } from "../../components/App";

export function HabitsPage() {
    const { dailyProgress, setDailyProgress, token } = React.useContext(UserContext);
    const [isCreateHabitVisible, setIsCreateHabitVisible] = React.useState(false);
    const [habits, setHabits] = React.useState([]);

    function loadHabits() {
        axios.get(`${BASEURL}/habits`, { headers: { Authorization: `Bearer ${token}` } })
            .then((response) => {
                setHabits(response.data);
            })

            .catch((error) => {
                console.error(error.response.data.message);
            });
    }

    useEffect(() => {
        loadHabits();
    }, [token]);

    return (
        <>
            <Header />
            <HabitsContainer>
                <TitleContainer>
                    <h2>Hábitos</h2>
                    <CreateButton onClick={() => setIsCreateHabitVisible(true)}>+</CreateButton>
                </TitleContainer>

                {isCreateHabitVisible &&
                    <CreateHabitCard
                        setIsCreateHabitVisible={setIsCreateHabitVisible}
                        loadHabits={loadHabits}
                        setHabits={setHabits}
                    />
                }

                {habits.length === 0
                    ? <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                    : habits.map((habit) => (
                        <HabitCard
                            id={habit.id}
                            habitName={habit.name}
                            selectedDays={habit.days}
                            loadHabits={loadHabits}
                            setHabits={setHabits}
                        />
                    ))}
            </HabitsContainer>
            <Menu />
        </>
    );
}

const HabitsContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    padding-top: 90px;
    padding-bottom: 105px;
    padding-right: 15px;
    padding-left: 15px;
    background-color: #E5E5E5;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
        margin-top: 18px;
        align-self: flex-start;
    }
`;

const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
        font-weight: 400;
        font-size: 22px;
        line-height: 28px;
        color: #126BA5;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
`;

const CreateButton = styled.button`
    width: 40px;
    height: 35px;
    background-color: #52B6FF;
    font-weight: 400;
    font-size: 26px;
    color: #FFFFFF;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;