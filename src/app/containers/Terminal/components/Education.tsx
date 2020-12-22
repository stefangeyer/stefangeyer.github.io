import * as React from 'react'
import { Item, List } from 'app/components/Terminal'

export function Education() {
    return (
        <List>
            <Item>
                <b>TGM Wien (technical college)</b>
                <p>2011 - 2016: Software Engineering</p>
            </Item>
            <Item>
                <b>TU Wien</b>
                <p>
                    2016 - 2020: Bachelor of Science, Software Engineering
                    <br />
                    2020 - present: Master of Science, Biomedical Engineering
                </p>
            </Item>
        </List>
    )
}
