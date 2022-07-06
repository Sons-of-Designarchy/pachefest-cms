import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const IndexPageTemplate = ({ image, title, subheading }) => {
  const heroImage = getImage(image) || image;

  {
    /* <div className="content">
                    <div className="tile">
                      <h1 className="title">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>
                  <Features gridItems={intro.blurbs} /> */
  }
  {
    /* <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/products">
                        See all products
                      </Link>
                    </div>
                  </div> */
  }

  return (
    <div>
      <FullWidthImage img={heroImage} title={title} subheading={subheading} />
      <section className="section section-lime">
        <div className="columns align-items-center py-5">
          <div className="column is-6">
            <div className="content">what to do if you high</div>
          </div>
          <div className="column is-6">
            <p>
              Creemos que podemos vivir una high life todos los días y no solo
              el día del Pachefest...
              <br />
              Así nace if u high un proyecto de difusión de eventos chingones en
              nuestra bella ciudad que a veces pasan desapercibidos dentro de
              tanto ruido.
              <br />
              Cada semana los mejores eventos en la city!
            </p>
          </div>
        </div>
        <div className="d-flex">
          <div className="flex-1">
            <h3 className="uppercase is-size-5 mb-0">
              Eventos esta semana
            </h3>
          </div>
          <Link className="btn" to="/blog">
            Ver todos los eventos
          </Link>
        </div>
        <hr />
        <BlogRoll />
      </section>
      <section>
        <div className="column is-12">
          <h1>¿Tienes un evento?</h1>
          <a href="#anuncia-tu-evento">publicalo en nuestro sitio</a>
        </div>
        <div className="column is-12">
          <h3 className="has-text-weight-semibold is-size-2">High Life</h3>
          <BlogRoll />
          <div className="column is-12 has-text-centered">
            <Link className="btn" to="/blog">
              Ver todas las entradas
            </Link>
          </div>
        </div>
        <div className="section">
          <div className="col-lg-6">
            <h6>Pachefest 2022</h6>
            <p>
              Across three stories of dance floors and stages, our focus is
              underground and unbound music, presented with love.
            </p>
            <a href="#">lee la reseña del evento -></a>
          </div>
          <div className="col-lg-6">pachefest 2022 image</div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
