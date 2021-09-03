import styled from "styled-components";

export const Button = styled.button`
    padding: 1.5rem 3rem;
    background-color: transparent;
    border: 1px solid #FFF;
    font-size: 1.2rem;
    cursor: pointer;

    &:hover {
        background-color: #fff;
        color: #000;
    }

`
export const BlueButton = styled(Button)`
    background-color: #4452FE;
    border: 1px solid #4452FE;

    &:hover {
        color: #4452FE;
        border: 1px solid #4452FE;
    }
`