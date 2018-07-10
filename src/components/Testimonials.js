import React, { Component } from "react";
import styled from "styled-components";
import Pagination from "./Pagination";

const TestimonialsStyled = styled.article`
    min-height: 500px;
    background: url("./img/pattern bg1.png") repeat center center fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    position: relative;
`;

const Quote = styled.q`
    font-family: "Playfair Display", serif;
    font-size: 24px;
    font-weight: 400;
    font-style: italic;
    letter-spacing: 0.025em;
    text-align: center;
    max-width: 700px;
    padding-bottom: 20px;
    margin: 0 50px;
    transition: 0.5s;

    @media (max-width: 400px) {
        font-size: 18px;
    }

    &::before {
        margin-right: 10px;
    }
    &::after {
        margin-left: 10px;
    }
`;
const Author = styled.p`
    font-family: "Work Sans", sans-serif;
    font-weight: 500;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.025em;
`;

const quotesList = [
    {
        quote:
            "Outstanding job and exceeded all expectations. It was a                    pleasure to work with them on a sizable first project and am                    looking forward to start the next one asap.",
        author: "Michael Hopkins"
    },
    {
        quote:
            "If you're in the luckiest 1% of humanity, you owe it to the rest of humanity to think about the other 99%.",
        author: "Warren Buffet"
    },
    {
        quote:
            "I try to make myself happy because I know that if I'm not happy, my colleagues are not happy and my shareholders are not happy and my customers are not happy.",
        author: "Jack Ma"
    }
];

class Testimonials extends Component {
    state = {
        currentQuote: 1,
        maxQuotes: 0,
        timerID: null
    };

    componentDidMount() {
        this.setState({
            maxQuotes: quotesList.length,
            timerID: setInterval(() => this.next(), 5000)
        });
    }

    /**
     * Select previous quote
     * @method
     */
    prev = () => {
        const { currentQuote } = this.state;
        if (currentQuote - 1 > 0) {
            this.setState({ currentQuote: currentQuote - 1 });
        } else {
            this.setState({ currentQuote: 2 });
        }
    };

    /**
     * Select next quote
     * @method
     */
    next = () => {
        const { currentQuote, maxQuotes } = this.state;
        if (currentQuote + 1 < maxQuotes) {
            this.setState({ currentQuote: currentQuote + 1 });
        } else {
            this.setState({ currentQuote: 0 });
        }
    };

    render() {
        const { currentQuote } = this.state;
        const showQuote = quotesList.filter(
            (quote, index) => (currentQuote === index ? quote : "")
        );

        return (
            <TestimonialsStyled>
                {showQuote.map((quote, index) => (
                    <React.Fragment key={index}>
                        <Quote>{quote.quote}</Quote>
                        <Author>{quote.author}</Author>
                    </React.Fragment>
                ))}

                <Pagination
                    handlePrev={this.prev}
                    handleNext={this.next}
                    light
                />
            </TestimonialsStyled>
        );
    }
}

export default Testimonials;
