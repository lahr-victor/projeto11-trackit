import styled from "styled-components";

import { WEEK } from "../../constants/week";

import { BsTrash } from "react-icons/bs"

export function HabitCard({ habitName, selectedDays }) {
    return (
        <HabitContainer>
            <TitleContainer>
                <h3>{habitName}</h3>
                <BsTrash 
                    font-size="16px"
                    color="#666666"    
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