import React from "react";
import { AppContent, AppHolder } from "./AppService.styles";
import { Container } from "src/components/Container.styles";
import ColImg1 from "../../../../public/assets/images/Android-App/App-img-1.png";
import Image from "next/image";
import { appData } from "./AppData";

const AppService = () => {
  return (
    <AppHolder>
      <Container>
        <AppContent>
          <h2>Custom Android App Development Services</h2>
          <div className="Col-holder">
            {appData.map((item, ind) => (
              <div key={ind} className="Col">
                <div className="img-holder">
                  <Image src={item.image} alt="ColImg1" />
                </div>
                <div dangerouslySetInnerHTML={{ __html: item.heading }}></div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </AppContent>
      </Container>
    </AppHolder>
  );
};

export default AppService;
