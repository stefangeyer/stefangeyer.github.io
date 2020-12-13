import * as React from 'react'
import styled from 'styled-components/macro'
import { Title } from 'app/containers/HomePage/components/Title'

export function Masthead() {
    return (
        <Wrapper>
            <Title>React Boilerplate meets CRA</Title>

        </Wrapper>
    )
}

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 200px;
`
