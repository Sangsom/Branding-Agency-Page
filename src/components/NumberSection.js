import React, { Component } from "react";
import styled from "styled-components";

const NumberSectionStyled = styled.div`
    display: flex;
    align-items: center;
    min-width: 230px;
    height: 100px;
    padding: 20px;
    color: #fff;
`;

const Img = styled.img`
    width: 50px;
    max-width: 100%;
    padding: 20px;
`;

const TextContainer = styled.div`
    font-weight: 500;
    font-size: 14px;
    text-transform: uppercase;

    p {
        margin: 0;
    }
`;

const Count = styled.p`
    font-weight: 400;
    font-size: 18px;
    padding-bottom: 5px;
`;

class NumberSection extends Component {
    render() {
        const { icon, name, count } = this.props.data;
        const img = require(`../img/${icon}`);

        return (
            <NumberSectionStyled>
                <Img src={img} alt={name} />
                <TextContainer>
                    <Count>{count}</Count>
                    <p>{name}</p>
                </TextContainer>
            </NumberSectionStyled>
        );
    }
}

export default NumberSection;
