import * as React from 'react'
import styled from 'styled-components'
import { Typewriter } from 'react-typewriting-effect'

type InputProps = {
    content: string
    static?: any
    lineCompleted?: () => void
}

export function Input(props: InputProps) {
    const lineCompleted = () => {
        if (props.lineCompleted) props.lineCompleted()
    }

    return (
        <LineStyle>
            <Prompt>
                <span>stefan@web</span>
                <span>~</span>
                <span>$</span>{' '}
            </Prompt>
            <Text>
                <Typewriter
                    string={props.content}
                    onComplete={lineCompleted}
                    cursor="█"
                    stopBlinkinOnComplete={props.static}
                ></Typewriter>
            </Text>
        </LineStyle>
    )
}

const LineStyle = styled.p`
    margin: 0;
    ::selection {
        color: black;
        background: white;
    }
`
const Prompt = styled.span`
    margin: 0;
    color: white;

    span:nth-child(1) {
        color: #00f100;
    }
    span:nth-child(2) {
        color: #00a4f1;
    }
`
const Text = styled.span`
    margin: 0;
    color: white;
`
