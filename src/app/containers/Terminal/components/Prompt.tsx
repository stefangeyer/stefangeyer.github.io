import * as React from 'react'
import styled from 'styled-components'

export function Prompt() {
    return (
        <Wrapper>
            <span>stefan@web</span>
            <span>~</span>
            <span>$</span>{' '}
        </Wrapper>
    )
}

const Wrapper = styled.span`
    margin: 0;
    color: white;

    span:nth-child(1) {
        color: #00f100;
    }
    span:nth-child(2) {
        color: #00a4f1;
    }
`
