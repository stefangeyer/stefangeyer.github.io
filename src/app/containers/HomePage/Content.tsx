import * as React from 'react'
import styled from 'styled-components/macro'
import { Terminal } from 'app/containers/Terminal'

export function Content() {
    return (
        <Wrapper>
            <Terminal></Terminal>
        </Wrapper>
    )
}

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    margin-top: 3em;
    margin-bottom: 1em;
`
