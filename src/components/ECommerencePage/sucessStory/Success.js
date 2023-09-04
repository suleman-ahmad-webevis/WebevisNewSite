import React from "react";
import { SuccessSec } from "./Success.style";
import { Container } from "src/components/Container.styles";
import Image from "next/image";
import success from "../../../../public/assets/images/ECommerencePage/success.png";

const Success = () => {
  return (
    <Container>
      <SuccessSec>
        <div className="success_image">
          <Image src={success} alt="success" />
        </div>
        <div className="success_text">
          <h2>
            Success Stories Of Our eCommerce <span>App Development</span>{" "}
          </h2>
          <h3>Label exChange eCommerce App</h3>
          <p>
            Designer apparels are not just a bling thing but a statement for
            modern youth. But finding all the designer apparel in one place is a
            hassle, with several leading brands having separate stores.
            LabelXChange wanted an elegant eCommerce website solution that could
            provide an enhanced user experience.{" "}
          </p>
        </div>
      </SuccessSec>
    </Container>
  );
};

export default Success;
