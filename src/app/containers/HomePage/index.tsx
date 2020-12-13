import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import { NavBar } from '../NavBar'
import { Features } from './Features'
import { PageWrapper } from 'app/components/PageWrapper'

export function HomePage() {
    return (
        <>
            <Helmet>
                <title>Stefan Geyer</title>
                <meta
                    name="description"
                    content="A React Boilerplate application homepage"
                />
            </Helmet>
            <NavBar />
            <PageWrapper>
                <Features />
            </PageWrapper>
        </>
    )
}
