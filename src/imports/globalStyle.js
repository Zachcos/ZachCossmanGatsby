import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  ul {
    display: inline-block !important;
  }

  body {
    background-position: 0% 0%;
    background-size: auto;
    background-repeat: auto;
    background-attachment: scroll;
    background-color: #ffffff;
    color: #777777;
    font-family: "Open Sans", sans-serif;
    font-size: 15px;
    line-height: 1.8em;
    text-transform: none;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    -webkit-font-smoothing: subpixel-antialiased !important;
    -webkit-background-size: auto;
    display: block;
    padding: 80px;
  }

  #container {
    max-width: 1100px;
    padding: 100px 100px 0;
    border: 2px #dddddd solid;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
