import React, { Component } from "react";
import styled from "styled-components";
import About from "./About";
import Contacts from "./Contacts";
import LatestBlog from "./LatestBlog";

const HeaderStyled = styled.header`
    height: 100vh;
    min-height: 670px;
    background: url("./img/header-bg.jpg") no-repeat center center fixed;
    background-size: cover;
`;

const CoverBgImg = styled.div`
    position: relative;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
`;

const StickyNavigation = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100px;
    background: ${props => (props.update ? "#fff" : "")};

    div {
        width: 80%;
        margin: auto;
        display: flex;
        height: 100%;
        justify-content: space-between;
        align-items: center;
    }

    img {
        width: 82px;
        max-width: 100%;
        height: auto;
    }
`;
const NavLinks = styled.nav``;
const Link = styled.a`
    font-family: "Work Sans", sans-serif;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 500;
    padding: 6px 14.6px;
    color: ${props =>
        props.update ? "rgb(95, 95, 95)" : "rgb(184, 184, 184)"};

    &:hover {
        color: ${props =>
            props.update ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)"};
    }
    transition: 0.5s;
`;

class Header extends Component {
    state = {
        changeBg: false
    };

    componentDidMount = () => {
        window.addEventListener("scroll", this.handleScroll);
    };

    componentWillUnmount = () => {
        window.removeEventListener("scroll", this.handleScroll);
    };

    /**
     * Handles changeBg state
     * @method
     */
    handleScroll = event => {
        event.pageY > 100
            ? this.setState({ changeBg: true })
            : this.setState({ changeBg: false });
    };

    render() {
        const { changeBg } = this.state;

        return (
            <HeaderStyled>
                <CoverBgImg>
                    <StickyNavigation update={changeBg}>
                        <div>
                            {changeBg ? (
                                <img src="./img/logo-dark.png" alt="Logo" />
                            ) : (
                                <img src="./img/logo-light.png" alt="Logo" />
                            )}

                            <NavLinks>
                                <Link update={changeBg} href="#about">
                                    About
                                </Link>
                                <Link update={changeBg} href="#contact">
                                    Contacts
                                </Link>
                                <Link update={changeBg} href="#portfolio">
                                    Portfolio
                                </Link>
                                <Link update={changeBg} href="#blog">
                                    Blog
                                </Link>
                                <Link update={changeBg} href="#wordpress">
                                    Wordpress theme
                                </Link>
                            </NavLinks>
                        </div>
                    </StickyNavigation>
                </CoverBgImg>
            </HeaderStyled>
        );
    }
}

export default Header;
