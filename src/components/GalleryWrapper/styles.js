import styled from "styled-components";
import drone from '../../assets/images/cardImage1.svg'
import manTipying from '../../assets/images/cardImage2.svg'
import phone from '../../assets/images/cardImage3.svg'
import pcClosing from '../../assets/images/cardImage4.svg'
import codeImage from '../../assets/images/codeImage.svg'
import phone2 from '../../assets/images/phone2.svg'
import womanTyping from '../../assets/images/womanTyping.svg'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        margin-top: 4.4rem;
        margin-bottom: 15.1rem;
    }

    div {
        display: flex;
        flex-direction: column;
        background-repeat: no-repeat;

        .imgID1 {
            background-image: url(${drone});
        }
        .imgID2 {
            background-image: url(${phone});
        }
        .imgID3 {
            background-image: url(${manTipying});
        }
        .imgID4 {
            background-image: url(${pcClosing});
        }
        .imgID5 {
           display: none;
        }
        .imgID6 {
            display: none;
        }
        .imgID7 {
            display: none;
        }

        @media (min-width: 1020px) {
            flex-direction: row;
            margin-right: -10rem;

            .imgID1{
                margin-left: -12rem;
            }
            .imgID2{}
            .imgID3{}
            .imgID4{}

            .imgID5 {
                display: block;
                background-image: url(${codeImage});
                margin-right: 2rem;
                margin-left: -15rem;
            }
            .imgID6 {
                display: block;
                background-image: url(${womanTyping});
                margin-right: -14rem;
            }
            .imgID7 {
                display: block;
                background-image: url(${phone2});
            }
        }
    }

`

export const Image = styled.div`
    width: 24rem;
    height: 22rem;
    background-size: contain;

    @media (min-width: 1020px) {
        width: 38rem;
        height: 26rem;
    }
`