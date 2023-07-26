import React from "react";
import { Container } from "src/components/Container.styles";
import { Flex } from "src/components/Flex.styles";
import { MapContainer } from "./Map.styles";
import lahore from "../../../assets/images/ContactUs/Lahore.png";
import pakistan from "../../../assets/images/ContactUs/Pakistan.png";
import usa from "../../../assets/images/ContactUs/USA.png";
import uk from "../../../assets/images/ContactUs/UK.png";
import Image from "next/image";

const Map = () => {
  return (
    <MapContainer>
      <Container resPadding="0px">
        {/* <Flex> */}
        <div className="office-map">
          <h1>Webevis Offices</h1>
          <div className="offices">
            <div className="address USA">
              <div className="img-box">
                <Image src={usa} alt="USA" />
              </div>
              <div className="address-text">
                <span>USA</span>
                <p>600 N board street suit 5# 3260 middletown DE 19709</p>
              </div>
            </div>
            <div className="address UK">
              <Image src={uk} alt="UK" />
              <div className="address-text">
                <span>UK</span>
                <p>18-B, 13 Northfield place Bradford BDB 8AE</p>
              </div>
            </div>
            <div className="address PAK">
              <Image src={pakistan} alt="Pakistan" />
              <div className="address-text">
                <span>Pakistan</span>
                <p>65L Gulberg 2, Lahore, Punjab 54660</p>
              </div>
            </div>
            <div className="address LHR">
              <Image src={lahore} alt="Lahore" />
              <div className="address-text">
                <span>Lahore</span>
                <p>42 A1 Gulberg 3, Lahore, Punjab 54660</p>
              </div>
            </div>
          </div>
        </div>
        {/* </Flex> */}
      </Container>
    </MapContainer>
  );
};

export default Map;
