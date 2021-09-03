import styled from 'styled-components'

export const ScreensImage = styled.div`
    width: 100%;
    max-height: 38rem;
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    overflow: hidden;
    background: linear-gradient(180deg, rgba(30, 30, 30, 0) 0%, rgba(14, 14, 14, .8) 100%);

    img {
        min-width: 55rem;
        height: 100%;
        z-index: -1;
    }

    @media (min-width: 1024px) {
       max-height: max-content;
    }
`