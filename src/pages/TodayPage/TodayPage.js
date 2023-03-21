import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect } from "react";
import styled from "styled-components";

import { BASEURL } from "../../constants/urls";
import { WEEK } from "../../constants/week";

import { TodayHabitCard } from "./TodayHabitCard";

import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { UserContext } from "../../components/App";

export function TodayPage() {
    const { dailyProgress, setDailyProgress, token } = React.useContext(UserContext);
    const [todayHabits, setTodayHabits] = React.useState([]);

    function calculateDailyProgress() {
        const allHabits = todayHabits.length;
        if (allHabits !== 0) {
            const checkedHabits = (todayHabits.filter((d) => d.done === true)).length;
            setDailyProgress(((checkedHabits / allHabits) * 100).toFixed(0));
        }
        
    }

    function loadTodayHabits() {
        axios.get(`${BASEURL}/habits/today`, { headers: { Authorization: `Bearer ${token}` } })
            .then((response) => {
                setTodayHabits(response.data);
            })

            .catch((error) => {
                console.error(error.response.data.message);
            });        
    }

    useEffect(() => {
        calculateDailyProgress();
        loadTodayHabits();        
    }, [todayHabits]);

    return (
        <>
            <Header />
            <TodayHabitsContainer>
                <h2 data-test="today">{WEEK[dayjs().day()].weekDay}, {dayjs().format("DD/MM")}</h2>
                <H3 percentage={dailyProgress} data-test="today-counter">
                    {dailyProgress > 0 ? `${dailyProgress}% dos hábitos concluídos` : "Nenhum hábito concluído ainda"}
                </H3>

                {todayHabits.map((habit) => (
                    <TodayHabitCard
                        id={habit.id}
                        name={habit.name}
                        done={habit.done}
                        currentSequence={habit.currentSequence}
                        highestSequence={habit.highestSequence}
                        loadTodayHabits={loadTodayHabits}
                        setTodayHabits={setTodayHabits}
                    />
                ))}
            </TodayHabitsContainer>
            <Menu />
        </>
    );
}

const TodayHabitsContainer = styled.div`
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
`;

const H3 = styled.h3`
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: ${props => props.percentage > 0 ? "#8FC549" : "#BABABA"};
`;