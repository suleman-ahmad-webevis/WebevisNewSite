import React from "react";
import Layout from "src/components/Layout/Layout";
import Question from "src/components/LandingPage/Question/Question";
import GetInTouch from "src/components/ContactUs/GetInTouch/GetInTouch";
import Map from "src/components/ContactUs/Map/Map";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Whatsapp from "src/components/ContactUs/Whatsapp/Whatsapp";
const ContactUs = () => {
  return (
    <Layout>
      <GetInTouch />
      <Map />
      <Question bg="none" />
      <Whatsapp />
    </Layout>
  );
};

export default ContactUs;
