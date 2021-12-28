import './styles.css';
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* color: var(--white); */
  }

  html, body, :root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: 'Raleway', sans-serif;
    font-weight: normal;
  }

  html {
    background: var(--primary);
    color: var(--white);
  }

  :root {
    --primary: #282C30;
    --secondary: #0F1519;
    --white: #fff;
    --gray: #7A7A7A;
    font-size: 20px;
  }
 `