export enum LineType {
    INPUT,
    OUTPUT,
}

export type ParseResult = string | JSX.Element | boolean

export type Plottable = string | JSX.Element

export type Line = [line: Plottable, type: LineType]
