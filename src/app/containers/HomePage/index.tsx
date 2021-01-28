import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import { Footer } from '../Footer'
import { Content } from './Content'
import { PageWrapper } from 'app/components/PageWrapper'

export function HomePage() {
    return (
        <>
            <Helmet>
                <title>Stefan Geyer</title>
                <meta
                    name="description"
                    content="The one and only Stefan Geyer website"
                />
            </Helmet>
            <PageWrapper>
                <Content />
                <Footer />
            </PageWrapper>
        </>
    )
}
