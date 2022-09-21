import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    background-color: ${({ theme }) => theme.colors.body.background};
    color: ${({ theme }) => theme.colors.body.text};
    min-width: 400px;
  }

  * {
    box-sizing: border-box;
  }
`;
