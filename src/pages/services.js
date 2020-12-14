import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Inverteddualinfoblock from "../components/Reusable/Inverteddualinfoblock"
import Servicesofferedsection from "../components/Services/Servicesofferedsection"
import Infoblock from "../components/Reusable/Infoblock"

const ServicesPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
      img={data.img.childImageSharp.fluid}
      title="services"
      subtitle=""
      heroclass="about-background"
    />
    <Inverteddualinfoblock heading="Operating principle" image="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
    <Infoblock heading="Our offerings" />                                     
    <Servicesofferedsection />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "heromain.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default ServicesPage
