import React from "react";
import styled from "styled-components";
import NumberSection from "./NumberSection";

const NumbersStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    min-height: 260px;
    background: url("./img/pattern bg.png") repeat center center fixed;
    transition: 0.5s;

    @media (max-width: 568px) {
        justify-content: flex-start;
        padding-left: 5%;
    }
`;

const data = [
    {
        icon: "portfolio.svg",
        name: "projects completed",
        count: 548
    },
    {
        icon: "clock.svg",
        name: "working hours",
        count: 1465
    },
    {
        icon: "star.svg",
        name: "positive feedbacks",
        count: 612
    },
    {
        icon: "like.svg",
        name: "happy clients",
        count: 735
    }
];

const Numbers = () => {
    return (
        <NumbersStyled>
            {data.map((data, index) => (
                <NumberSection key={index} data={data} />
            ))}
        </NumbersStyled>
    );
};

export default Numbers;
