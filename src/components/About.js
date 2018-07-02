import React, { Component } from "react";
import styled from "styled-components";

import signature from "../img/signature.png";

const AboutStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 420px;
    text-align: center;

    p {
        max-width: 50%;
        margin-bottom: 50px;
    }
`;

class About extends Component {
    render() {
        return (
            <AboutStyled>
                <h2>About Our Agency</h2>
                <p>
                    We are a new design studio based in USA. We have over 20
                    years of combined experience, and know a thing or two about
                    designing websites and mobile apps. Clever use of technology
                    and lean processes enable us to work faster and smarter.
                </p>
                <img src={signature} alt="Signature" />
            </AboutStyled>
        );
    }
}

export default About;
