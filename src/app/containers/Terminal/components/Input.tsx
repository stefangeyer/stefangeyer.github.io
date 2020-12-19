import * as React from 'react'
import styled from 'styled-components'
import { Typewriter } from 'react-typewriting-effect'
import { Interactive } from './Interactive'
import { Text } from '../../../components/Terminal'

type InputProps = {
    content?: any
    static?: any
    lineCompleted?: (content: string) => void
}

export function Input(props: InputProps) {
    const lineCompleted = (content: string) => {
        if (props.lineCompleted) props.lineCompleted(content)
    }

    return (
        <LineStyle>
            <Prompt>
                <span>stefan@web</span>
                <span>~</span>
                <span>$</span>{' '}
            </Prompt>
            <Text>
                {props.content ? (
                    <Typewriter
                        string={props.content}
                        onComplete={() => lineCompleted(props.content)}
                        cursor="█"
                        stopBlinkinOnComplete={props.static}
                    ></Typewriter>
                ) : (
                    <Interactive onComplete={lineCompleted}></Interactive>
                )}
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
