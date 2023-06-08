import React from "react";
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
const OutCome = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <OutSection>
        <OutDiv>
          <DivOne>
            <p>OUTCOME</p>
            <h1>In-Depth Email Strategy and A Systematic Execution</h1>
            <h2>Our email marketing makes it easier for you to:</h2>
            <InsideDiv>
              <InsideFlex>
                <ul>
                  <li>
<<<<<<< HEAD
                    <Image src={img1} />{" "}
=======
                    <Image src={img1} alt="img" />{" "}
>>>>>>> a03ceb0f07e1c0d0952dd8ae02d85b415f36951c
                    <span>
                      Engage your existing clients, prospects, and all
                      stakeholders
                    </span>
                  </li>
                </ul>
              </InsideFlex>
              <InsideFlex>
                <ul>
                  <li>
<<<<<<< HEAD
                    <Image src={img2} />{" "}
=======
                    <Image src={img2} alt="img" />{" "}
>>>>>>> a03ceb0f07e1c0d0952dd8ae02d85b415f36951c
                    <span>
                      Update about new items, cross-sales, and specials
                    </span>
                  </li>
                </ul>
              </InsideFlex>

              <InsideFlex>
                <ul>
                  <li>
<<<<<<< HEAD
                    <Image src={img3} />{" "}
=======
                    <Image src={img3} alt="img" />{" "}
>>>>>>> a03ceb0f07e1c0d0952dd8ae02d85b415f36951c
                    <span>Make improvements for consumer satisfaction</span>
                  </li>
                </ul>
              </InsideFlex>
            </InsideDiv>
            <Button>Get A Free Email Audit</Button>
          </DivOne>
          <DivTwo>
            <p>Key Actions</p>
            <h1>
              Keeping you in front of your prospects requires the following:
            </h1>

            <InsideDiv>
              <InsideFlex>
<<<<<<< HEAD
                <Image src={img4} />{" "}
                <small>Database Analysis and Segmentation</small>
              </InsideFlex>
              <InsideFlex>
                <Image src={img4} /> <small>Email Strategy Planning</small>
              </InsideFlex>
              <InsideFlex>
                <Image src={img4} /> <small>Email Copywriting</small>
              </InsideFlex>
              <InsideFlex>
                <Image src={img4} /> <small>Email Automation</small>
              </InsideFlex>
              <InsideFlex>
                <Image src={img4} /> <small>Tracking and Reporting</small>
=======
                <Image src={img4} alt="img" />{" "}
                <small>Database Analysis and Segmentation</small>
              </InsideFlex>
              <InsideFlex>
                <Image src={img4} alt="img" />{" "}
                <small>Email Strategy Planning</small>
              </InsideFlex>
              <InsideFlex>
                <Image src={img4} alt="img" /> <small>Email Copywriting</small>
              </InsideFlex>
              <InsideFlex>
                <Image src={img4} alt="img" /> <small>Email Automation</small>
              </InsideFlex>
              <InsideFlex>
                <Image src={img4} alt="img" />{" "}
                <small>Tracking and Reporting</small>
>>>>>>> a03ceb0f07e1c0d0952dd8ae02d85b415f36951c
              </InsideFlex>
            </InsideDiv>
          </DivTwo>
        </OutDiv>
        {!matches && (
          <OutSec>
            <Image src={img5} alt="reponsiveimg" />
            <FloatingText>
              <h1>Why Invest in Email Marketing?</h1>
            </FloatingText>
            <Floating top="-3%" left="15%" topf="-2%" leftf="11%">
              <FloatingImg src={report} alt="report" max="87" min="30.41" />
              <p>Build loyalty and repeat business</p>
            </Floating>
            <Floating top="-7%" left="55%" topf="-5%" leftf="57%">
              <FloatingImg
                src={experience}
                alt="experience"
                max="86"
                min="30.06"
              />
              <p>Expand your business reach</p>
            </Floating>
            <Floating top="33%" left="9%" topf="33%" leftf="-2%">
              <FloatingImg src={sql} alt="sql" max="87" min="30.41" />
              <p>Nurture MQL’s into SQL’s</p>
            </Floating>
            <Floating top="33%" left="63%" topf="33%" leftf="78%">
              <FloatingImg src={target} alt="target" max="87" min="30.41" />
              <p>Connect with different audiences</p>
            </Floating>
            <Floating top="70%" left="10%" topf="74%" leftf="3%">
              <FloatingImg src={lowCcost} alt="lowCcost" max="87" min="30.41" />
              <p>Lower your cost of customer acquisition</p>
            </Floating>
            <Floating top="70%" left="55%" topf="75%" leftf="62%">
              <FloatingImg src={budget} alt="budget" max="69" min="24.12" />
              <p>Let your marketing budget go farther</p>
            </Floating>
          </OutSec>
        )}
        {matches && (
          <OutSec>
            <Image src={reponsiveimg} alt="reponsiveimg" />
          </OutSec>
        )}
      </OutSection>
    </>
  );
};

export default OutCome;
