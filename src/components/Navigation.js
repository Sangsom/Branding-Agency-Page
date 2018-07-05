import React, { Component } from "react";
import styled, {
    __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS
} from "styled-components";

const StickyNavigation = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100px;
    background: ${props => (props.update ? "#fff" : "")};
    z-index: 999;
    transition: 0.5s;

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
const NavLinks = styled.nav`
    @media (max-width: 900px) {
        display: none;
    }
`;

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

const LogoLink = styled.a``;

const links = [
    {
        href: "#about",
        name: "About"
    },
    {
        href: "#contact",
        name: "Contact"
    },
    {
        href: "#portfolio",
        name: "Portfolio"
    },
    {
        href: "#blog",
        name: "Blog"
    },
    {
        href: "#worpress",
        name: "Wordpress Theme"
    }
];

class Navigation extends Component {
    render() {
        const { changeBg } = this.props;

        return (
            <StickyNavigation update={changeBg}>
                <div>
                    <LogoLink href="#top">
                        {changeBg ? (
                            <img src="./img/logo-dark.png" alt="Logo" />
                        ) : (
                            <img src="./img/logo-light.png" alt="Logo" />
                        )}
                    </LogoLink>

                    <NavLinks>
                        {links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                update={changeBg}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </NavLinks>
                </div>
            </StickyNavigation>
        );
    }
}

export default Navigation;
