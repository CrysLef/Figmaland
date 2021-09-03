import styled from "styled-components";

export const Box = styled.div`
    background-color: #fff;
    width: 28rem;
    height: 50rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 5rem auto;
    padding: 4rem 0;
    overflow: hidden;
    border-radius: 1rem;

    &:last-child {
        margin-bottom: 15.1rem;
    }

    img {
        max-width: 23.8rem;
        height: 100%;
        margin: 5.7rem auto;
    }

    @media (min-width: 1020px) {
        &:nth-child(1) {
            margin-right: -50rem;
        }
    }
`

export const Title = styled.h2`
    font-size: 1.4rem;
    color: #000;
    text-align: center;
    margin-bottom: 2rem;
`

export const Subtitle = styled.p`
    color: #5C5C5C;
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 6.7rem;
    padding: 0 4.2rem;
`