import React from "react"
import Link from "gatsby-link"
import Helmet from 'react-helmet'
import Header from '../components/Header'
import BlogCard from '../components/BlogCard'
import PaginateLink from '../components/PaginateLink'
import Footer from '../components/Footer'
 
const IndexPage = ({ data, pathContext }) => {
  const { group, index, first, last } = pathContext
  const previousUrl = index - 1 == 1 ? "" : (index - 1).toString()
  const nextUrl = (index + 1).toString()
  const total = data.allMarkdownRemark.edges.filter(post => post.node.frontmatter.templateKey === 'blog-post').length

  return (

      <div className="home-template">

        <Helmet>
            <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
        </Helmet>

      <Header image='https://res.cloudinary.com/dz09rnbhe/image/upload/v1511348530/witness-bamboo-wallpaper_rhtdxq.jpg' title="Câu Chuyện Bí Mật" tagline="Mở Cửa Trái Tim.." />
      
        <main id="site-main" className="site-main outer" role="main">

            <div className="inner">

                <div className="post-feed">

                    {group.map(({ node }) => (

                        <BlogCard key={ node.id } path={ node.frontmatter.path } image={ node.frontmatter.image }  tag={ node.frontmatter.tags[0] } title={ node.frontmatter.title } date ={ node.frontmatter.date } description={ node.frontmatter.description } authorImage={ node.frontmatter.authorImage } authorName={ node.frontmatter.author } />

                    ))}

                </div>

                <div className="paginatation">
                    <div className="previousLink">
                        <PaginateLink tag={ first } url={ previousUrl } text="Bài cũ" />
                    </div>

                    <p>{index} of { Math.ceil(total/12)}</p>

                    <div className="nextLink">
                        <PaginateLink tag={ last } url={ nextUrl } text="Bài mới" />
                    </div>

                </div>

            </div>
        </main>

        <Footer />

    </div>
    
  )
}

export default IndexPage

export const pageQuery = graphql`
query IndexQuery {
  allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
    totalCount
    edges {
      node {
        excerpt(pruneLength: 40)
        id
        frontmatter {
          title
          templateKey
          date(formatString: "MMMM DD, YYYY")
          path
        }
      }
    }
  }
}
`;