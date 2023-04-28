import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    --primary-color: #222222;
    --secondary-color: #F9DBBB;
    --third-color:rgb(232, 249, 253, 0.7);
    --forth-color: rgb(252, 41, 71,0.7);
    --text-color: white;
    --font-size-title: 12;
    --font-size-subtitle:8;
  }
`;
