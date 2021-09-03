import styled from "styled-components";

export const Burger = styled.div`
    display: none;
   
   @media (max-width: 1020px) {
    width: 3.5rem;
    height: 2.5rem;
    margin: 0 2rem;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    transform: scaleX(-1);
    z-index: 20;

    div {
        height: .4rem;
        background-color: #fff;
        transform-origin: .1rem;
        transition: all .3s linear;

        &:nth-child(1) {
            width: ${({ open}) => open ? '75%' : '100%'};
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)' };
        }

        &:nth-child(2) {
            width: 80%;
            transform: ${({ open }) => open ? 'translateX(-100%)' : 'translateX(0)' };
            opacity: ${({ open }) => open ? 0 : 1 }
        }

        &:nth-child(3) {
            width: ${({ open}) => open ? '75%' : '60%'};
            margin-bottom: 0;
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)' };
        }
    }
   }
   

`

export const Ul = styled.ul`
    list-style: none;
    display: flex;
    margin: 0 22rem 0 15rem;

    li {
        text-align: center;
        padding: 2rem;
        font-size: 1.6rem;
        cursor: pointer;

        &:hover {
            color: #4452FE;
        }

        &:nth-child(1) {
            padding-left: 0;
        }
    }
    

@media (max-width: 1020px) {
    position: fixed;
    top: 0;
    right: 0;
    background-color: #4452FE;
    height: 100%;
    width: 100%;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform .3s ease-in-out;
    z-index: 10;
    flex-direction: column;
    margin: 0;

    li {
        color: #fff;
        padding: 7rem;
        font-size: 2.4rem;

        &:active {
            background-color: #4452F5;
        }
    }
}

`