import React from "react";
import { WebSec, WebCard } from "./WebServices.style";
import { Container } from "src/components/Container.styles";
import arrow from "../../../assets/images/Services/WebDevelopmentServices/arrow2.png";
import Image from "next/image";
import Link from "next/link";

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
          <div className="card">
            <h3>
              Web App <br /> Development
            </h3>
            <p>
              Develop visually pleasing appsoptimized to swiftly grow your
              global business revenue.
            </p>
            <Link href="/">

            <Image src={arrow} alt="arrow" />
            </Link>
          </div>
          <div className="card">
            <h3>
              UI/UX <br /> Designing
            </h3>
            <p>
              Develop visually pleasing appsoptimized to swiftly grow your
              global business revenue.
            </p>
            <Link href="/">
            <Image src={arrow} alt="arrow" />
            </Link>
          </div>
          <div className="card">
            <h3>
              Graphic <br /> Designing
            </h3>
            <p>
              Develop visually pleasing appsoptimized to swiftly grow your
              global business revenue.
            </p>
            <Link href="/">
            <Image src={arrow} alt="arrow" />
            </Link>
          </div>
          <div className="card">
            <h3>
              UI/UX <br /> Development
            </h3>
            <p>
              Develop visually pleasing appsoptimized to swiftly grow your
              global business revenue.
            </p>
            <Link href="/">
            <Image src={arrow} alt="arrow" />
            </Link>
          </div>
          <div className="card">
            <h3>
              Ecommerce <br /> Development
            </h3>
            <p>
              Develop visually pleasing appsoptimized to swiftly grow your
              global business revenue.
            </p>
            <Link href="/">
            <Image src={arrow} alt="arrow" />
            </Link>
          </div>
          <div className="card">
            <h3>
              WordPress <br /> Development
            </h3>
            <p>
              Develop visually pleasing appsoptimized to swiftly grow your
              global business revenue.
            </p>
            <Link href="">
            <Image src={arrow} alt="arrow" />
            </Link>
          </div>
          <div className="card">
            <h3>Devops</h3>
            <p>
              Develop visually pleasing appsoptimized to swiftly grow your
              global business revenue.
            </p>
            <Link href="/">
            <Image src={arrow} alt="arrow" />
            </Link>
          </div>{" "}
          <div className="card">
            <h3>
              AI <br /> Development
            </h3>
            <p>
              Develop visually pleasing appsoptimized to swiftly grow your
              global business revenue.
            </p>
            <Link href="/">
            <Image src={arrow} alt="arrow" />
            </Link>
          </div>
        </WebCard>
      </WebSec>
    </Container>
  );
};

export default WebServices;
