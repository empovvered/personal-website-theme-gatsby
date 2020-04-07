import { createGlobalStyle } from "styled-components"
import "bootstrap/dist/css/bootstrap-grid.css"

const GlobalStyle = createGlobalStyle`
    
    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
   
    html {
        font-size: 62.5%;
    }
   
    body {
        font-size: 1.5rem;
        margin: 0;
        padding: 0;
        font-family: "Livvic", sans-serif;
    }
    img {
        vertical-align: middle;
    }
`

export default GlobalStyle
