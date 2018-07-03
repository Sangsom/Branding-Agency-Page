import React, { Component } from "react";
import styled from "styled-components";
import NumberSection from "./NumberSection";

const NumbersStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    min-height: 260px;
    background-image: url("./img/pattern bg.png");
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

class Numbers extends Component {
    render() {
        return (
            <NumbersStyled>
                {data.map((data, index) => (
                    <NumberSection key={index} data={data} />
                ))}
            </NumbersStyled>
        );
    }
}

export default Numbers;