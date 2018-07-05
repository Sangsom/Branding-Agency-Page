import React, { Component } from "react";
import styled from "styled-components";

import signature from "../img/signature.png";
import SectionHeader from "./SectionHeader";
import SectionText from "./SectionText";

const AboutStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 420px;

    p {
        margin-bottom: 50px;
    }
`;

class About extends Component {
    render() {
        return (
            <AboutStyled id="about">
                <SectionHeader>About Our Agency</SectionHeader>
                <SectionText>
                    We are a new design studio based in USA. We have over 20
                    years of combined experience, and know a thing or two about
                    designing websites and mobile apps. Clever use of technology
                    and lean processes enable us to work faster and smarter.
                </SectionText>
                <img src={signature} alt="Signature" />
            </AboutStyled>
        );
    }
}

export default About;
