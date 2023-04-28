import { createGlobalStyle } from "styled-components";
import { Advent_Pro } from "@next/font/google";

const adventPro = Advent_Pro({ subsets: ["latin"] });
export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    /* font-family: system-ui; */
    font-family: adventPro;
    --primary-color: #222222;
    --secondary-color: #F9DBBB;
    --third-color:rgb(232, 249, 253, 0.7);
    --forth-color: rgb(252, 41, 71,0.7);
    --text-color: white;
    --font-size-title: 12;
    --font-size-subtitle:8;
  }
`;
