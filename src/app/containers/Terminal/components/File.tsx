import * as React from 'react'
import styled from 'styled-components'
import { FileData } from '../types'

type FileListProps = {
    files: FileData[]
}

export function FileList(props: FileListProps) {
    return (
        <span>
            {props.files.map((file, i) => {
                if (file.executable) {
                    return (
                        <Executable key={`${file.name}-${i}`}>
                            {file.name}{' '}
                        </Executable>
                    )
                } else {
                    return (
                        <Default key={`${file.name}-${i}`}>
                            {file.name}{' '}
                        </Default>
                    )
                }
            })}
        </span>
    )
}

export const Executable = styled.span`
    color: #00f100;
`

export const Default = styled.span``
