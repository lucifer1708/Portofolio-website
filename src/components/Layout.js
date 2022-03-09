import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Navbar from "./Navbar/Navbar";
import styled from "styled-components";
import Footer from "./Footer";


const Master = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Container = styled.div`
  margin: 8rem 10rem 0;
  flex: 1 0 auto;

  @media screen and (max-width: 780px) {
    margin: 8rem 5rem 0;
  }
  @media screen and (max-width: 590px) {
    margin: 4rem 0rem 0;
  }
`;

const Layout = ({ bgColor, children }) => {
          const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
        <Master>
          <title>PORTFOLIO | SUMIT DHIMAN</title>
          <Navbar siteTitle={data.site.siteMetadata.title} />
          <Container>{children}</Container>
          <Footer />
        </Master>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
