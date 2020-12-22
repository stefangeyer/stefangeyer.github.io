import * as React from 'react'
import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors'
import { Static } from './components/Static'
import { Input } from './components/Input'
import { FileList } from './components/File'
import {
    FileData,
    isCompositeResult,
    Line,
    LineType,
    ResultType,
} from './types'
import { sliceKey, reducer, actions } from './slice'
import { terminalSaga } from './saga'
import { selectHistory, selectShowInteractive } from './selectors'
import { Interactive } from './components/Interactive'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import { ThemeSwitch } from './components/ThemeSwitch'
import { ThemeKeyType } from 'styles/theme/types'

type TerminalProps = {}

export function Terminal(props: TerminalProps) {
    useInjectReducer({ key: sliceKey, reducer: reducer })
    useInjectSaga({ key: sliceKey, saga: terminalSaga })

    const history = useSelector(selectHistory)
    const showInteractive = useSelector(selectShowInteractive)
    const dispatch = useDispatch()

    const bottomRef = useRef<HTMLDivElement>(null)

    // This hook runs only on mount and is used to ensure the initial command is dispatched
    useEffect(() => {
        dispatch(actions.nextCommand())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function processUserInput(input: string) {
        dispatch(actions.copyUserInput(input))
        scrollToBottom()
    }

    function processInput(input: string) {
        dispatch(actions.processCommand(input))
    }

    function readyForNextLine() {
        dispatch(actions.nextCommand())
    }

    function scrollToBottom() {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' })
        }
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
            <Body autoHide={false}>
                {history.map((line: Line, i) => {
                    if (line.type === LineType.INPUT) {
                        return (
                            <Input
                                key={`${line.content}-${i}`}
                                content={line.content}
                                lineCompleted={processInput}
                            ></Input>
                        )
                    } else if (line.type === LineType.OUTPUT) {
                        if (typeof line.content === 'string') {
                            return (
                                <Static
                                    key={`${line.content}-${i}`}
                                    content={line.content}
                                    lineCompleted={readyForNextLine}
                                ></Static>
                            )
                        } else if (isCompositeResult(line.content)) {
                            if (line.content.type === ResultType.LS) {
                                return (
                                    <Static
                                        key={`${line.content.type}-${i}`}
                                        content={
                                            <FileList
                                                files={
                                                    line.content
                                                        .payload as FileData[]
                                                }
                                            />
                                        }
                                        lineCompleted={readyForNextLine}
                                    ></Static>
                                )
                            } else if (line.content.type === ResultType.THEME) {
                                return (
                                    <Static
                                        key={`${line.content.type}-${i}`}
                                        content={
                                            <ThemeSwitch
                                                value={
                                                    line.content
                                                        .payload as ThemeKeyType
                                                }
                                            />
                                        }
                                        lineCompleted={readyForNextLine}
                                    ></Static>
                                )
                            }
                        }
                    } else if (line.type === LineType.INTERACTIVE) {
                        return (
                            <Static
                                key={`${line.content}-${i}`}
                                content={line.content}
                                lineCompleted={processInput}
                                prompt
                            ></Static>
                        )
                    }
                    return ''
                })}
                {showInteractive ? (
                    <Interactive onNext={processUserInput}></Interactive>
                ) : (
                    ''
                )}
                <div ref={bottomRef}></div>
            </Body>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 500px;
    background-color: rgb(40, 44, 52);
    border-radius: 5px;
    font-family: Consolas, monaco, monospace;
    font-size: 14px;
    padding: 12px;
    transition: width 1s, height 1s;
    word-break: break-all;
    cursor: text;

    @media (min-width: 768px) {
        width: 80%;
    }
`
const Header = styled.div`
    display: flex;
    justify-content: start;
    margin-bottom: 15px;
`
const Body = styled(SimpleBar)`
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;

    &::selection {
        color: black;
        background: white;
    }
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
