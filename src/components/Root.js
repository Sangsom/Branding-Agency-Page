import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";

const RootWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

class Root extends Component {
    render() {
        return (
            <RootWrapper>
                <Header />
            </RootWrapper>
        );
    }
}

export default Root;
