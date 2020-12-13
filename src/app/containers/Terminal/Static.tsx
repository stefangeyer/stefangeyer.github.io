import * as React from 'react'
import styled from 'styled-components'

type StaticProps = {
    content: any
    lineCompleted?: () => void
}

export class Static extends React.Component<StaticProps> {
    componentDidMount() {
        if (this.props.lineCompleted) this.props.lineCompleted()
    }

    render() {
        return (
            <LineStyle>
                <Text>{this.props.content}</Text>
            </LineStyle>
        )
    }
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
