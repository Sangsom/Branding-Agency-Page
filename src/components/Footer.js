import React, { Component } from "react";
import styled from "styled-components";

const FooterStyled = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 480px;
    background-color: #0c0c0c;
    color: #fff;
    position: relative;
`;

const FooterContent = styled.div`
    display: grid;
    width: 100%;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(100px, 400px));
    grid-gap: 30px;
    padding-bottom: 50px;
`;

const BoxHeader = styled.h2`
    font-family: "Playfair Display", serif;
    font-size: 20px;
    color: #fff;
    letter-spacing: 0.025em;
`;

const About = styled.article`
    height: 270px;
    padding: 10px;

    p {
        font-family: "Playfair Display", serif;
        font-size: 15px;
        letter-spacing: 0.025em;
        font-weight: 400;
        color: #e9e9e9;
    }
`;
const Tweets = styled.article`
    height: 270px;
    padding: 10px;
`;
const Instagram = styled.article`
    height: 270px;
    padding: 10px;
`;
const SocialLinks = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 50px;
`;
const SocialIcon = styled.img`
    max-width: 100%;
    height: auto;
    margin-right: 15px;

    &:hover {
        cursor: pointer;
    }
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;
const ListItem = styled.li`
    font-family: "Work Sans", sans-serif;
    font-size: 15px;
    font-weight: 400;
    color: #e9e9e9;
    display: flex;
    margin-bottom: 20px;

    &::before {
        content: url("./img/twitter.png");
        margin-right: 15px;
        position: relative;
        top: 4px;
    }
`;

const InstagramWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 85px);
    grid-gap: 10px;
`;
const InstagramImg = styled.img`
    width: 100%;
    height: 85px;

    &:hover {
        cursor: pointer;
    }
`;

const CopyRight = styled.div`
    max-height: 70px;
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgba(37, 37, 37, 1);
    color: #e9e9e9;
`;

const socialLinks = [
    {
        link: "",
        name: "Facebook",
        icon: "facebook.png"
    },
    {
        link: "",
        name: "Twitter",
        icon: "twitter.png"
    },
    {
        link: "",
        name: "Google Plus",
        icon: "google plus.png"
    },
    {
        link: "",
        name: "Behance",
        icon: "behance.png"
    },
    {
        link: "",
        name: "Pinterest",
        icon: "pinterest.png"
    },
    {
        link: "",
        name: "Instagram",
        icon: "instagram.png"
    }
];

class Footer extends Component {
    getYear = () => {
        return new Date().getFullYear();
    };

    render() {
        return (
            <FooterStyled>
                <FooterContent>
                    <About>
                        <BoxHeader>About Us</BoxHeader>
                        <p>
                            Aenean mattis augue in arcu tempor bibendum. Nam
                            euismod facilisis magna, quis pharetra turpis
                            molestie eu. Integer feugiat arcu sit amet leo
                            ullamcorper feugiat efficitur.
                        </p>
                        <SocialLinks>
                            {socialLinks.map((link, index) => (
                                <SocialIcon
                                    key={index}
                                    src={`./img/${link.icon}`}
                                />
                            ))}
                        </SocialLinks>
                    </About>
                    <Tweets>
                        <BoxHeader>Latest Twits</BoxHeader>
                        <List>
                            <ListItem>
                                Duis eget finibus nibh. Vivamus sagittis
                                vulputate risus ac tincidunt.
                            </ListItem>
                            <ListItem>
                                Nam semper tortor sit amet arcu malesu ada, a
                                sagittis tellus facilisis.
                            </ListItem>
                            <ListItem>
                                Etiam cursus, tortor id pretium tincidunt, justo
                                leo porta magna.
                            </ListItem>
                        </List>
                    </Tweets>
                    <Instagram>
                        <BoxHeader>Instagram</BoxHeader>
                        <InstagramWrapper>
                            <InstagramImg src="./img/instagram1.jpg" />
                            <InstagramImg src="./img/instagram2.jpg" />
                            <InstagramImg src="./img/instagram3.jpg" />
                            <InstagramImg src="./img/instagram4.jpg" />
                            <InstagramImg src="./img/instagram5.jpg" />
                            <InstagramImg src="./img/instagram6.jpg" />
                            <InstagramImg src="./img/instagram7.jpg" />
                            <InstagramImg src="./img/instagram8.jpg" />
                        </InstagramWrapper>
                    </Instagram>
                </FooterContent>
                <CopyRight>
                    <p>&copy; {this.getYear()}. Created by Rinalds Domanovs.</p>
                </CopyRight>
            </FooterStyled>
        );
    }
}

export default Footer;
