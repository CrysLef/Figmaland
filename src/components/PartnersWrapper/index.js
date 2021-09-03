import * as S from './styles'
import DefaultButton from '../DefaultButton'
import logoAppStore from '../../assets/images/logo_app_store.svg'
import logoApiary from '../../assets/images/logo_apiary.svg'
import logoAndroid from '../../assets/images/logo_android.svg'
import logoBaseCamp from '../../assets/images/logo_basecamp.svg'
import logoAirBnb from '../../assets/images/logo_airbnb.svg'
import logoIBM from '../../assets/images/logo_ibm.svg'

export default function PartnersWrapper() {
    return(
        <S.Container>
          <div>
            <S.LogoWrapper>
              <img src={logoAppStore} alt="Logo da App Store" />
              <img src={logoApiary} alt="Logo da Apiary" />
              <img src={logoAndroid} alt="Logo do Android" />
            </S.LogoWrapper>
            <S.LogoWrapper>
              <img src={logoBaseCamp} alt="Logo do Basecamp" />
              <img src={logoAirBnb} alt="Logo do AirBnb" />
              <img className="logoIBM" src={logoIBM} alt="Logo da IBM" />
            </S.LogoWrapper>
          </div>
          <DefaultButton content="All Partners" link="#" />
        </S.Container>
    )
}