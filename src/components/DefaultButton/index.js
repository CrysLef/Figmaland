import * as S from './styles'

export default function DefaultButton (props) {
    return (
        <a href={props.link}>
            {
                props.nomeDaClasse === 'BlueButton' ?
                <S.BlueButton>{props.content}</S.BlueButton> :
                <S.Button>{props.content}</S.Button>
            }
        </a>
    )
}