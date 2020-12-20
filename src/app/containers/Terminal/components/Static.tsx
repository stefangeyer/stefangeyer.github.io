import * as React from 'react'
import { useEffect } from 'react'
import { Prompt } from './Prompt'
import { Text, LineStyle } from '../../../components/Terminal'

type StaticProps = {
    content: any
    prompt?: any
    lineCompleted?: (content: string) => void
}

export function Static(props: StaticProps) {
    useEffect(() => {
        if (props.lineCompleted) props.lineCompleted(props.content)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <LineStyle>
            {props.prompt ? <Prompt /> : ''}
            <Text>{props.content}</Text>
        </LineStyle>
    )
}
