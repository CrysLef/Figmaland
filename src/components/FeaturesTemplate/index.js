import * as S from './styles'

export default function FeaturesTemplate(props) {
    return(
        <>
            <S.Container>
                <img src={props.image} alt="Features of Figmaland" />
                <S.Title>{props.title}</S.Title>
            </S.Container>
            <S.Subtitle>{props.subtitle}</S.Subtitle>
        </>
    )
}