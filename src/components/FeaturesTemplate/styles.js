import styled from 'styled-components'

export const FeaturesBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 4.7rem 10rem;
    height: 15rem;

    
    @media (min-width: 768px) and (max-width: 1024px) {
        height: 18rem;
        margin: 4.7rem 28rem;
    }
`

export const Container = styled.div`
    display: flex;
    margin: 3.5rem 0 1.5rem 0;
    align-items: center;

    img {
        padding-right: 1rem;
    }

`

export const Title = styled.h3`
    font-size: 1.4rem;
    font-weight: 500;
    padding-right: 1.5rem;
`

export const Subtitle = styled.p`
    font-size: 1rem;
    padding-left: 1.2rem;
    line-height: 1.5rem;

    &:last-child {
        margin-bottom: 19.3rem;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        line-height: 2rem;
    }


`
