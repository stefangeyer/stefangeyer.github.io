import * as React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { Static } from './components/Static'
import { Input } from './components/Input'
import { LineType } from './types'

type TerminalProps = {
    lines: [content: any, type: LineType][]
}

export function Terminal(props: TerminalProps) {
    const [lines, setLines] = useState<[content: any, type: LineType][]>([
        [...props.lines[0]],
    ])

    async function lineCompleted() {
        if (lines.length < props.lines.length) {
            const next = props.lines[lines.length]
            const delay = 200
            await new Promise(res => setTimeout(res, delay))
            const newLines = [...lines]
            newLines.push(next)
            setLines(newLines)
        }
    }

    return (
        <Wrapper>
            <Header>
                <IconGroup>
                    <Icon color={'#ff5f56'}></Icon>
                    <Icon color={'#ffbd2e'}></Icon>
                    <Icon color={'#27c93f'}></Icon>
                </IconGroup>
            </Header>
            <Body>
                {lines.map((line, i) =>
                    line[1] === LineType.INPUT ? (
                        <Input
                            key={`${line[0]}-${i}`}
                            content={line[0]}
                            lineCompleted={lineCompleted}
                            static={
                                i !== props.lines.length - 1 ? true : undefined
                            }
                        ></Input>
                    ) : (
                        <Static
                            key={`${line[0]}-${i}`}
                            content={line[0]}
                            lineCompleted={lineCompleted}
                        ></Static>
                    ),
                )}
                <Input lineCompleted={lineCompleted}></Input>
            </Body>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    //width: 800px;
    height: 500px;
    background-color: rgb(40, 44, 52);
    border-radius: 5px;
    font-family: Consolas, monaco, monospace;
    font-size: 14px;
    padding: 12px;
    transition: width 2s, height 2s;
`
const Header = styled.div`
    display: flex;
    justify-content: start;
    margin-bottom: 12px;
`
const Body = styled.div`
    display: flex;
    flex-direction: column;
`
const IconGroup = styled.div`
    display: flex;

    div:nth-child(n + 2) {
        margin-left: 8px;
    }
`
const Icon = styled.div`
    justify-self: start;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${props => props.color || 'white'};
    cursor: pointer;
`
