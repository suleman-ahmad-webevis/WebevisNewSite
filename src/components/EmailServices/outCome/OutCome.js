import React, { useState } from "react";
import {
  DivOne,
  DivTwo,
  OutDiv,
  OutSec,
  OutSection,
  InsideDiv,
  InsideFlex,
  Button,
  FloatingText,
  Floating,
  FloatingImg,
} from "./OutCome.style";
import Image from "next/image";
import img1 from "../../EmailServices/assests/bols.png";
import img2 from "../../EmailServices/assests/clock.png";
import img3 from "../../EmailServices/assests/happy.png";
import img4 from "../../EmailServices/assests/tick.png";
import img5 from "../../EmailServices/assests/outImage.png";
import budget from "../../EmailServices/assests/budget.png";
import lowCcost from "../../EmailServices/assests/low-cost.png";
import target from "../../EmailServices/assests/target.png";
import sql from "../../EmailServices/assests/sql.png";
import experience from "../../EmailServices/assests/experience.png";
import report from "../../EmailServices/assests/report.png";
import reponsiveimg from "../../EmailServices/assests/reponsiveimg.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Container } from "src/components/Container.styles";
import { PrimaryButton } from "src/components/Button.styles";
import Modal from "src/components/Modal/Modal";
import ServiceModal from "src/components/ServiceModal/ServiceModal";
const OutCome = ({ type }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [modal, setModal] = useState(false);
  return (
    <>
      <Container>
        <Modal
          open={modal}
          setOpen={setModal}
          bg="#fff"
          radius="25px"
          width="1340px"
          desktopTop="9px"
          desktopRight="10px"
          MobileTop="9px"
          MobileRight="10px"
          svgColor="black"
          child={<ServiceModal type={type} />}
        />
        <OutSection>
          <OutDiv>
            <DivOne>
              <h2>OUTCOME</h2>
              <h3>In-Depth Email Strategy and A Systematic Execution</h3>
              <h4>Our email marketing makes it easier for you to:</h4>
              <InsideDiv>
                <InsideFlex>
                  <Image src={img1} alt="img" />{" "}
                  <span>
                    Engage your existing clients, prospects, and all
                    stakeholders
                  </span>
                </InsideFlex>
                <InsideFlex>
                  <Image src={img2} alt="img" />{" "}
                  <span>Update about new items, cross-sales, and specials</span>
                </InsideFlex>

                <InsideFlex>
                  <Image src={img3} alt="img" />{" "}
                  <span>Make improvements for consumer satisfaction</span>
                </InsideFlex>
              </InsideDiv>
              <PrimaryButton
                className="primaryBtn"
                width="300"
                height="50"
                bg="linear-gradient(151deg, #1FABD3 0%, #1CCC97 100%)"
                color="#fff"
                radius="100px"
                onClick={() => setModal(true)}
                style={{ marginTop: "30px" }}
              >
                Get A Free Email Audit
              </PrimaryButton>
            </DivOne>
            <DivTwo>
              <div className="key">
                <strong></strong>
                <p>Key Actions</p>
              </div>
              <h5>
                Keeping you in front of your prospects requires the following:
              </h5>

              <InsideDiv>
                <InsideFlex>
                  <Image src={img4} alt="img" />{" "}
                  <small>Database Analysis and Segmentation</small>
                </InsideFlex>
                <InsideFlex>
                  <Image src={img4} alt="img" />{" "}
                  <small>Email Strategy Planning</small>
                </InsideFlex>
                <InsideFlex>
                  <Image src={img4} alt="img" />{" "}
                  <small>Email Copywriting</small>
                </InsideFlex>
                <InsideFlex>
                  <Image src={img4} alt="img" /> <small>Email Automation</small>
                </InsideFlex>
                <InsideFlex>
                  <Image src={img4} alt="img" />{" "}
                  <small>Tracking and Reporting</small>
                </InsideFlex>
              </InsideDiv>
            </DivTwo>
          </OutDiv>

          <OutSec>
            <div className="circleImg">
              <Image src={img5} alt="reponsiveimg" />
            </div>
            <FloatingText>
              <h1>
                Why Invest in <br /> Email Marketing?
              </h1>
            </FloatingText>
            <Floating
              top="-2%"
              left="10%"
              tops="-2%"
              lefts="11%"
              topt="2%"
              leftt="-4%"
            >
              <div className="floating">
                <FloatingImg src={report} alt="report" max="87" min="30.41" />
              </div>
              <p>
                Build loyalty and repeat <br /> business
              </p>
            </Floating>
            <Floating
              top="-7%"
              left="59%"
              tops="-7%"
              lefts="61%"
              topt="-3%"
              leftt="62%"
            >
              <div className="floating">
                <FloatingImg
                  src={experience}
                  alt="experience"
                  max="86"
                  min="30.06"
                />
              </div>
              <p>
                Expand your business <br /> reach
              </p>
            </Floating>
            <Floating top="32%" left="0%" lefts="-2%" topt="36%" leftt="-13%">
              <div className="floating">
                <FloatingImg src={sql} alt="sql" max="87" min="30.41" />
              </div>
              <p>
                Nurture MQL’s into <br /> SQL’s
              </p>
            </Floating>
            <Floating
              top="28%"
              right="0%"
              tops="29%"
              lefts="75%"
              topt="36%"
              leftt="93%"
            >
              <div className="floating">
                <FloatingImg src={target} alt="target" max="87" min="30.41" />
              </div>
              <p>
                Connect with different <br /> audiences
              </p>
            </Floating>
            <Floating
              top="74%"
              left="17%"
              tops="79%"
              lefts="22%"
              topt="75%"
              leftt="8%"
              topf="70%"
              leftf="4%"
              topg="81%"
              leftg="6%"
            >
              <div className="floating">
                <FloatingImg
                  src={lowCcost}
                  alt="lowCcost"
                  max="87"
                  min="30.41"
                />
              </div>
              <p>
                Lower your cost of <br /> customer acquisition
              </p>
            </Floating>
            <Floating
              top="67%"
              right="64px"
              topf="70%"
              leftf="74%"
              tops="74%"
              lefts="56%"
              topt="75%"
              leftt="78%"
              topg="78%"
              leftg="70%"
            >
              <div className="floating">
                <FloatingImg src={budget} alt="budget" max="69" min="24.12" />
              </div>
              <p>
                Let your marketing budget <br /> go farther
              </p>
            </Floating>
          </OutSec>
        </OutSection>
      </Container>
    </>
  );
};

export default OutCome;
