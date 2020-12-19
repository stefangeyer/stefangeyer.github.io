import * as React from 'react'
import styled from 'styled-components/macro'
import { StyleConstants } from 'styles/StyleConstants'
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
    height: ${StyleConstants.FOOTER_HEIGHT};
    display: flex;
    width: 100%;

    ${PageWrapper} {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`
