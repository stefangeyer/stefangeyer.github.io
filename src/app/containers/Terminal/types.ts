import { CommandProcessor } from './command'

export type Plottable = string | JSX.Element

export type ParseResult = Plottable | boolean

export interface Line {
    content: Plottable
}

export class InputLine implements Line {
    content: Plottable

    constructor(content: Plottable) {
        this.content = content
    }
}

export class OutputLine implements Line {
    content: Plottable

    constructor(content: Plottable) {
        this.content = content
    }
}

export class InteractiveLine implements Line {
    content: Plottable

    constructor(content: Plottable) {
        this.content = content
    }
}

// State

export interface TerminalState {
    commandQueue: string[]
    processor: CommandProcessor
    lines: Line[]
    showInteractive: boolean
}

export type ContainerState = TerminalState
