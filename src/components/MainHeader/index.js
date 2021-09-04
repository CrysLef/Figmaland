import * as S from './styles'
import logo from '../../assets/images/logos/logo.svg'
import NavMenu from '../NavMenu'

export default function Header() {
    return (
        <S.Header>
            <S.Logo src={logo} alt="Logo Figmaland" />
            <S.WrapperMenu>
                <a href="#">
                    <S.ButtonHeader>Login</S.ButtonHeader>
                </a>
                <NavMenu />
            </S.WrapperMenu>
        </S.Header>
      );
}