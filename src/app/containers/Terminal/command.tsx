import * as React from 'react'
import styled from 'styled-components'
import { Line, LineType, ParseResult, Plottable } from './types'
import { store } from 'store'
import { ThemeKeyType } from 'styles/theme/types'
import { saveTheme } from 'styles/theme/utils'
import { changeTheme } from 'styles/theme/slice'

export class CommandHistory {
    lines: Line[]

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
        const preprocessed = command.trim().replace(/\s+/g, ' ')
        const args = preprocessed.split(' ')
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
        } else if (label === 'theme') {
            if (
                args.length === 0 ||
                !['system', 'light', 'dark'].includes(args[0])
            )
                return 'Usage: theme <system|light|dark>'
            const value = args[0] as ThemeKeyType
            saveTheme(value)
            store.dispatch(changeTheme(value))
            return `Theme changed to ${value}`
        }
        return false
    }
}

const Executable = styled.span`
    color: #00f100;
`

const Default = styled.span``
