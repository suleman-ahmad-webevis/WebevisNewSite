import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { StyledWhatsapp } from "./Whatsapp.styles";

const Whatsapp = () => {
  return (
    <StyledWhatsapp>
      <div className="App">
        <FloatingWhatsApp
          phoneNumber="+923082550239"
          accountName="Webevis Technologeis"
          avatar="./Logo.jpg"
          statusMessage="Replies within 1 hour"
          chatMessage="How can we help?"
          darkMode={true}
          allowEsc
          allowClickAway
        />
      </div>
    </StyledWhatsapp>
  );
};

export default Whatsapp;
