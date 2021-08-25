import { Box } from './styles'

export default function TextBox(props) {
    return(
        <Box>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </Box>
    )
}