import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p1>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p1>
        </Layout>
    )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage