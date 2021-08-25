import styled from 'styled-components'

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5.7rem 7.4rem 0 7.4rem;

    @media (min-width: 768px) and (max-width: 1024px) {
        margin: 5.7rem 22rem 0 22rem;
    }

    h2 {
        font-weight: 500;
        text-align: center;
        font-size: 3.2rem;
        margin-bottom: 1.7rem;
    }

    p {
        text-align: center;
        line-height: 2.5rem;
        font-size: 1.1rem;
    }
`