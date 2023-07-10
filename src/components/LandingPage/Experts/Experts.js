import React from "react";
import { Container } from "src/components/Container.styles";
import { Expert, ExpertButton, Pictures } from "./Experts.styles";
import { Flex } from "src/components/Flex.styles";
import Group from "../../../assets/images/Experts/Group-1.png";
import Meeting from "../../../assets/images/Experts/Meeting.png";
import Senior from "../../../assets/images/Experts/Senior.png";
import arrow from "../../../assets/images/Experts/arrow.png";
import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import ExpertSlider from "./ExpertSlider";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material";
import Link from "next/link";
import { PrimaryButton } from "src/components/Button.styles";
const Experts = () => {
  const themes = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 971,
        lg: 1280,
        xl: 1920,
        // Add your custom breakpoints here
        tablet: 768,
        // Add more if needed
      },
    },
  });
  const isTablet = useMediaQuery(themes.breakpoints.down("tablet"));

  return (
    <Expert>
      <Container>
        <div className="Head">
          <h2>Hire Our Dedicated Experts</h2>
          <p>Maximize your productivity with tailored resources.</p>
          <Link href="/Expert-Pool">
            <ExpertButton>
              Experts Pool
              <LuArrowUpRight size={25} />
            </ExpertButton>
          </Link>
        </div>
        {!isTablet ? (
          <Pictures>
            <div>
              <Image src={Group} alt="Group" />
            </div>
            <div>
              <Link href="/Expert-Pool">
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
        ) : (
          <ExpertSlider />
        )}
      </Container>
    </Expert>
  );
};

export default Experts;
