import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../../../types'
import { initialState } from './slice'

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.terminal || initialState

export const selectHistory = createSelector(
    [selectDomain],
    terminal => terminal.lines,
)

export const selectProcessor = createSelector(
    [selectDomain],
    terminal => terminal.processor,
)

export const selectShowInteractive = createSelector(
    [selectDomain],
    terminal => terminal.showInteractive,
)

export const selectCommandQueue = createSelector(
    [selectDomain],
    terminal => terminal.commandQueue,
)
