import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 10.7rem 6rem;

    img {
        width: 3.5rem;
        height: 3.5rem;
        margin-right: 1.5rem;
    }
`

export const Wrapper = styled.div`
    margin-bottom: 7.5rem;

    h2 {
        font-size: 1.2rem;
        font-weight: 500;
        margin-bottom: 3rem;
    }

    h3 {
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: 1.9rem;
    }
`

export const Address = styled.address`
    display: flex;
    flex-direction: column;
`

export const ContactBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 3rem;

    p {
        font-size: .9rem;
    }
`