import React, { Component } from "react";
import styled from "styled-components";

const BannerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
`;

const BannerText = styled.div`
    text-align: center;
    color: #fff;
    transform: translateY(-50px);

    h2 {
        font-family: "Work Sans", sans-serif;
        font-weight: 700;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 0.2em;
    }

    h1,
    h3 {
        font-family: "Playfair Display", serif;
        font-weight: 700;
        font-size: 48px;
        margin: 0;

        @media (max-width: 700px) {
            font-size: 30px;
        }
    }

    h3 {
        font-weight: 400;
        font-style: italic;
    }
`;

const Arrow = styled.div`
    position: absolute;
    bottom: 75px;
    width: 50px;
    height: 50px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(90deg);
    color: rgba(255, 255, 255, 0.4);
    transition: 0.5s;

    &:hover {
        cursor: pointer;
        color: rgba(255, 255, 255, 0.8);
        border: 1px solid rgba(255, 255, 255, 0.8);
    }

    span {
        font-size: 20px;
        padding: 0;
        margin: 0;
        line-height: 0;
        transform: translateY(-2px);
    }
`;

class Banner extends Component {
    render() {
        return (
            <BannerStyled>
                <BannerText>
                    <h2>New branding agency</h2>
                    <h1>We are about to change the way</h1>
                    <h3>you publish on web</h3>
                </BannerText>

                <Arrow onClick={this.props.scrollDown}>
                    <span>></span>
                </Arrow>
            </BannerStyled>
        );
    }
}

export default Banner;
