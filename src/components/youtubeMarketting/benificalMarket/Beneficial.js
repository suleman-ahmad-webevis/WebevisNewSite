import React from "react";
import product from "./BeneficialMap";
import { BCard, FlexCard, FlexText } from "./Beneficial.style";
import Image from "next/image";
import { Container } from "src/components/Container.styles";

const Beneficial = () => {
  return (
    <Container>
      <FlexText>
        <h1>How YouTube Marketing Beneficial For Business?</h1>
        <p>
          YouTube, being the most entertaining and traffic-rich platform,
          provides inventive opportunities to advertise your business through
          video posting. For successful business, YouTube marketing is the
          latest advertising technique which is helpful for Video Promotion as
          it gains fast popularity.
        </p>
      </FlexText>
      <FlexCard>
        {product.map((el, ind) => (
          <BCard className="back" key={ind}>
            <Image src={el.image} alt="" />
            <h1> {el.title}</h1>
            <p>{el.description}</p>
          </BCard>
        ))}
      </FlexCard>
    </Container>
  );
};

export default Beneficial;
