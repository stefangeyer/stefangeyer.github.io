// Terminal UI
export type Plottable = string | CompositeResult

export type ParseResult = Plottable | boolean

export enum ResultType {
    LS,
    THEME,
    LANG,
    CAT,
    EXECUTE,
}

export type CompositeResult = {
    type: ResultType
    payload: any
}

export function isCompositeResult(arg: any): arg is CompositeResult {
    return arg && typeof arg.type === 'number' && arg.payload
}

export enum LineType {
    INPUT,
    OUTPUT,
    INTERACTIVE,
}

export interface Line {
    content: Plottable
    type: LineType
}

// File System

export interface FileData {
    name: string
    executable: boolean
}

// State

export interface TerminalState {
    commandQueue: string[]
    lines: Line[]
    showInteractive: boolean
}

export type ContainerState = TerminalState
