import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1E1E1E;
    width: 100%;
    overflow: hidden;

    @media (min-width: 1020px) {
        width: 129.1rem;
        height: 37rem;
        border-radius: 3.3rem;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: #343434;
        margin: 0 auto;
        
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1020px) {
        flex-direction: row;
        margin-left: 15rem;
    }

    button {
        margin-top: 3.7rem;    
        padding: 1.5rem 7rem;
    }
    

    img {
        width: 100%;
        height: 100%;
        margin-top: 10.6rem;
        margin-bottom: 10.1rem;

        @media (min-width: 1020px) {
            margin-top: 50rem;
            width: 40vw;
            height: 100vh;
            margin-left: 5rem;
        }
    }
`

export const ButtonTextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (min-width: 1020px) {
        align-items: flex-start;

        h2 {
            text-align: start;
            margin-bottom: -2rem;
        }
    }
`