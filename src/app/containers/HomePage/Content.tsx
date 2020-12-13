import * as React from 'react'
import styled from 'styled-components/macro'
import { Terminal } from 'app/containers/Terminal'
import { LineType } from 'app/containers/Terminal/types'
import { ThemeSwitch } from 'app/containers/ThemeSwitch'

export function Content() {
    return (
        <Wrapper>
            <Terminal
                lines={[
                    ['ls', LineType.INPUT],
                    [
                        <span>
                            <Default>education.txt</Default>{' '}
                            <Default>experience.txt</Default>{' '}
                            <Executable>fetch_projects</Executable>
                        </span>,
                        LineType.OUTPUT,
                    ],
                    ['cat education.txt', LineType.INPUT],
                    ['TODO', LineType.OUTPUT],
                    ['cat experience.txt', LineType.INPUT],
                    ['TODO', LineType.OUTPUT],
                    ['./fetch_projects', LineType.INPUT],
                    ['TODO', LineType.OUTPUT],
                    [
                        'curl https://api.stefangeyer.at/v1/contact',
                        LineType.INPUT,
                    ],
                    ['TODO', LineType.OUTPUT],
                ]}
            ></Terminal>
            <Controls>
                <ThemeSwitch />
            </Controls>
        </Wrapper>
    )
}

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    //align-items: center;
    //justify-content: center;
    margin-top: 3em;
    margin-bottom: 1em;
`

const Controls = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1em;
`

const Executable = styled.span`
    color: #00f100;
`

const Default = styled.span``
