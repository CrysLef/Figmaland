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


    @media (min-width: 1020px) {
        flex-direction: row;
        justify-content: space-around;
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
        cursor: pointer;

        &:hover {
            color: #4452FE;
        }
    }

    @media (min-width: 1020px) {
        margin-bottom: 0;

        h2 {
            font-size: 1.8rem;
        }

        h3 {
            font-size: 1.4rem;
        }
}
`

export const Address = styled.address`
    flex-direction: column;
`

export const ContactBox = styled.div`
    align-items: center;
    margin-bottom: 3rem;

    p {
        font-size: .9rem;

        @media (min-width: 1020px) {
            font-size: 1.2rem;
        }
    }

`