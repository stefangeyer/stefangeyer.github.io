import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import { NavBar } from '../NavBar'
import { Content } from './Content'
import { PageWrapper } from 'app/components/PageWrapper'

export function HomePage() {
    return (
        <>
            <Helmet>
                <title>Hello, it's me, Stefan</title>
                <meta
                    name="description"
                    content="The one and only Stefan Geyer website"
                />
            </Helmet>
            <NavBar />
            <PageWrapper>
                <Content />
            </PageWrapper>
        </>
    )
}
