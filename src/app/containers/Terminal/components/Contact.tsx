import * as React from 'react'
import { Item, Link, List } from 'app/components/Terminal'

export function Contact() {
    return (
        <List>
            <Item>
                Check out my{' '}
                <Link
                    href={process.env.PUBLIC_URL + '/Resume_Geyer.pdf'}
                    target="_blank"
                    title="Resume"
                    rel="noopener noreferrer"
                >
                    Resume
                </Link>
            </Item>
            <Item>
                Connect on{' '}
                <Link
                    href="https://www.linkedin.com/in/stefan-geyer/"
                    target="_blank"
                    title="LinkedIn"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </Link>
            </Item>
            <Item>
                Send me a{' '}
                <Link
                    href="mailto:stefangeyer@outlook.com"
                    target="_blank"
                    title="Mail"
                    rel="noopener noreferrer"
                >
                    Mail
                </Link>
            </Item>
        </List>
    )
}
