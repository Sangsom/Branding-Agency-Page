import React, { Component } from "react";
import styled from "styled-components";
import SectionHeader from "./SectionHeader";
import SectionText from "./SectionText";

const ContactsStyled = styled.div`
    background-color: #f6f6f6;
    display: flex;
    flex-wrap: wrap;
    min-height: 620px;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 50px;
    justify-content: center;
    align-items: center;
`;

const ContactDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10%;
    padding-bottom: 50px;
    flex: 1;

    ${SectionText} {
        max-width: 90%;
        text-align: left;
    }

    p {
        font-family: "Work Sans", sans-serif;
        font-size: 15px;
        color: #5f5f5f;
        margin: 8px;
    }

    b {
        color: #171717;
    }

    @media (max-width: 400px) {
        padding-left: 0;
        text-align: center;

        ${SectionText} {
            text-align: center;
        }
    }
`;

const ContactForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 2;
`;

const Form = styled.form`
    display: grid;
    grid-template-areas:
        "name email"
        "title title"
        "comment comment";
    grid-gap: 30px;

    @media (max-width: 500px) {
        width: 100%;
        grid-template-areas:
            "name name"
            "email email"
            "title title"
            "comment comment";
    }
`;
const Input = styled.input`
    font-family: "Work Sans", sans-serif;
    font-size: 14px;
    color: #858585;
    padding: 15px 20px;
    border: none;
    grid-area: ${props => (props.area ? props.area : "")};
`;

const TextArea = styled.textarea`
    font-family: "Work Sans", sans-serif;
    font-size: 14px;
    color: #858585;
    padding: 15px 20px;
    border: none;
    grid-area: ${props => (props.area ? props.area : "")};
`;

const SendButton = styled.button`
    font-family: "Work Sans", sans-serif;
    font-weight: 500;
    color: #ffffff;
    font-size: 14px;
    width: fit-content;
    background-color: #252525;
    padding: 15px 30px;
    text-transform: uppercase;
    letter-spacing: 0.025em;
    border: none;

    &:hover {
        cursor: pointer;
    }
`;

class Contacts extends Component {
    handleSubmit = e => {
        e.preventDefault();
    };

    render() {
        return (
            <ContactsStyled>
                <ContactDetails>
                    <SectionHeader>Contact Info:</SectionHeader>
                    <SectionText>
                        Praesent interdum congue mauris, et fringilla lacus pel
                        vitae. Quisque nisl mauris, aliquam eu ultrices vel,
                        conse vitae sapien at imperdiet risus. Quisque cursus
                        risus id. fermentum, in auctor quam consectetur.
                    </SectionText>
                    <p>
                        <b>Address:</b> 10111 Santa Monica Boulevard, LA
                    </p>
                    <p>
                        <b>Phone:</b> +44 987 065 908
                    </p>
                    <p>
                        <b>Email:</b> info@Example.com
                    </p>
                    <p>
                        <b>Fax:</b> +44 987 065 909
                    </p>
                </ContactDetails>
                <ContactForm>
                    <Form action="" onSubmit={this.handleSubmit}>
                        <Input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            area="name"
                        />
                        <Input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            area="email"
                        />
                        <Input
                            type="text"
                            name="title"
                            placeholder="Your Title"
                            area="title"
                        />
                        <TextArea
                            name="comment"
                            placeholder="Your Comment"
                            rows="8"
                            area="comment"
                        />
                        <SendButton>Send Message</SendButton>
                    </Form>
                </ContactForm>
            </ContactsStyled>
        );
    }
}

export default Contacts;
