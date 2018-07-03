import React, { Component } from "react";
import styled from "styled-components";

const TestimonialsStyled = styled.article`
    min-height: 500px;
    background: url("./img/pattern bg1.png") repeat center center fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    position: relative;

    q {
        font-family: "Playfair Display", serif;
        font-size: 24px;
        font-weight: 400;
        font-style: italic;
        letter-spacing: 0.025em;
        text-align: center;
        max-width: 40%;
        padding-bottom: 20px;
    }
    q::before {
        margin-right: 10px;
    }
    q::after {
        margin-left: 10px;
    }
    p {
        font-family: "Work Sans", sans-serif;
        font-weight: 500;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 0.025em;
    }
`;

const Pagination = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50px;
    height: 20px;
    position: absolute;
    bottom: 50px;

    div {
        width: 7px;
        height: 7px;
        background-color: #5b5b5b;
        border-radius: 50%;

        &:hover {
            cursor: pointer;
        }
    }

    div:nth-child(2) {
        background: #fff;
        width: 10px;
        height: 10px;
    }
`;

class Testimonials extends Component {
    render() {
        return (
            <TestimonialsStyled>
                <q>
                    Outstanding job and exceeded all expectations. It was a
                    pleasure to work with them on a sizable first project and am
                    looking forward to start the next one asap.
                </q>
                <p>Michael Hopkins</p>
                <Pagination>
                    <div />
                    <div />
                    <div />
                </Pagination>
            </TestimonialsStyled>
        );
    }
}

export default Testimonials;
