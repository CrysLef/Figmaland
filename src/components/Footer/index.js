import * as S from './styles'
import iconMap from '../../assets/images/icon_map.svg'
import iconSmartphone from '../../assets/images/icon_smartphone.svg'
import iconTwitter from '../../assets/images/icon_twitter.svg'
import iconFacebook from '../../assets/images/icon_facebook.svg'
import iconLinkedin from '../../assets/images/icon_linkedin.svg'

export default function Footer() {
    return(
        <footer>
            <S.Container>
                <S.Wrapper>
                    <h2>Fingertipe</h2>
                    <h3>Home</h3>
                    <h3>Examples</h3>
                    <h3>Pricing</h3>
                    <h3>Updates</h3>
                </S.Wrapper>
                <S.Wrapper>
                    <h2>Resources</h2>
                    <h3>Home</h3>
                    <h3>Examples</h3>
                    <h3>Pricing</h3>
                    <h3>Updates</h3>
                </S.Wrapper>
                <S.Wrapper>
                    <h2>About</h2>
                    <h3>Home</h3>
                    <h3>Examples</h3>
                    <h3>Pricing</h3>
                    <h3>Updates</h3>
                </S.Wrapper>
                <S.Address>
                    <S.ContactBox>
                        <img src={iconMap} alt="ícone de um mapa" />
                        <p>7480 Mockingbird Hill undefined </p>
                    </S.ContactBox>
                    <S.ContactBox>
                        <img src={iconSmartphone} alt="ícone de um smartphone" />
                        <p>(239) 555-0108</p>
                    </S.ContactBox>
                <div>
                    <a href="#">
                        <img src={iconTwitter} alt="ícone do twitter" />
                    </a>
                    <a href="#">
                        <img src={iconFacebook} alt="ícone do facebook" />
                    </a>
                    <a href="#">
                        <img src={iconLinkedin} alt="ícone do linkedin" />
                    </a>
                </div>
                </S.Address>
            </S.Container>
        </footer>
        
    )
}