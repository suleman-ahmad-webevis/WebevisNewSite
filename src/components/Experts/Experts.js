import React from "react";
import { Container } from "src/components/Container.styles";
import { Expert, Pictures } from "./Experts.styles";
import { Flex } from "src/components/Flex.styles";
import Group from "../../assets/images/Experts/Group-1.png";
import Meeting from "../../assets/images/Experts/Meeting.png";
import Senior from "../../assets/images/Experts/Senior.png";
import arrow from "../../assets/images/Experts/arrow.png";
import Image from "next/image";

const Experts = () => {
  return (
    <Expert>
      <Container>
        <div className="Head">
          <h2>Hire Our Dedicated Experts</h2>
          <p>Maximize your productivity with tailored resources.</p>
        </div>
        <Pictures>
          <div>
            <Image src={Group} alt="Group" />
          </div>
          <div>
            <button>
              Experts Pool
              <span class="material-symbols-outlined">north_east</span>
            </button>
            <div>
              <Image src={Meeting} alt="Meeting" />
            </div>
          </div>
          <div>
            <Image src={Senior} alt="Senior" />
          </div>
        </Pictures>
      </Container>
    </Expert>
  );
};

export default Experts;
