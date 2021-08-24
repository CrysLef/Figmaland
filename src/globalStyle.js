import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

     * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 62.5%;
        border: none;
        color: #FFF;
        font-family: 'Montserrat', sans-serif;
    }

    body {
        background-color: #181818;
    }

    .TextBox {
        display: flex;
        flex-direction: column;
        margin: 5.7rem 7.4rem 0 7.4rem;

        h1 {
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
    }

    .buttonBox {
        display: flex;
        margin: 5.7rem auto 0 auto;
        flex-direction: column;
        width: fit-content;

        button {
            margin-bottom: 2.1rem;
        }
    }
`