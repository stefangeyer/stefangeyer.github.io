import * as React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors'
import { Static } from './components/Static'
import { Input } from './components/Input'
import { InputLine, Line, OutputLine } from './types'
import { sliceKey, reducer, actions } from './slice'
import { terminalSaga } from './saga'
import { selectHistory, selectShowInteractive } from './selectors'

type TerminalProps = {}

export function Terminal(props: TerminalProps) {
    useInjectReducer({ key: sliceKey, reducer: reducer })
    useInjectSaga({ key: sliceKey, saga: terminalSaga })

    const history = useSelector(selectHistory)
    const showInteractive = useSelector(selectShowInteractive)
    const dispatch = useDispatch()

    // This hook runs only on mount and is used to ensure the initial command is dispatched
    useEffect(() => {
        dispatch(actions.nextCommand())
    }, [dispatch])

    function processInput(input: string) {
        dispatch(actions.processCommand(input))
    }

    function readyForNextLine() {
        dispatch(actions.nextCommand())
    }

    return (
        <Wrapper>
            <Header>
                <IconGroup>
                    <Icon color={'#ff5f56'}></Icon>
                    <Icon color={'#ffbd2e'}></Icon>
                    <Icon color={'#27c93f'}></Icon>
                </IconGroup>
            </Header>
            <Body>
                {history.map((line: Line, i) => {
                    if (line instanceof InputLine) {
                        return (
                            <Input
                                key={`${line.content}-${i}`}
                                content={line.content}
                                lineCompleted={processInput}
                            ></Input>
                        )
                    } else if (line instanceof OutputLine) {
                        return (
                            <Static
                                key={`${line.content}-${i}`}
                                content={line.content}
                                lineCompleted={readyForNextLine}
                            ></Static>
                        )
                    }
                    return ''
                })}
                {showInteractive ? (
                    <Input lineCompleted={processInput}></Input>
                ) : (
                    ''
                )}
            </Body>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    //width: 800px;
    height: 500px;
    background-color: rgb(40, 44, 52);
    border-radius: 5px;
    font-family: Consolas, monaco, monospace;
    font-size: 14px;
    padding: 12px;
    transition: width 2s, height 2s;
    word-break: break-all;
`
const Header = styled.div`
    display: flex;
    justify-content: start;
    margin-bottom: 12px;
`
const Body = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`
const IconGroup = styled.div`
    display: flex;

    div:nth-child(n + 2) {
        margin-left: 8px;
    }
`
const Icon = styled.div`
    justify-self: start;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${props => props.color || 'white'};
    cursor: pointer;
`
