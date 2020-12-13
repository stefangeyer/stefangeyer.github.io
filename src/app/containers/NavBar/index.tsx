import * as React from 'react'
import styled from 'styled-components/macro'
import { Logo } from './Logo'
import { StyleConstants } from 'styles/StyleConstants'
import { Nav } from './Nav'
import { PageWrapper } from '../../components/PageWrapper'

export function NavBar() {
    return (
        <Wrapper>
            <PageWrapper>
                <Logo />
                <Nav />
            </PageWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.header`
    height: ${StyleConstants.NAV_BAR_HEIGHT};
    display: flex;
    width: 100%;

    ${PageWrapper} {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`
