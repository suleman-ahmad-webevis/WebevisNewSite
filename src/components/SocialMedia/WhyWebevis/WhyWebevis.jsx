import React from "react";
import { Items, ItemsDetails, MainSec, StorySec } from "./WhyWebevis.styles";
import { Data } from "./Data";
import Image from "next/image";

const WhyWebevis = () => {
  return (
    <MainSec>
      <h1>Why Webevis Technologies?</h1>
      <StorySec>
        <p>
          Teaming up with Webevis Technologies means you can trust our
          experienced social media specialists and graphic designers to tell
          your brand story and grow your social following. We make your social
          media marketing efforts work for your brand to achieve the results
          you’re looking for.
        </p>
        <ItemsDetails>
          {Data.map((elem, ind) => (
            <Items key={ind}>
              <Image src={elem.img} alt={elem.title} />
              <p>{elem.title}</p>
            </Items>
          ))}
        </ItemsDetails>
      </StorySec>
    </MainSec>
  );
};

export default WhyWebevis;
