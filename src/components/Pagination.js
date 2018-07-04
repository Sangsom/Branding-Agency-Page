import React from "react";
import styled from "styled-components";

const PaginationStyled = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50px;
    height: 20px;
    position: absolute;
    bottom: 50px;

    div {
        width: 7px;
        height: 7px;
        background-color: #5b5b5b;
        border-radius: 50%;

        &:hover {
            cursor: pointer;
        }
    }

    div:nth-child(2) {
	   background-color: 	${props => (props.dark ? " #171717" : " #fff")}
        width: 10px;
        height: 10px;
	}
`;

const Pagination = props => {
    return (
        <PaginationStyled {...props}>
            <div />
            <div />
            <div />
        </PaginationStyled>
    );
};

export default Pagination;
