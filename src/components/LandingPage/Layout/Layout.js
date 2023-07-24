import Head from "next/head";
import Link from "next/link";
import Navbar from "src/components/LandingPage/Layout/Navbar/Navbar";
import Footer from "src/components/LandingPage/Layout/Footer/Footer";


export default function Layout({

  children,
  title = "Webevis",
  description = "Webevis Description",
}, props) {
  return (
    <div id="wrapper">
      <Head>
        <title>{title}</title>
        {/* <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" /> */}
        {/* <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        /> */}
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <meta name="description" content={description} />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Navbar />
      <main {...props}>{children}</main>
      <Footer />
    </div>
  );
}
