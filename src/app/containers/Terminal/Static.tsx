import * as React from 'react'
import styled from 'styled-components'

type StaticProps = {
    content: string
    lineCompleted?: () => void
}

export function Static(props: StaticProps) {
    if (props.lineCompleted) props.lineCompleted()

    return (
        <LineStyle>
            <Text>{props.content}</Text>
        </LineStyle>
    )
}

const LineStyle = styled.p`
    margin: 0;
    ::selection {
        color: black;
        background: white;
    }
`
const Text = styled.span`
    margin: 0;
    color: white;
`
