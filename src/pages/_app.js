import { createGlobalStyle, ThemeProvider } from "styled-components";
import "@fontsource/outfit";

const GlobalStyle = createGlobalStyle`

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
h1{
}
h2,h3,h4{
margin: 0;
} 

`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
