import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Badge from '@material-ui/core/Badge';

import Hero from '../components/hero';
import Layout from '../components/layout';
import ArticlePreview from '../components/article-preview';

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allContentfulBlogPost.edges');
    const collections = get(this, 'props.data.allContentfulCollection.edges');
    const [author] = get(this, 'props.data.allContentfulPerson.edges');
    console.log(collections);
    return (
      <Layout location={this.props.location} hero={<Hero data={author.node} />}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <Typography variant="h4">Top Categories</Typography>
          <Grid container spacing={24}>
            {collections.map(({ node }) => {
              const products = Object.keys(node.products).length;
              const label = products === 1 ? 'product' : 'products';
              return (
                <Grid item key={node.slug} sm={4}>
                  <Card>
                    <Img alt={node.title} fluid={node.image.fluid} />
                    <Typography>
                      {products} {label}
                    </Typography>
                    <Typography variant="h5">{node.title}</Typography>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
          <div className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulCollection {
      edges {
        node {
          title
          slug
          products {
            title
          }
          image {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1140
              maxHeight: 400
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;
