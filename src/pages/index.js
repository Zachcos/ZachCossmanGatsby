import React from 'react';
import { Helmet } from 'react-helmet';
import GlobalStyle from '../imports/globalStyle';

export class Index extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i" rel="stylesheet" />
        </Helmet>
        <p>This is a test</p>
        <h1>Does this work?</h1>
        <GlobalStyle />
      </div>
    );
  }
}

export default Index;
