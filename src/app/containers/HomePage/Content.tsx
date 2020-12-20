import * as React from 'react'
import styled from 'styled-components/macro'
import { Terminal } from 'app/containers/Terminal'
import { CommandHistory, StaticCommandProcessor } from '../Terminal/command'
import { useState } from 'react'

export function Content() {
    const [processor] = useState(new StaticCommandProcessor())
    const [history] = useState(new CommandHistory())
    return (
        <Wrapper>
            <Terminal
                staticInput={[
                    'ls',
                    'cat education.txt',
                    'cat experience.txt',
                    './fetch_projects',
                    'curl https://api.stefangeyer.at/v1/contact',
                ]}
                processor={processor}
                history={history}
            ></Terminal>
        </Wrapper>
    )
}

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    margin-top: 3em;
    margin-bottom: 1em;
`
