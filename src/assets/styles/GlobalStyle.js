import { createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap-grid.css";

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
    
    @media (min-width: 1200px) {
        .container {
            max-width: 1650px;
            padding: 0 100px;
        }
    }
    img {
        vertical-align: middle;
    }
    
    h1 {
        font-size: 4.8rem;
        margin: 0 0 30px;
        @media (max-width: 576px) {
            font-size: 3.5rem;
            margin: 0 0 20px;
        }
    }
    h2 {
        font-size: 3.4rem;
    }
    h3 {
        font-size: 2.8rem;
    }
    h5 {
        font-size: 1.8rem;
    }
    h6 {
        font-size: 1.6rem;
    }
`;

export default GlobalStyle;
