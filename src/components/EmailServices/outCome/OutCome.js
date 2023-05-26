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
} from "./OutCome.style";
import Image from "next/image";
import img1 from "../../EmailServices/assests/bols.png";
import img2 from "../../EmailServices/assests/clock.png";
import img3 from "../../EmailServices/assests/happy.png";
import img4 from "../../EmailServices/assests/tick.png";
import img5 from "../../EmailServices/assests/outImage.png";
const OutCome = () => {
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
                    <Image src={img1} />{" "}
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
                    <Image src={img2} />{" "}
                    <span>
                      Update about new items, cross-sales, and specials
                    </span>
                  </li>
                </ul>
              </InsideFlex>

              <InsideFlex>
                <ul>
                  <li>
                    <Image src={img3} />{" "}
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
              </InsideFlex>
            </InsideDiv>
          </DivTwo>
        </OutDiv>
        <OutSec>
          <Image src={img5} />
        </OutSec>
      </OutSection>
    </>
  );
};

export default OutCome;
