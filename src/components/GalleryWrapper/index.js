import * as S from './styles'
import DefaultButton from '../DefaultButton'

export default function GalleryWrapper() {
    return(
        <S.Container>
            <div>
                <S.Image className="imgID1" />
                <S.Image className="imgID2" />
                <S.Image className="imgID3" />
                <S.Image className="imgID4" />
            </div>
            <div>
                <S.Image className="imgID5" />
                <S.Image className="imgID6" />
                <S.Image className="imgID7" />
            </div>
            <DefaultButton content="See more" link="#" />
        </S.Container>
    )
}