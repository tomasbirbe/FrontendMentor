import { createGlobalStyle } from 'styled-components';

const GlobalTheme = createGlobalStyle`
  :root {
    --soft-blue: var(hsl(215, 51%, 70%));
    --cyan: var(hsl(178, 100%, 50%));
    --darkest-blue: var(hsl(217, 54%, 11%));
    --darker-blue: var(hsl(216, 50%, 16%));
    --dark-blue: var(hsl(215, 32%, 27%));
    --white: var(hsl(0, 0%, 100%));
  }
  *,
  *::before,
  *::after {
    margin: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
    font-family: 'Roboto', sans-serif;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  #root {
    isolation: isolate;
  }
`;

export default GlobalTheme;
