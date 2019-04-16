import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Navigation from './navigation';
import GlobalStyle from '../imports/globalStyle';

const Container = styled.div`
  max-width: 1100px;
  padding: 100px 100px 0;
  border: 2px #dddddd solid;
  margin: 0 auto;
`;

const Page = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 80px 0;
`;

const Logo = styled.h1`
  font-size: 34px;
  letter-spacing: 3px;
  font-family: 'Varela Round', sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  font-size: normal;
  line-height: 1em;
  width: 100%;
  text-align: center;
  display: inline-block;
  margin: 0;
  a {
    text-decoration: none;
    color: #222222;
  }
  a:hover {
    color: #555555;
  }
`;

const SiteInfo = styled.div`
  clear: both;
  padding-top: 1.5em;
  display: flex;
  justify-content: space-between;
  font-family: 'Varela Round', sans-serif;
  font-size: 12px;
  line-height: 2em;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 3px;
  font-weight: normal;
  font-size: normal;
  color: #bbb;
  text-align: center;
  .email {
    text-align: left;
  }
  .city {
    text-align: right;
  }
`;

export default ({ children }) => (
  <React.Fragment>
    <Helmet>
      <title>ZachCossman.com</title>
      <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i" rel="stylesheet" />
    </Helmet>
    <Container>
      <Logo>
        <a href="/">Zach Cossman</a>
      </Logo>
      <SiteInfo>
        <div className="email">ZACHCOS@GMAIL.COM</div>
        <div className="city">NEW YORK, NY</div>
      </SiteInfo>
      <Navigation />
      <Page>{children}</Page>
      <GlobalStyle />
    </Container>
  </React.Fragment>
);
