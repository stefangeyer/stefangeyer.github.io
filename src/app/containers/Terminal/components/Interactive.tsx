import * as React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { Text } from '../../../components/Terminal'
import { Prompt } from './Prompt'
import { LineStyle } from './LineStyle'

type InteractiveProps = {
    onNext: (content: string) => void
}

export function Interactive(props: InteractiveProps) {
    const [content, setContent] = useState('')
    const inputRef = React.createRef<HTMLInputElement>()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value)
    }

    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            props.onNext(content)
            if (inputRef.current) {
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
                    onChange={handleChange}
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
