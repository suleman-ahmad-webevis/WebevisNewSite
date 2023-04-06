import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  CreatorBg,
  CreatorBg1,
  CreatorBg2,
  CreatorBg3,
  CreatorPlan,
  CreatorSec,
  CreatorText,
  MoveAble,
} from "./Creator.style";
import plan from "../../../assets/images/seoservices/plan.png";
import launch from "../../../assets/images/seoservices/launch.png";
import search from "../../../assets/images/seoservices/search.png";
import idea from "../../../assets/images/seoservices/idea.png";
import wavy from "../../../assets/images/seoservices/wavy.svg";
import p1 from "../../../assets/images/seoservices/p1.svg";
import p2 from "../../../assets/images/seoservices/p2.svg";
import p3 from "../../../assets/images/seoservices/p3.svg";
import p4 from "../../../assets/images/seoservices/p4.svg";
const Creator = () => {
  const [toogle, settoogle] = useState(wavy);
  useEffect(() => {
    console.log("first");
  }, []);

  const handelLeave = () => {
    settoogle(wavy);
  };
  return (
    <CreatorSec>
      <CreatorText>
        <h1>
          We are Creators of the Famous Website Crawler and Log File Analyser
          Tools
        </h1>
      </CreatorText>
      <CreatorPlan>
        <CreatorBg>
          <CreatorBg1>
            <CreatorBg2>
              <CreatorBg3
                onMouseEnter={() => settoogle(p1)}
                onMouseLeave={handelLeave}
              >
                <h1>01</h1>
                <Image src={idea} title="idea" />
                <p>Marking ideas</p>
              </CreatorBg3>
            </CreatorBg2>
          </CreatorBg1>
        </CreatorBg>
        <CreatorBg>
          <CreatorBg1>
            <CreatorBg2>
              <CreatorBg3
                onMouseEnter={() => settoogle(p2)}
                onMouseLeave={handelLeave}
                top="70%"
                left="45%"
              >
                <h1>02</h1>

                <Image src={plan} title="plan" />
                <p>
                  Working <br /> plan
                </p>
              </CreatorBg3>
            </CreatorBg2>
          </CreatorBg1>
        </CreatorBg>
        <CreatorBg>
          <CreatorBg1>
            <CreatorBg2>
              <CreatorBg3
                onMouseEnter={() => settoogle(p3)}
                onMouseLeave={handelLeave}
                // top="-4%"
                left="71%"
              >
                <h1>03</h1>

                <Image src={search} title="search" />
                <p>SEO Research</p>
              </CreatorBg3>
            </CreatorBg2>
          </CreatorBg1>
        </CreatorBg>
        <CreatorBg>
          <CreatorBg1>
            <CreatorBg2>
              <CreatorBg3
                onMouseEnter={() => settoogle(p4)}
                onMouseLeave={handelLeave}
                top="90%"
                left="92%"
              >
                <h1>04</h1>

                <Image src={launch} title="launch" />
                <p>launch project</p>
              </CreatorBg3>
            </CreatorBg2>
          </CreatorBg1>
        </CreatorBg>
      </CreatorPlan>
      <MoveAble>
        <Image
          src={toogle}
          style={{ width: "100%" }}
          alt="Waves"
          loading="lazy"
        />
        {/* <hr /> */}
      </MoveAble>
    </CreatorSec>
  );
};

export default Creator;
