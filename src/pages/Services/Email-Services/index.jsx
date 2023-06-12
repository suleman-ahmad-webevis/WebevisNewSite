import React from "react";
import Layout from "src/components/Layout/Layout";
import Hero from "src/components/EmailServices/heroSection/Hero";
import EmailMarketing from "src/components/EmailServices/emailMarketing/EmailMarketing";
import Work from "src/components/EmailServices/work/Work";
import Compaings from "src/components/EmailServices/compaings/Compaings";
import { Container } from "src/components/Eamil_Container.style";
import OutCome from "src/components/EmailServices/outCome/OutCome";
import EmailProcess from "src/components/EmailServices/emailProcess/EmailProcess";
import Book from "src/components/EmailServices/book/Book";
import Client from "src/components/OurClient/Client";

import GlobalStyle from "src/global.styles";
import Trusted from "src/components/Client/Client";
const index = ({ pageProps }) => {
  return (
    <>
      <Layout {...pageProps}>
        <GlobalStyle />
        <Container>
          <Hero />
          <Trusted />
          <EmailMarketing />
          <Work />
          <Compaings />
          <OutCome />
          <EmailProcess />
          <Client />
          <Book />
        </Container>
      </Layout>
    </>
  );
};
export default index;
