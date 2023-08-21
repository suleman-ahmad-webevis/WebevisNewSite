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
              <h1>Why Invest in Email Marketing?</h1>
            </FloatingText>
            <Floating top="-3%" left="15%" topf="-2%" leftf="11%"  tops="-6%" lefts="-6%">
              <div className="floating">
                <FloatingImg src={report} alt="report" max="87" min="30.41" />
              </div>
              <p>Build loyalty and repeat business</p>
            </Floating>
            <Floating top="-7%" left="55%" topf="-5%" leftf="57%" tops="-6%" lefts="58%" topt="-2%" leftt="57%"  >
              <div className="floating">
                <FloatingImg
                  src={experience}
                  alt="experience"
                  max="86"
                  min="30.06"
                />
              </div>
              <p>Expand your business reach</p>
            </Floating>
            <Floating top="33%" left="9%" topf="33%" leftf="-2%" lefts="-12%" topt="33%" leftt="5%" >
              <div className="floating">
                <FloatingImg src={sql} alt="sql" max="87" min="30.41" />
              </div>
              <p>Nurture MQL’s into SQL’s</p>
            </Floating>
            <Floating top="33%" left="63%" topf="33%" leftf="78%" tops="27%" lefts="91%" topt="33%" leftt="70%">
              <div className="floating">
                <FloatingImg src={target} alt="target" max="87" min="30.41" />
              </div>
              <p>Connect with different audiences</p>
            </Floating>
            <Floating top="70%" left="10%" topf="74%" leftf="3%" tops="72%" lefts="-8%" topt="68%" leftt="9%">
              <div className="floating">
                <FloatingImg
                  src={lowCcost}
                  alt="lowCcost"
                  max="87"
                  min="30.41"
                />
              </div>
              <p>Lower your cost of customer acquisition</p>
            </Floating>
            <Floating top="70%" left="55%" topf="75%" leftf="62%" tops="71%" lefts="70%" topt="68%" leftt="55%">
              <div className="floating">
                <FloatingImg src={budget} alt="budget" max="69" min="24.12" />
              </div>
              <p>Let your marketing budget go farther</p>
            </Floating>
          </OutSec>
        </OutSection>
      </Container>
    </>
  );
};

export default OutCome;
