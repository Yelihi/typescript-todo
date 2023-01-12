import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *{
    box-sizing: border-box;
    margin: 0;
  }

  body{
    font-family: ${({ theme }) => theme.font.Kfont};
  }

  input,
  input:active,
  input:focus{
    border: none;
    outline: none;
    -webkit-appearance:none;
    -moz-appearance: none;
    -o-appearance:none;
    appearance: none;
    font-family: ${({ theme }) => theme.font.Efont};
  }

  button {
    border: none;
    cursor: pointer;
    font-family: ${({ theme }) => theme.font.Efont};
  }
  
`;
