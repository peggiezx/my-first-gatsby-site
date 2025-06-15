import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p1>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p1>
        </Layout>
    )
}

export const Head = () => <title>About Me</title>

export default AboutPage