import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

  }

  body {
    background: #222222;
    color: #312E38;
    font-family: 'Helvetica Neue', 'Helvetica', 'Roboto', Arial, sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;

  }

  body, input, button {
    font-size: 16px;
    border: 0;

  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }

  button {
    cursor: pointer;
    
  }

  ul{
    list-style: none;
  }

  a{
    text-decoration:none; 
  }
  }


`;

