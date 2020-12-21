import { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '../../../utils/@reduxjs/toolkit'
import { StaticCommandProcessor } from './command'
import { ContainerState, LineType } from './types'

// The initial state of the Terminal container
export const initialState: ContainerState = {
    commandQueue: [
        'ls',
        'cat education.txt',
        'cat experience.txt',
        './fetch_projects',
        'curl https://api.stefangeyer.at/v1/contact',
    ],
    showInteractive: false,
    lines: [],
}

const processor = new StaticCommandProcessor()

const terminalSlice = createSlice({
    name: 'terminal',
    initialState,
    reducers: {
        showInteractive(state, action: PayloadAction<boolean>) {
            state.showInteractive = action.payload
        },
        copyUserInput(state, action: PayloadAction<string>) {
            state.lines.push({
                content: action.payload,
                type: LineType.INTERACTIVE,
            })
        },
        processCommand(state, action: PayloadAction<string>) {
            const command = action.payload
            const result = processor.process(command)
            switch (result) {
                case true:
                    // true => no new line
                    break
                case false:
                    // false => command was not handled
                    state.lines.push({
                        content: `${command
                            .split(' ')
                            .shift()}: command not found`,
                        type: LineType.OUTPUT,
                    })
                    break
                default:
                    // else => command was processed successfully
                    state.lines.push({ content: result, type: LineType.OUTPUT })
                    break
            }
        },
        nextCommand(state) {
            if (state.commandQueue.length === 0) {
                state.showInteractive = true
                return
            }
            const nextCommand = state.commandQueue.shift() || 'ERROR'
            state.lines = [
                ...state.lines,
                { content: nextCommand, type: LineType.INPUT },
            ]
            state.showInteractive = false
        },
    },
})

export const { actions, reducer, name: sliceKey } = terminalSlice
