import { createGlobalStyle, ThemeProvider } from "styled-components";
import "@fontsource/outfit";

const GlobalStyle = createGlobalStyle`
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

  
*{
  margin: 0;
  padding: 0;
    box-sizing: border-box;

  
}
  body{
   
     margin: 0;
  padding: 0;
    box-sizing: border-box;
    font-family: "Outfit";
    @font-face {
      font-family:GT Haptik ;
      src: url("Fonts/GTHaptik.ttf");
    }
    @font-face {
      font-family:GTHaptikbold;
      src: url("Fonts/GTHaptikbold.ttf");
    }
    @font-face {
      font-family:GeneralSansBold;
      src: url("Fonts/GeneralSansRegular.ttf");
    }
    
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
    cursor: pointer;
  }
  button{
    border: none;
    cursor: pointer;
}
input{
  border: none;
}
  

`;

const theme = {};

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
