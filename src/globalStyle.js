import { createGlobalStyle } from "styled-components";
import frames from './assets/images/frames.svg'
import framesDesktop from './assets/images/framesDesktop.svg'

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

    footer {
        margin-top: 18rem;
    }

    .buttonBox {
        display: flex;
        justify-content: center;
        margin-top: 3.5rem;

        button {
            margin-right: 3.5rem;
            margin-bottom: 6rem;
        }

        @media (max-width: 1024px) {
            margin: 5.7rem auto 0 auto;
            flex-direction: column;
            width: fit-content;

            button {
                margin-bottom: 2.1rem;
                width: 100%;
            }
        }
    }

    .featuresBox {
        display: flex;
        margin: 8rem 0 25rem 0;
        flex-direction: column;
        align-items: center;

        @media (min-width: 1020px) {
            flex-direction: row;
            justify-content: center;
        }

    }

    .framesBox {
        background-image: url(${framesDesktop});
        width: 40%;
        background-repeat: no-repeat;
        height: 75.9rem;

        @media (max-width: 1020px) {
            background-size: contain;
            display: flex;
            justify-content: center;
            margin: 0 auto;
            width: 33rem;
            height: 35rem;
            background-image: url(${frames});
        }
    }

    .whiteCardBox {
        display: flex;
        flex-direction: column;

        @media (min-width: 768px) {
            flex-direction: row;
        }
    }

    .testimonialsBox {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 15rem;

        @media (min-width: 768px) {
            flex-direction: row;
            flex-wrap: wrap;
            
            .userContainer1 {
                margin-right: 2.3rem;
            }
        }
    }

    @media (min-width: 1020px) {
 
        .userContainer2 {
            .differentHeight {
                height: 26rem;
            }
        }
    }
`