import * as React from 'react'
import styled from 'styled-components/macro'
import { Links } from './Links'
import { PageWrapper } from '../../components/PageWrapper'

export function Footer() {
    return (
        <Wrapper>
            <PageWrapper>
                <Links />
            </PageWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    margin: 1rem 0 1rem 0;
    display: flex;
    width: 100%;

    ${PageWrapper} {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`
