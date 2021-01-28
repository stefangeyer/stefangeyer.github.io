import * as React from 'react'
import styled from 'styled-components'
import { Text, LineStyle } from '../../../components/Terminal'
import { Prompt } from './Prompt'

type InteractiveProps = {
    inputRef: React.RefObject<HTMLInputElement>
    onNext: (content: string) => void
}

export function Interactive(props: InteractiveProps) {
    const { inputRef, onNext } = props
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            if (inputRef.current) {
                onNext(inputRef.current.value)
                inputRef.current.value = ''
            }
        }
    }

    return (
        <InteractiveLineStyle>
            <Prompt />
            <InteractiveText>
                <InteractiveInput
                    ref={inputRef}
                    spellCheck={false}
                    onKeyDown={handleKeyDown}
                ></InteractiveInput>
            </InteractiveText>
        </InteractiveLineStyle>
    )
}

const InteractiveLineStyle = styled(LineStyle)`
    display: flex;
`

const InteractiveText = styled(Text)`
    flex: 1;
`

const InteractiveInput = styled.input`
    background: transparent;
    border: none;
    outline: none;
    caret-color: white;
    color: white;
    padding: 0;
    width: 100%;
    cursor: default;
`
