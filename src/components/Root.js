import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import About from "./About";
import Numbers from "./Numbers";
import BestProjects from "./BestProjects";

const RootWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

class Root extends Component {
    render() {
        return (
            <RootWrapper>
                <Header />
                <About />
                <Numbers />
                <BestProjects />
            </RootWrapper>
        );
    }
}

export default Root;
