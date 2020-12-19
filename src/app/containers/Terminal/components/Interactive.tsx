import * as React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { Text } from '../../../components/Terminal'

type InteractiveProps = {
    onComplete: (content: string) => void
}

export function Interactive(props: InteractiveProps) {
    const [content, setContent] = useState('')
    const [editing, setEditing] = useState(true)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value)
    }

    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            setEditing(false)
            props.onComplete(content)
        }
    }

    if (editing) {
        return (
            <InteractiveInput
                spellCheck={false}
                onChange={handleChange}
                onKeyUp={handleKeyUp}
            ></InteractiveInput>
        )
    } else {
        return <Text>{content}</Text>
    }
}

const InteractiveInput = styled.input`
    background: transparent;
    border: none;
    outline: none;
    caret-color: white;
    color: white;
    padding: 0;
`
