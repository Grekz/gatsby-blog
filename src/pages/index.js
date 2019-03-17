import React from "react"
import { Link, graphql } from "gatsby"

const PostLink = ({node: {slug, title}}) => <li>
  <Link to={slug}>{title}</Link>
</li>

const IndexPage = ({data}) => (
  <ul>
    {data.allContentfulPost.edges.map( ({node}) => <PostLink node={node} />)}
  </ul>
)

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulPost ( 
      filter: {
        node_locale: { eq:"en" }
      },
      sort:{ fields: [publishDate], order: DESC }
    ){
      edges {
        node {
          title
          slug
          content {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`