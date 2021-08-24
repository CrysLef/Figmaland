import { Ul } from './styles'

export default function Navigation({ open }) {
    return(
        <Ul open={open}>
            <li>Home</li>
            <li>Product</li>
            <li>About</li>
            <li>Contact</li>
        </Ul>
    )
}