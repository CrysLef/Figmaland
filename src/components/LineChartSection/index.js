import * as S from './styles'
import lineChart from '../../assets/images/lineChart.svg'
import TextBox from '../TextBox'
import DefaultButton from '../DefaultButton'

export default function LineChartSection() {
    return(
        <S.Section>
            <S.Container>
                <S.ButtonTextBox>
                    <TextBox title="OpenType features and Variable fonts" />
                    <DefaultButton content="Try for free" link="#" nomeDaClasse="BlueButton" />
                </S.ButtonTextBox>
                <img src={lineChart} alt="" />
            </S.Container>
        </S.Section>
    )
}