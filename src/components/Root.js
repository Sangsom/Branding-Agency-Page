import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import About from "./About";

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
            </RootWrapper>
        );
    }
}

export default Root;
