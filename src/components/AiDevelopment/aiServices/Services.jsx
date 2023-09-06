import Image from "next/image";
import React from "react";
import { ServiceSec } from "./Services.style";
import { PrimaryButton } from "src/components/Button.styles";
import { ServiceData } from "./ServiceData";

const Services = () => {
  return (
    <ServiceSec>
      <h2>
        Our AI Development Services to Create <br /> Next-generation Enterprise
        Solutions
      </h2>
      <h5>
        Enhance your business performance with our data-driven AI solutions
        crafted leveraging advanced <br />
        AI technologies like deep learning, machine learning, computer vision
        and natural language <br />
        processing.
      </h5>
      <div className="main_services">
        {ServiceData.map((el, ind) => (
          <div className="card" key={ind}>
            <div className="image">
              <Image src={el.image} alt={el.image} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: el.title }}></div>
            <p>{el.descreption}</p>
          </div>
        ))}
      </div>
      <PrimaryButton
        width="390"
        height="60"
        hover="black"
        minWidth="348"
        minheight="40"
        minsize="18"
        radius="12px"
        size="24"
      >
        Contact us for more details
      </PrimaryButton>
    </ServiceSec>
  );
};

export default Services;
