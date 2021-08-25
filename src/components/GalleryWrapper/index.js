import * as S from './styles'
import drone from '../../assets/images/cardImage1.svg'
import manTipying from '../../assets/images/cardImage2.svg'
import phone from '../../assets/images/cardImage3.svg'
import pcClosing from '../../assets/images/cardImage4.svg'
import DefaultButton from '../DefaultButton'

export default function GalleryWrapper() {
    return(
        <S.Container>
            <S.Image src={drone} alt="" />
            <S.Image src={manTipying} alt="" />
            <S.Image src={phone} alt="" />
            <S.Image src={pcClosing} alt="" />
            <DefaultButton content="See more" link="#" />
        </S.Container>
    )
}