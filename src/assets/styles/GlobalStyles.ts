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

  .bus {
    background-image: url('https://img.icons8.com/emoji/96/000000/oncoming-bus.png');
    background-size: cover;
    width: 50px;
    height: 50px;
    margin-top: -18px;
  }

  .stoppingBusPoint {
    background-image: url('https://img.icons8.com/fluency/96/000000/map-pin.png');
    background-size: cover;
    width: 50px;
    height: 50px;
    margin-top: -18px;
  }
 `