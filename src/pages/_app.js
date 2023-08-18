import { useEffect, useState } from "react";
import { createGlobalStyle, ThemeProvider, css } from "styled-components";
import { useRouter } from "next/router";
import "src/components/Loader/loader.css";

// import "@fontsource/outfit";
import Loader from "src/components/Loader";
import Whatsapp from "src/components/ContactUs/Whatsapp/Whatsapp";

const GlobalStyle = createGlobalStyle`

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }
   body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Outfit", 'Fredoka',  sans-serif;
    min-width: 375px;
  }
#wrapper{
  overflow: hidden;
  position: relative;
  padding-top:80px ;
  @media screen and (max-width :1019px) {
    padding-top: 60px;
  }
}
  /* Scrollbar styles */
  ::-webkit-scrollbar {
    width: 5px;
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
    width: 5px;
  }

  *::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  *::-webkit-scrollbar-thumb {
    background: linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%);
    border-radius: 24px;
  }

  
  
 

 

 
  .error-page{
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    img{
      display: block;
      max-width: 100%;
      height: auto;
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
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsLoading(true);
      disableScroll();
    };

    const handleRouteChangeComplete = () => {
      setIsLoading(false);
      enableScroll();
    };
    const disableScroll = () => {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.height = "100%";
      document.documentElement.style.height = "100%";
    };

    const enableScroll = () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.height = "";
      document.documentElement.style.height = "";
    };
    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    window.onload = () => {
      setIsLoading(false);
    };
    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      window.onload = null;
    };
  }, [router]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {isLoading && (
        <div
          css={`
            position: fixed;
            inset: 0;
            width: 100%;
            overflow: hidden;
            z-index: 99999;
            /* height: 100vh; */
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(
              180deg,
              rgba(25, 56, 58, 0.6) 0%,
              black 100%
            );
            backdrop-filter: blur(12.5px);
          `}
        >
          <Loader />
        </div>
      )}
      <Component {...pageProps} />
      <Whatsapp />
    </ThemeProvider>
  );
}
