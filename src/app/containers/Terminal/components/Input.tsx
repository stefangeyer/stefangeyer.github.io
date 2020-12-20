import * as React from 'react'
import { Typewriter } from 'react-typewriting-effect'
import { Interactive } from './Interactive'
import { Text } from '../../../components/Terminal'
import { Prompt } from './Prompt'
import { LineStyle } from './LineStyle'

type InputProps = {
    content: any
    lineCompleted?: (content: string) => void
}

export function Input(props: InputProps) {
    const lineCompleted = (content: string) => {
        if (props.lineCompleted) props.lineCompleted(content)
    }

    return (
        <LineStyle>
            <Prompt />
            <Text>
                <Typewriter
                    string={props.content}
                    onComplete={() => lineCompleted(props.content)}
                    cursor="█"
                    stopBlinkinOnComplete={true}
                ></Typewriter>
            </Text>
        </LineStyle>
    )
}
