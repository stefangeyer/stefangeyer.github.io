import * as React from 'react'
import styled from 'styled-components'
import { LineType, ParseResult, Plottable } from './types'

export class CommandHistory {
    lines: [line: Plottable, type: LineType][]

    constructor() {
        this.lines = []
    }

    addLine(line: Plottable, type: LineType) {
        this.lines.push([line, type])
    }

    addInput(line: Plottable) {
        this.addLine(line, LineType.INPUT)
    }

    addOutput(line: Plottable) {
        this.addLine(line, LineType.OUTPUT)
    }
}

export abstract class CommandProcessor {
    process(command: string): Promise<ParseResult> {
        const args = command.split(' ')
        if (args.length === 0) return new Promise(res => res(true))
        const label = args.shift() as string
        return new Promise(res => res(this.onCommand(label, args)))
    }
    protected abstract onCommand(label: string, args: string[]): ParseResult
}

export class StaticCommandProcessor extends CommandProcessor {
    onCommand(label: string, args: string[]): ParseResult {
        if (label === 'ls') {
            return (
                <span>
                    <Default>education.txt</Default>{' '}
                    <Default>experience.txt</Default>{' '}
                    <Executable>fetch_projects</Executable>
                </span>
            )
        }
        return false
    }
}

const Executable = styled.span`
    color: #00f100;
`

const Default = styled.span``
