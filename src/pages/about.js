// Step 1: Import React
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p> Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
            <StaticImage
                alt="Photo of a biker on a break along the Brooklyn Bridge, January 2022."
                src="../images/DSC_1928.jpg"
            />
        </Layout>
    )
}
// Step 3: Export your component
export default AboutPage