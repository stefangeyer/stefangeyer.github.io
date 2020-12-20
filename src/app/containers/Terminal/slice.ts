import { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '../../../utils/@reduxjs/toolkit'
import { StaticCommandProcessor } from './command'
import { ContainerState, InputLine, InteractiveLine, OutputLine } from './types'

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
    processor: new StaticCommandProcessor(),
}

const terminalSlice = createSlice({
    name: 'terminal',
    initialState,
    reducers: {
        showInteractive(state, action: PayloadAction<boolean>) {
            state.showInteractive = action.payload
        },
        copyUserInput(state, action: PayloadAction<string>) {
            state.lines.push(new InteractiveLine(action.payload))
        },
        processCommand(state, action: PayloadAction<string>) {
            const command = action.payload
            const result = state.processor.process(command)
            switch (result) {
                case true:
                    // true => no new line
                    break
                case false:
                    // false => command was not handled
                    state.lines.push(
                        new OutputLine(
                            command.split(' ').shift() + ': command not found',
                        ),
                    )
                    break
                default:
                    // else => command was parsed successfully
                    state.lines.push(new OutputLine(result))
                    break
            }
        },
        nextCommand(state) {
            if (state.commandQueue.length === 0) {
                state.showInteractive = true
                return
            }
            const nextCommand = state.commandQueue.shift() || 'ERROR'
            state.lines = [...state.lines, new InputLine(nextCommand)]
            state.showInteractive = false
        },
    },
})

export const { actions, reducer, name: sliceKey } = terminalSlice
