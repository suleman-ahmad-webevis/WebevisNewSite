import React from "react";
import { Container } from "src/components/Container.styles";
import { Expert, ExpertButton, Pictures } from "./Experts.styles";
import Group from "../../../../public/assets/images/Homemain/Group-1.jpg";
import Meeting from "../../../../public/assets/images/Homemain/Meeting.jpg";
import Senior from "../../../../public/assets/images/Homemain/Senior.jpg";
import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";
import "swiper/css";
import "swiper/css/pagination";
import ExpertSlider from "./ExpertSlider";
import Link from "next/link";
import { PrimaryButton } from "src/components/Button.styles";
const Experts = () => {


  return (
    <Expert>
      <Container>
        <div className="Head">
          <h2>Tap Into Our Skilled Professionals</h2>
          <p>Get exceptional solutions to accelerate your business forward</p>
          <Link href="/expert-pool">
            <ExpertButton>
              Experts Pool
              <LuArrowUpRight size={25} />
            </ExpertButton>
          </Link>
        </div>
        <Pictures>
          <div>
            <Image src={Group} alt="Group" />
          </div>
          <div>
            <Link href="/expert-pool">
              <ExpertButton>
                Experts Pool
                <LuArrowUpRight size={25} />
              </ExpertButton>
            </Link>
            <div>
              <Image src={Meeting} alt="Meeting" />
            </div>
          </div>
          <div>
            <Image src={Senior} alt="Senior" />
          </div>
        </Pictures>
        <ExpertSlider />
      </Container>
    </Expert>
  );
};

export default Experts;
