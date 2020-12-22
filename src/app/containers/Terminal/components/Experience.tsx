import * as React from 'react'
import { Item, Link, List } from 'app/components/Terminal'

export function Experience() {
    return (
        <List>
            <Item>
                <b>
                    <Link
                        href="https://www.tailored-apps.com/"
                        target="_blank"
                        title="Tailored Apps"
                        rel="noopener noreferrer"
                    >
                        Tailored Apps
                    </Link>
                </b>
                <p>
                    July 2019 - July 2020: Junior Android Developer
                    <br />
                    July 2020 - present: Android Developer
                </p>
            </Item>
        </List>
    )
}
