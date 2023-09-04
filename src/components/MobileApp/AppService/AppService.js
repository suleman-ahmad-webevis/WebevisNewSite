import React from "react";
import { Service, ServiceHolder, WebCard } from "./AppService.styles";
import { Container } from "src/components/Container.styles";
import Link from "next/link";
import Image from "next/image";
import arrow from "../../../assets/images/Services/WebDevelopmentServices/arrow2.png";
import { appData } from "./AppData";

const AppService = () => {
  return (
    <ServiceHolder>
      <Container>
        <Service>
          <div className="header">
            <h2>
              Mobile App <br /> Development Services
            </h2>
            <p>
              We promise you top-notch service as we have the best-in- class web
              and mobile app development service team. With a grade of pure
              professionals, project delivery is always on schedule with strict
              adherence to coding standards.
            </p>
          </div>
          <WebCard>
            {appData.map((el, ind) => (
              <Link key={ind} href={el.link}>
                <div className="card">
                  <h3>{el.title}</h3>
                  <p>{el.description}</p>
                  <Link href={el.link}>
                    <Image src={arrow} alt="arrow" />
                  </Link>
                </div>
              </Link>
            ))}
          </WebCard>
        </Service>
      </Container>
    </ServiceHolder>
  );
};

export default AppService;
