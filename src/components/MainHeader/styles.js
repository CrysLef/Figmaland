import styled from "styled-components";
import { Button } from '../DefaultButton/styles'

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
`

export const ButtonHeader = styled(Button)`
    padding: 1.2rem 3.2rem;
`

export const Logo = styled.img`
    width: 18.6rem;
    height: 5.8rem;
`

export const WrapperMenu = styled.div`
    display: flex;
    align-items: center;
`