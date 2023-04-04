import { createGlobalStyle, ThemeProvider } from "styled-components";
import "@fontsource/outfit";

const GlobalStyle = createGlobalStyle`

  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Outfit";
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
    font-size: 16px;
 
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
  font-weight: 700;
}
h2,h3,h4{
margin: 0;
font-weight: 500;
} 
p{
  font-size: 20px;
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
