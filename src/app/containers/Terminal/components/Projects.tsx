import * as React from 'react'
import { Item, Link, List } from 'app/components/Terminal'

export function Projects() {
    return (
        <List>
            <Item>
                Java bindings for the{' '}
                <Link
                    href="https://challonge.com/"
                    target="_blank"
                    title="Challonge"
                    rel="noopener noreferrer"
                >
                    Challonge
                </Link>{' '}
                API -{' '}
                <Link
                    href="https://github.com/stefangeyer/challonge-java"
                    target="_blank"
                    title="GitHub"
                    rel="noopener noreferrer"
                >
                    GitHub
                </Link>
            </Item>
            <Item>
                Gesture control for HUE smart lights -{' '}
                <Link
                    href="https://github.com/stefangeyer/huecontrol"
                    target="_blank"
                    title="GitHub"
                    rel="noopener noreferrer"
                >
                    GitHub
                </Link>
            </Item>
        </List>
    )
}
