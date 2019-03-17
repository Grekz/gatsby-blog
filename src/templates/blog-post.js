import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby';

const BlogPost = ({data:{contentfulPost: {title, content: {childMarkdownRemark: {html}}}}}) => 
    <div>
        <h1>{title}</h1>         
        <div dangerouslySetInnerHTML={{__html: html}} />
    </div>

BlogPost.propTypes = {
    data: PropTypes.object.isRequired
}

export default BlogPost

export const pageQuery = graphql`
    query blogPostQuery( $slug: String! ) {
        contentfulPost( slug: {eq: $slug } ) {
            title
            slug
            content {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`