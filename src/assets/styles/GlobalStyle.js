import { createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap-grid.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
            max-width: 1340px;
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
    
    section {
        margin: 50px 0;
        @media ${device.lg} {
            margin: 35px 0;
        }
        @media ${device.xs} {
            margin: 25px 0;
        }
    }
    
    figure {
        margin: 0;
    }
    
    img {
        vertical-align: middle;
        max-width: 100%;
    }
    
    .d1 {
        font-size: 10.2rem;
        @media ${device.md} {
            font-size: 8.16rem;
        }
    }
    
    .d2 {
        font-size: 7rem;
        @media ${device.md} {
            font-size: 5.6rem;
        }
    }
    
    .d3 {
        font-size: 6rem;
        @media ${device.md} {
            font-size: 4.8rem;
        }
    }
    
    .small {
        font-size: 1.3rem;
    }
    
    .title {
        font-size: 1.6rem;
    }
    
    .sub-title {
        font-size: 1.8rem;
        margin-bottom: 10px;
        display: block;
    }
  
   h1, h2, h3, h4, h5, h6 {
        margin: 0 0 0.5em;
        line-height: 1.15;
    }
      
    h1 {
        font-size: 4.8rem;
        @media ${device.md} {
            font-size: 3.8rem;
        }
    }
    h2 {
        font-size: 3.4rem;
        @media ${device.md} {
            font-size: 2.7rem;
        }
    }
    h3 {
        font-size: 2.8rem;
        @media ${device.md} {
            font-size: 2.25rem;
        }
    }
    
    h4 {
        font-size: 2.4rem;
        @media ${device.md} {
            font-size: 2rem;
        }
    }
    h5 {
        font-size: 1.8rem;
    }
    h6 {
        font-size: 1.6rem;
    }
    p {
        margin: 0 0 1.15rem;
        line-height: 25px;
        letter-spacing: 0;
    }
    
`;

export default GlobalStyle;
