import styled from "styled-components";
import { Button } from '../DefaultButton/styles'

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;

    @media (min-width: 1020px) {
        justify-content: center;
        margin-bottom: 8rem;
    }

`

export const ButtonHeader = styled(Button)`
    padding: 1.2rem 3.2rem;

    &:hover {
        background-color: #fff;
        color: #000;
    }
`

export const Logo = styled.img`
    width: 18.6rem;
    height: 5.8rem;
    margin-left: .8rem;
    cursor: pointer;
`

export const WrapperMenu = styled.div`
    display: flex;
    align-items: center;
    

    @media (min-width: 1020px) {
        flex-direction: row-reverse;
        margin-right: 2rem;
    }
`