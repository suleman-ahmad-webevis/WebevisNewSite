import React from "react";
import Layout from "src/components/Layout/Layout";
import Hero from "src/components/EmailServices/heroSection/Hero";
import EmailMarketing from "src/components/EmailServices/emailMarketing/EmailMarketing";
import Work from "src/components/EmailServices/work/Work";
import Compaings from "src/components/EmailServices/compaings/Compaings";
import OutCome from "src/components/EmailServices/outCome/OutCome";
import EmailProcess from "src/components/EmailServices/emailProcess/EmailProcess";
import Book from "src/components/EmailServices/book/Book";
import Trusted from "src/components/SocialMedia/Client/Client";
import Question from "src/components/HireDeveloper/Question/Question";
import Client from "src/components/LandingPage/OurClient/Client";
const index = ({ pageProps }) => {
  return (
    <>
      <Layout {...pageProps}>
        <Hero />
        <Trusted margin="0px" />
        <EmailMarketing />
        <Work />
        <OutCome />
        <EmailProcess />
        <Compaings />
        <Client />
        <Book />
        <Question />
      </Layout>
    </>
  );
};
export default index;
