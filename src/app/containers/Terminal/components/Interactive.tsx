import * as React from 'react'
import styled from 'styled-components'
import { Text, LineStyle } from '../../../components/Terminal'
import { Prompt } from './Prompt'

type InteractiveProps = {
    onNext: (content: string) => void
}

export function Interactive(props: InteractiveProps) {
    const inputRef = React.createRef<HTMLInputElement>()

    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            if (inputRef.current) {
                props.onNext(inputRef.current.value)
                inputRef.current.value = ''
            }
        }
    }

    return (
        <LineStyle>
            <Prompt />
            <Text>
                <InteractiveInput
                    ref={inputRef}
                    spellCheck={false}
                    onKeyUp={handleKeyUp}
                ></InteractiveInput>
            </Text>
        </LineStyle>
    )
}

const InteractiveInput = styled.input`
    background: transparent;
    border: none;
    outline: none;
    caret-color: white;
    color: white;
    padding: 0;
`
