import * as React from 'react'
import styled from 'styled-components/macro'
import { ReactComponent as ResumeIcon } from './assets/resume-icon.svg'
import { ReactComponent as GithubIcon } from './assets/github-icon.svg'
import { ReactComponent as LinkedinIcon } from './assets/linkedin-icon.svg'

export function Links() {
    return (
        <Wrapper>
            <Item
                href={process.env.PUBLIC_URL + '/Resume_Geyer.pdf'}
                target="_blank"
                title="Resume"
                rel="noopener noreferrer"
            >
                <ResumeIcon />
                <ItemTitle>Resume</ItemTitle>
            </Item>
            <Item
                href="https://www.linkedin.com/in/stefan-geyer/"
                target="_blank"
                title="LinkedIn"
                rel="noopener noreferrer"
            >
                <LinkedinIcon />
                <ItemTitle>LinkedIn</ItemTitle>
            </Item>
            <Item
                href="https://github.com/stefangeyer"
                target="_blank"
                title="GitHub"
                rel="noopener noreferrer"
            >
                <GithubIcon />
                <ItemTitle>GitHub</ItemTitle>
            </Item>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`

const Item = styled.a`
    color: ${p => p.theme.primary};
    cursor: pointer;
    text-decoration: none;
    display: flex;
    padding: 0.25rem 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    align-items: center;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.4;
    }

    .icon {
        margin-right: 0.25rem;
    }
`

const ItemTitle = styled.span``
