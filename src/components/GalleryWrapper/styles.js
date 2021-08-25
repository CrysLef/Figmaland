import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        margin-bottom: 15.1rem;
    }

`

export const Image = styled.img`
    width: 26rem;
    height: 22rem;

    &:nth-child(1) {
        margin-top: 4.4rem;
    }

    &:last-child {
        margin-bottom: 4.4rem;
    }
`