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

    .buttonBox {
        display: flex;
        margin: 5.7rem auto 0 auto;
        flex-direction: column;
        width: fit-content;

        button {
            margin-bottom: 2.1rem;
            width: 100%;
        }
    }

    .framesBox {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        width: 33rem;
        height: 35rem;
        margin-top: 2.7rem;
    }

    .featuresBox {
        margin: 4.7rem 10rem;
    }
`