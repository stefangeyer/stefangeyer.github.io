import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

type LanguageProps = {
    value: string
}

export function LanguageSwitch(props: LanguageProps) {
    const { i18n } = useTranslation()
    useEffect(() => {
        i18n.changeLanguage(props.value)
    })

    return <span>Language changed to {props.value}</span>
}
