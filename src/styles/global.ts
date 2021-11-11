import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;

    max-width: 1440px;
    margin: 0 auto;
  }

  body, input, textarea, button {
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  p {
    font-size: 1rem;
  }

  h1 {
    font-size: 2.625rem;
  }

  h2 {
    font-size: 1.875rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.125rem;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
