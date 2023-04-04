import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root{
    font-size: 62.5%;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color:${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.6rem;
  }

  body, button, input, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
    
  }
  button:hover, a:hover {
    filter: brightness(0.9);
    
  }

  
`
