import * as S from './styles'

export default function TestimonialsCard(props) {
    return(
        <S.Card>
            <S.userInfo>
                <img src={props.image} alt="User photo" />
                <div>
                    <h2>{props.userName}</h2>
                    <h3>{props.work}</h3>
                </div>
            </S.userInfo>
            <p>{props.testimonial}</p>
        </S.Card>
    )
}