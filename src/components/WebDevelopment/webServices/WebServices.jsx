import React from "react";
import { WebSec, WebCard } from "./WebServices.style";
import { Container } from "src/components/Container.styles";
import arrow from "../../../assets/images/Services/WebDevelopmentServices/arrow2.png";
import Image from "next/image";
import Link from "next/link";
import { WebItem } from "./WebData";

const WebServices = () => {
  return (
    <Container>
      <WebSec>
        <div className="web_texting">
          <h2>Web Development Services</h2>
          <p>
            We promise you top-notch service as we have the best-in-class web
            development service team. With a grade of pure professionals,
            project delivery is always on schedule with strict adherence to
            coding standards.
          </p>
        </div>
        <WebCard>
          {WebItem.map((el, ind) => (
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
      </WebSec>
    </Container>
  );
};

export default WebServices;
