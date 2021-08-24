import { useState } from 'react'
import * as S from './styles'
import Navigation from './Navigation'

export default function BurguerMenu() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <S.Burger open={open} onClick={() => setOpen(!open)}>
                <div />   
                <div />   
                <div />   
            </S.Burger>
            <Navigation open={open} />
        </>
    )
}