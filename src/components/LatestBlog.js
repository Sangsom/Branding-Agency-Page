import React, { Component } from "react";
import SectionHeader from "./SectionHeader";
import SectionText from "./SectionText";
import styled from "styled-components";
import Pagination from "./Pagination";

const LatestBlogStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 860px;
    position: relative;
    background-color: #f6f6f6;
`;

const articles = [
    {
        img: "",
        category: "nature",
        title: "Something I need to tell you",
        text:
            "Mauris sed odio tincidunt, volutpat augue, commodo dui.Phasellus hendrerit condi ntum vehicula.",
        date: "May 16, 2016"
    },
    {
        img: "",
        category: "branding",
        title: "Are you doing The Right Way?",
        text:
            "Curabitur et diam ut magna pulvinar euis mod.Sed metus purus, ornare id moltie,	laoreet vitae magna.",
        date: "May 28, 2016"
    },
    {
        img: "",
        category: "design",
        title: "Why you should Always First",
        text:
            "Mauris sed odio tincidunt, volutpat augue, commodo dui.Phasellus hendrerit condi ntum vehicula.",
        date: "June 01, 2016"
    }
];

const Articles = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 370px);
    grid-gap: 30px;
`;
const BlogItem = styled.article`
    box-shadow: 1px 1px 4px -2px rgba(76, 76, 76, 0.3);
`;

const BlogImage = styled.figure`
    position: relative;
    margin: 0;
`;

const Img = styled.img``;

const Category = styled.figcaption`
    display: inline-block;
    font-family: "Work Sans", sans-serif;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    background: #252525;
    color: #fff;
    padding: 10px 20px;
    position: absolute;
    bottom: 10px;
    left: 10px;
`;

const BlogContent = styled.div`
    padding: 10px 25px;
`;

const Title = styled.h2`
    font-family: "Playfair Display", serif;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.03em;
    color: #171717;
`;
const Date = styled.p`
    font-family: "Work Sans", sans-serif;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.025em;
    color: #171717;
    text-transform: uppercase;
`;
const Text = styled.p`
    font-family: "Work Sans", sans-serif;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0.005em;
    color: #5f5f5f;
`;

class LatestBlog extends Component {
    render() {
        return (
            <LatestBlogStyled>
                <SectionHeader>Latest Blog</SectionHeader>
                <SectionText>
                    Donec orci sem, pretium ac dolor et, faucibus faucibus
                    mauris. Etiam,pellentesque faucibus. Vestibulum gravida
                    volutpat ipsum non ultrices.
                </SectionText>

                <Articles>
                    {articles.map((article, index) => (
                        <BlogItem key={index}>
                            <BlogImage>
                                <Img src="./img/project-bg-small.png" alt="" />
                                <Category>{article.category}</Category>
                            </BlogImage>
                            <BlogContent>
                                <Title>{article.title}</Title>
                                <Date>{article.date}</Date>
                                <Text>{article.text}</Text>
                            </BlogContent>
                        </BlogItem>
                    ))}
                </Articles>
                <Pagination dark />
            </LatestBlogStyled>
        );
    }
}

export default LatestBlog;
