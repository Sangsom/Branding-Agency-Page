import styled from "styled-components";

const SectionHeader = styled.h2`
    font-family: "Playfair Display", serif;
    font-size: 38px;
    font-weight: 700;
    letter-spacing: 0.025em;
    color: #171717;
    transition: 0.5s;

    @media (max-width: 700px) {
        font-size: 28px;
    }
`;

export default SectionHeader;
