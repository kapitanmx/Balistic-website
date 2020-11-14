import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';


const Hero = () => {
    const data = useStaticQuery(graphql`
    query {
        placeholderImage: file(relativePath: { eq: "balistic.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
    if(!data?.placeholderImage?.childImageSharp?.fluid){
        return(<h3>Picture not found</h3>)
    }
    return (
        <Img fluid={data?.placeholderImage?.childImageSharp?.fluid}/>
    )
}

export { Hero }