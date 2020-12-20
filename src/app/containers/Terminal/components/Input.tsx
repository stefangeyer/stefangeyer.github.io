import * as React from 'react'
import { Typewriter } from 'react-typewriting-effect'
import { Prompt } from './Prompt'
import { Text, LineStyle } from '../../../components/Terminal'

type InputProps = {
    content: any
    lineCompleted?: (content: string) => void
}

export function Input(props: InputProps) {
    const lineCompleted = () => {
        if (props.lineCompleted) props.lineCompleted(props.content)
    }

    return (
        <LineStyle>
            <Prompt />
            <Text>
                <Typewriter
                    string={props.content}
                    onComplete={lineCompleted}
                    cursor="█"
                    stopBlinkinOnComplete={true}
                ></Typewriter>
            </Text>
        </LineStyle>
    )
}
