import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
      font-family: 'Pokemon Solid';
      font-style: normal;
      font-weight: 400;
      src: local('Pokemon Solid'), url('https://fonts.cdnfonts.com/s/17890/Pokemon Solid.woff') format('woff');
  }

  * {
    font-family: Arial;
    font-weight: 100;
    color: rgb(52, 53, 57)
  }

  html {
    background: rgb(226, 227, 234);
  }

  input {
    border: none;
    background: none;
    outline: none;
  }
  
  button {
    cursor: pointer;
    background: none;
    border: none;
  }

  body {
    overflow: hidden;
    overflow-y: scroll;

  }

  #root {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  }
`