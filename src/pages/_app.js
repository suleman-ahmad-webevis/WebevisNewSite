import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
import "@fontsource/outfit";

const GlobalStyle = createGlobalStyle`
  /* Scrollbar styles */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 5px;
  }

  /* Additional styles for cross-browser compatibility */
  * {
    scrollbar-width: thin;
    scrollbar-color: #888 #f1f1f1;
  }

  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  *::-webkit-scrollbar-thumb {
    background: linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%);
    border-radius: 24px;
  }

  /* Reset styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Fonts */
  @font-face {
    font-family: 'GT Haptik';
    src: url("/Fonts/GTHaptik.ttf");
  }

  @font-face {
    font-family: 'GTHaptikbold';
    src: url("/Fonts/GTHaptikbold.ttf");
  }

  @font-face {
    font-family: 'GeneralSansBold';
    src: url("/assets/Fonts/GeneralSansRegular.ttf");
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Outfit", "GeneralSansBold", sans-serif;
    min-width: 375px;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    cursor: pointer;
    font-family: "outfit" !important;
  }

  input {
    border: none;
  }

  .scale-up-center {
    -webkit-animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)
      both;
    animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }

  @-webkit-keyframes scale-up-center {
    0% {
      /* -webkit-transform: scale(0.5); */
      /* transform: scale(0.5); */
      transform: translateY(-10px);
    }
    100% {
      /* -webkit-transform: scale(1); */
      /* transform: scale(1); */
      transform: translateY(0px);

    }
  }

  @keyframes scale-up-center {
    0% {
      /* -webkit-transform: scale(0.7); */
           transform: translateY(-50px);
           opacity: 0;
           visibility: hidden;

    }
    100% {
      /* -webkit-transform: scale(1); */
           transform: translateY(0px);
            opacity: 1;
           visibility: visible;

    }
  }
`;

const theme = {};

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <link
          rel="preload"
          href="../assets/Fonts/GeneralSansRegular.ttf"
          as="font"
          type="font/ttf"
          crossorigin="anonymous"
        />
      </Helmet>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
