import * as React from 'react'
import styled from 'styled-components/macro'
import { Terminal } from 'app/containers/Terminal'
import { LineType } from 'app/containers/Terminal/types'
import { ThemeSwitch } from 'app/containers/ThemeSwitch'
import { LanguageSwitch } from '../LanguageSwitch'

export function Features() {
    return (
        <Wrapper>
            <Controls>
                <ThemeSwitch />
                <LanguageSwitch />
            </Controls>
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
        </Wrapper>
    )
}

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    //align-items: center;
    //justify-content: center;
`

const Controls = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 3em;
    margin-bottom: 1em;
`

const Executable = styled.span`
    color: #00f100;
`

const Default = styled.span``
