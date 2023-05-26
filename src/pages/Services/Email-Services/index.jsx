import React from "react";
import Layout from "src/components/Layout/Layout";
import Hero from "src/components/EmailServices/heroSection/Hero";
import ImageBar from "src/components/EmailServices/imageBar/ImageBar";
import EmailMarketing from "src/components/EmailServices/emailMarketing/EmailMarketing";
import Work from "src/components/EmailServices/work/Work";
import Compaings from "src/components/EmailServices/compaings/Compaings";
import { Container } from "src/components/Eamil_Container.style";
import OutCome from "src/components/EmailServices/outCome/OutCome";
import EmailProcess from "src/components/EmailServices/emailProcess/EmailProcess";
import Book from "src/components/EmailServices/book/Book";
import FeedBackSlider from "src/components/EmailServices/feedBack/FeedBack";
const index = ({ pageProps }) => {
  return (
    <>
      <Layout {...pageProps}>
      <Container>
        <Hero />
        <ImageBar />
        <EmailMarketing />
        <Work/>
        <Compaings/>
        <OutCome/>
        <EmailProcess/>
        <Book/>
        <FeedBackSlider/>
      </Container>
      </Layout>
    </>
  );
};
export default index;
