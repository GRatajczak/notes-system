import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,800;1,400&display=swap');
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
        font-size: 62.5%;
        scroll-behavior: smooth;
        font-size: 1.6rem;
        font-size: 2.2rem;
        @include breakpoint-max('large') {
        font-size: 61%;
        }
        @include breakpoint-max('s-tablet') {
        font-size: 60%;
        }
        @include breakpoint-max('mobile') {
        font-size: 58%;
    }
    }
    body {
        font-family: Montserrat, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
    }
    a, button {
        font-family: Montserrat, sans-serif;

    }
`;
