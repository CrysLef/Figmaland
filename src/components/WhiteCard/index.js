import * as S from './styles'
import DefaultButton from "../DefaultButton"

export default function WhiteCard(props) {
    return(
        <S.Box>
            <S.Title>{props.title}</S.Title>
            <S.Subtitle>{props.subtitle}</S.Subtitle>
            <DefaultButton nomeDaClasse="BlueButton" link={props.link} content={props.content} />
            <img src={props.image} alt={props.altText} />
        </S.Box>
    )
}