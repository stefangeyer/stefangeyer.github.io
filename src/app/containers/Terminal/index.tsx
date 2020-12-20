import * as React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { Static } from './components/Static'
import { Input } from './components/Input'
import { CommandHistory, CommandProcessor } from './command'
import { Line, LineType, Plottable } from './types'

type TerminalProps = {
    staticInput: string[]
    processor: CommandProcessor
    history: CommandHistory
}

export function Terminal(props: TerminalProps) {
    const [staticCursor, setStaticCursor] = useState<number>(1)

    const [lines, setLines] = useState<Line[]>([
        [props.staticInput[0], LineType.INPUT],
    ])

    function addLine(line: Plottable, type: LineType) {
        setLines([...lines, [line, type]])
    }

    function addInput(line: Plottable) {
        addLine(line, LineType.INPUT)
    }

    function addOutput(line: Plottable) {
        addLine(line, LineType.OUTPUT)
    }

    function humanInputCompleted(input: string) {
        addInput(input)
        inputCompleted(input)
    }

    async function inputCompleted(input: string) {
        const result = await props.processor.process(input)
        if (result === true) {
            addOutput('')
        } else if (result === false) {
            addOutput(input + ': command not found')
        } else {
            addOutput(input)
        }
    }

    async function outputCompleted() {
        if (staticCursor < props.staticInput.length - 1) {
            const next = props.staticInput[staticCursor]
            const delay = 200
            await new Promise(res => setTimeout(res, delay))
            addInput(next)
            setStaticCursor(staticCursor + 1)
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
                            lineCompleted={inputCompleted}
                        ></Input>
                    ) : (
                        <Static
                            key={`${line[0]}-${i}`}
                            content={line[0]}
                            lineCompleted={outputCompleted}
                        ></Static>
                    ),
                )}
                {lines[lines.length - 1][1] === LineType.OUTPUT ? (
                    <Input lineCompleted={humanInputCompleted}></Input>
                ) : (
                    ''
                )}
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
