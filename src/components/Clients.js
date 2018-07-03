import React, { Component } from "react";
import styled from "styled-components";

const ClientsStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    min-height: 200px;
`;

const Logo = styled.img`
    max-width: 100%;
    height: auto;
    margin: 25px 20px;
`;

const clientsList = [
    {
        name: "Vintage Handmade",
        path: "client1.png"
    },
    {
        name: "Mountain",
        path: "client2.png"
    },
    {
        name: "Authentic collection",
        path: "client3.png"
    },
    {
        name: "Mountainbike",
        path: "client4.png"
    },
    {
        name: "Vintage",
        path: "client5.png"
    }
];

class Clients extends Component {
    render() {
        return (
            <ClientsStyled>
                {clientsList.map((client, index) => (
                    <Logo
                        key={index}
                        src={`./img/${client.path}`}
                        alt={client.name}
                    />
                ))}
            </ClientsStyled>
        );
    }
}

export default Clients;
