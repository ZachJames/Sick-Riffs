import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html, body {
        background-color: #f2f2f2;
        font-family: 'Lato', sans-serif;
    }
`
