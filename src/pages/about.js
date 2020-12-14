import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Dualinfoblock from "../components/Reusable/Dualinfoblock"
import Teamphotosection from "../components/About/Teamphotosection"
import Infoblock from "../components/Reusable/Infoblock"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
      img={data.img.childImageSharp.fluid}
      title="about us"
      subtitle=""
      heroclass="about-background"
    />
    <Dualinfoblock heading="A message from CEO" image="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
    <Infoblock heading="About vision" />
    <Teamphotosection />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "about.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default AboutPage
