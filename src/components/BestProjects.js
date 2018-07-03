import React, { Component } from "react";
import styled from "styled-components";
import SectionHeader from "./SectionHeader";
import SectionText from "./SectionText";

const BestProjectsStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 1450px;
`;

const ProjectsGrid = styled.div`
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(3, minmax(150px, 370px));
    grid-gap: 30px;
    grid-template-areas:
        "zero one two"
        "three one four"
        "five six four"
        "five seven eight";
`;

const Project = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-area: ${props => (props.area ? props.area : "")};
    min-height: 250px;
    text-align: center;
    background: ${props => (props.img ? `url(../img/${props.img})` : "#fff")};

    h2 {
        font-family: "Playfair Display", serif;
        font-weight: 700;
        font-size: 24px;
        color: #171717;
        letter-spacing: 0.03em;
        margin: 0;
    }

    h3 {
        font-family: "Work Sans", sans-serif;
        font-weight: 500;
        font-size: 14px;
        text-transform: uppercase;
        color: #171717;
        letter-spacing: 0.025em;
    }
`;

const projects = [
    {
        img: "project-bg-small.png",
        area: "zero"
    },
    {
        img: "project-bg-big.png",
        area: "one"
    },
    {
        img: "project-bg-small.png",
        area: "two"
    },
    {
        img: "project-bg-small.png",
        area: "three"
    },
    {
        img: "project-bg-big.png",
        area: "four"
    },
    {
        img: "project-bg-big.png",
        area: "five"
    },
    {
        img: "",
        area: "six",
        text: {
            title: "Vinil Record",
            subtitle: "Photography"
        }
    },
    {
        img: "project-bg-small.png",
        area: "seven"
    },
    {
        img: "project-bg-small.png",
        area: "eight"
    }
];

class BestProjects extends Component {
    render() {
        return (
            <BestProjectsStyled>
                <SectionHeader>Best Projects</SectionHeader>
                <SectionText>
                    Donec orci sem, pretium ac dolor et, faucibus faucibus
                    mauris. Etiam,pellentesque faucibus. Vestibulum gravida
                    volutpat ipsum non ultrices.
                </SectionText>
                <ProjectsGrid>
                    {projects.map((project, index) => (
                        <Project
                            key={index}
                            area={project.area}
                            img={project.img}
                        >
                            {project.text ? (
                                <React.Fragment>
                                    <h2>{project.text.title}</h2>
                                    <h3>{project.text.subtitle}</h3>
                                </React.Fragment>
                            ) : null}
                        </Project>
                    ))}
                </ProjectsGrid>
            </BestProjectsStyled>
        );
    }
}

export default BestProjects;
