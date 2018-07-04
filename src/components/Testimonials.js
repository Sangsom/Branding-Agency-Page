import React, { Component } from "react";
import styled from "styled-components";
import Pagination from "./Pagination";

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
                <Pagination light />
            </TestimonialsStyled>
        );
    }
}

export default Testimonials;
