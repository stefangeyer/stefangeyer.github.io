import { CommandProcessor } from './command'

export type Plottable = string | JSX.Element

export type ParseResult = Plottable | boolean

export enum LineType {
    INPUT,
    OUTPUT,
    INTERACTIVE,
}

export interface Line {
    content: Plottable
    type: LineType
}

// State

export interface TerminalState {
    commandQueue: string[]
    lines: Line[]
    showInteractive: boolean
}

export type ContainerState = TerminalState
