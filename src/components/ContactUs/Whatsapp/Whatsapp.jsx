import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { StyledWhatsapp } from "./Whatsapp.styles";

const Whatsapp = () => {
  return (
    <StyledWhatsapp>
      <div className="App">
        <FloatingWhatsApp
          phoneNumber="+18572087832"
          accountName="Webevis Technologeis"
          avatar="./logo.png"
          statusMessage="Replies within 1 hour"
          chatMessage="How can we help?"
          darkMode={true}
          placeholder="Message"
          allowEsc
          allowClickAway
        />
      </div>
    </StyledWhatsapp>
  );
};

export default Whatsapp;
