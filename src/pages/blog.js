import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"

// ...GatsbyImageSharpFluid
export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        slug
        content
        desc
        date(formatString: "MMMM Do, YYYY")
        id
        category
        title
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

const BlogPage = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      <section className="blog-page">
        <Blogs title="blog" blogs={blogs} />
      </section>
    </Layout>
  )
}

export default BlogPage
