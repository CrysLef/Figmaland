import styled from "styled-components";

export const Card = styled.div`
    padding: 4rem;
    border-radius: 1rem;
    border: 1px solid #565656;
    margin: 2.3rem auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 26rem;
    height: 28rem;
    overflow: hidden;

    p {
        font-size: 1rem;
        margin-top: 2rem;
        line-height: 1.8rem;
    }

    @media (min-width: 1020px) {
        width: 35rem;
        height: 28rem
    }
`

export const userInfo = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 4rem;
        height: 4rem;
        margin-right: 1.3rem;
    }

    h2 {
        font-size: 1.2rem;
        font-weight: 500;
        margin-bottom: .5rem;
    }

    h3 {
        font-size: 1.2rem;
        font-weight: 500;
    }
`