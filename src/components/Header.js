import React, { Component } from "react";
import styled from "styled-components";
import Banner from "./Banner";
import Navigation from "./Navigation";

/**
 * TODO:
 * - Responsive Header
 * - Hamburger Menu
 */

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
     * @param {object} event - The Event Object
     */
    handleScroll = event => {
        event.pageY > 100
            ? this.setState({ changeBg: true })
            : this.setState({ changeBg: false });
    };

    /**
     * Scrolls down to About section
     * @method
     */
    scrollDown = () => {
        const about = document.getElementById("about");

        window.scrollTo({
            top: about.offsetTop,
            behavior: "smooth"
        });
    };

    render() {
        const { changeBg } = this.state;
        const { scrollDown } = this;

        return (
            <HeaderStyled id="top">
                <CoverBgImg>
                    <Navigation changeBg={changeBg} />
                    <Banner scrollDown={scrollDown} />
                </CoverBgImg>
            </HeaderStyled>
        );
    }
}

export default Header;
