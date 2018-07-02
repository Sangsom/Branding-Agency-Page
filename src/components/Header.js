import React, { Component } from "react";
import styled from "styled-components";
import logo from "../img/logo.png";
import Banner from "./Banner";

const HeaderStyled = styled.div`
    display: flex;
    min-height: 670px;
    background-color: #636363;
    flex-direction: column;
`;

const HeaderMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    padding: 0 10%;
`;

const Logo = styled.div``;

const Hamburger = styled.div`
    display: inline-block;

    & div {
        width: 35px;
        height: 3px;
        background-color: #fff;
        margin: 6px 0;
    }
`;

class Header extends Component {
    render() {
        return (
            <HeaderStyled>
                <HeaderMenu>
                    <Logo>
                        <img src={logo} alt="" />
                    </Logo>
                    <Hamburger>
                        <div />
                        <div />
                        <div />
                    </Hamburger>
                </HeaderMenu>
                <Banner />
            </HeaderStyled>
        );
    }
}

export default Header;
