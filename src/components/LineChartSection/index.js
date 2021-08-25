import * as S from './styles'
import lineChart from '../../assets/images/lineChart.svg'
import TextBox from '../TextBox'
import DefaultButton from '../DefaultButton'

export default function LineChartSection() {
    return(
        <S.Section>
            <TextBox title="OpenType features and Variable fonts" />
            <S.Container>
                <DefaultButton content="Try for free" link="#" nomeDaClasse="BlueButton" />
                <img src={lineChart} alt="" />
            </S.Container>
        </S.Section>
    )
}