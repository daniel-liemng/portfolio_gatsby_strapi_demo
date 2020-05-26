import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"

import SEO from "../components/SEO"

// ...GatsbyImageSharpFluid
export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        title
        info
        stack {
          id
          title
        }
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const About = ({
  data: {
    allStrapiAbout: { nodes },
  },
}) => {
  const {
    title,
    info,
    stack,
    image: {
      childImageSharp: { fluid: img },
    },
  } = nodes[0]

  return (
    <Layout>
      <SEO title="About" description="About page" />
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={img} className="about-img" />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map(item => (
                <span key={item.id}>{item.title}</span>
              ))}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default About
