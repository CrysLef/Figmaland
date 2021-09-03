import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        margin-bottom: 15.1rem;
    }

    
    @media (min-width: 1020px) {
        div {
            margin: 7rem 0;
            display: flex;
        }
    }
`

export const LogoWrapper = styled.div`
    display: flex;
    margin: 5rem auto;
    
    img {
        width: 4rem;
        height: 4rem;
        margin: 0 1.4rem;
    }

    @media (min-width: 1020px) {
        img {
            width: 6rem;
            height: 6rem;
            margin: 0 3rem;
        }
    }
`