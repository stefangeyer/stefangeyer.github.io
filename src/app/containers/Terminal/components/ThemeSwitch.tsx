import * as React from 'react'
import styled from 'styled-components'
import { changeTheme } from '../../../../styles/theme/slice'
import { useDispatch } from 'react-redux'
import { saveTheme } from '../../../../styles/theme/utils'
import { ThemeKeyType } from '../../../../styles/theme/types'
import { useEffect } from 'react'

type ThemeSwitchProps = {
    value: ThemeKeyType
}

export function ThemeSwitch(props: ThemeSwitchProps) {
    const dispatch = useDispatch()

    useEffect(() => {
        saveTheme(props.value)
        dispatch(changeTheme(props.value))
    })

    return (
        <>
            <span>Theme changed to </span>
            <ThemeColor>{props.value}</ThemeColor>
        </>
    )
}

const ThemeColor = styled.span`
    color: ${p => p.theme.primary};
`
