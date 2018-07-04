import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import About from "./About";
import Numbers from "./Numbers";
import BestProjects from "./BestProjects";
import Testimonials from "./Testimonials";
import Clients from "./Clients";
import LatestBlog from "./LatestBlog";
import Contacts from "./Contacts";

const RootWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const HrLine = styled.hr`
    border: 1px solid #ececec;
    margin: 0;
`;

class Root extends Component {
    render() {
        return (
            <RootWrapper>
                <Header />
                <About />
                <Numbers />
                <BestProjects />
                <Testimonials />
                <Clients />
                <LatestBlog />
                <HrLine />
                <Contacts />
            </RootWrapper>
        );
    }
}

export default Root;
