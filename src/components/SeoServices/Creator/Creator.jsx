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
  PlaneCreatorRes,
  Wrapper,
} from "./Creator.style";
import plan from "../../../assets/images/seoservices/plan.png";
import launch from "../../../assets/images/seoservices/launch.png";
import search from "../../../assets/images/seoservices/search.png";
import idea from "../../../assets/images/seoservices/idea.png";
import wavy from "../../../assets/images/seoservices/wavy.svg";
import wavyres from "../../../assets/images/seoservices/wavyres.png";
import p1 from "../../../assets/images/seoservices/p1.svg";
import p2 from "../../../assets/images/seoservices/p2.svg";
import p3 from "../../../assets/images/seoservices/p3.svg";
import p4 from "../../../assets/images/seoservices/p4.svg";
const Creator = () => {
  const [toogle, settoogle] = useState(wavy);
  const [color, setColor] = useState(null);
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
      <Wrapper image={toogle}>
        <CreatorPlan>
          <CreatorBg>
            <CreatorBg1>
              <CreatorBg2>
                <CreatorBg3
                  onMouseEnter={() => {
                    settoogle(p1);
                    setColor(1);
                  }}
                  onMouseLeave={handelLeave}
                >
                  <h1>01</h1>
                  <Image src={idea} alt="img" />
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
                  left="43%"
                  xltop="75%"
                  xlleft="43%"
                  lgtop="78%"
                  lgleft="45%"
                >
                  <h1>02</h1>

                  <Image src={plan} alt="plan" />
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
                  onMouseEnter={() => {
                    settoogle(p3);
                  }}
                  onMouseLeave={handelLeave}
                  left="69%"
                  xlleft="69%"
                  lgleft="71%"
                >
                  <h1>03</h1>

                  <Image src={search} alt="search" />
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
                  top="70%"
                  left="94%"
                  xltop="65%"
                  xlleft="94%"
                  lgtop="100%"
                  lgleft="90%"
                >
                  <h1>04</h1>

                  <Image src={launch} alt="launch" />
                  <p>launch project</p>
                </CreatorBg3>
              </CreatorBg2>
            </CreatorBg1>
          </CreatorBg>
        </CreatorPlan>
        {/* <MoveAble className="move" image={toogle}>
          <Image
            src={toogle}
            style={{ width: "100%" }}
            alt="Waves"
            loading="lazy"
          />
          <hr />
        </MoveAble> */}
      </Wrapper>
      {/* <PlaneCreatorRes>
        <CreatorBg>
          <CreatorBg1>
            <CreatorBg2>
              <CreatorBg3
                onMouseEnter={() => settoogle(p1)}
                onMouseLeave={handelLeave}
              >
                <Image src={idea} alt="idea" />
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
                left="47%"
              >
                <Image src={plan} alt="plan" />
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
                <Image src={search} alt="search" />
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
                top="95%"
                left="92%"
              >
                <Image src={launch} alt="launch" />
                <p>launch project</p>
              </CreatorBg3>
            </CreatorBg2>
          </CreatorBg1>
        </CreatorBg>
        <div className="imgres">
          <Image
            src={wavyres}
            style={{ width: "100%" }}
            alt="Waves"
            loading="lazy"
          />
        </div>
      </PlaneCreatorRes> */}
    </CreatorSec>
  );
};

export default Creator;
