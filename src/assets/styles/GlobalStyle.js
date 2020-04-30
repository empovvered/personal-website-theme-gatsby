import { createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap-grid.css";
import { device } from "./mediaQueries";

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
        line-height: 1.33;
    }
    
    @media (min-width: 1200px) {
        .container {
            max-width: 1650px;
            padding: 0 100px;
        }
    }
    
    ::-webkit-scrollbar {
        width: 5px;
        background-color: #f2f4f8;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: rgb(20, 18, 19);
        border-width: 2px;
        border-style: solid;
        border-color: rgb(38, 38, 38);
        border-image: initial;
    }
  
    p {
        margin: 0 0 1.15rem;
    }
    
    h1, h2, h3, h4, h5, h6 {
        margin: 0 0 1.05rem;
        line-height: 1.15;
    }
    
    h1 {
        font-size: 4.8rem;
        margin: 0 0 30px;
        @media ${device.lg} {
            font-size: 3.8rem;
            margin: 0 0 20px;
        }
    }
    h2 {
        font-size: 3.4rem;
        @media ${device.lg} {
            font-size: 2.7rem;
            margin: 0 0 20px;
        }
    }
    h3 {
        font-size: 2.8rem;
        @media ${device.lg} {
            font-size: 2.25rem;
            margin: 0 0 20px;
        }
    }
    h5 {
        font-size: 1.8rem;
        @media ${device.lg} {
            font-size: 1.6rem;
        }
    }
    h6 {
        font-size: 1.6rem;
        @media ${device.lg} {
            font-size: 1.45rem;
        }
    }
`;

export default GlobalStyle;
