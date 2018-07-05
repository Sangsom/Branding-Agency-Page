import React from "react";
import styled from "styled-components";

import SectionHeader from "./SectionHeader";
import SectionText from "./SectionText";

const AboutStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 420px;
    padding: 50px 0;

    p {
        margin-bottom: 50px;
    }
`;

const About = () => {
    return (
        <AboutStyled id="about">
            <SectionHeader>About Our Agency</SectionHeader>
            <SectionText>
                We are a new design studio based in USA. We have over 20 years
                of combined experience, and know a thing or two about designing
                websites and mobile apps. Clever use of technology and lean
                processes enable us to work faster and smarter.
            </SectionText>
            <img src="./img/signature.png" alt="Signature" />
        </AboutStyled>
    );
};

export default About;
