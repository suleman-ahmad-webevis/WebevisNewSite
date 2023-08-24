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
  const [color, setColor] = useState(0);
  useEffect(() => {
    console.log("first");
  }, []);

  const handelColor = (ind) => {
    setColor(ind);
  };
  const handelLeave = () => {
    settoogle(wavy);
    setColor(null);
  };
  const bgColor = "linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%)";
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
                    handelColor(1);
                  }}
                  onMouseLeave={handelLeave}
                  bg={color >= 1 ? bgColor : "gray"}
                  opacity={color >= 1 ? "1" : "0.2"}
                  mdtop="100%"
                  mdleft="80%"
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
                  onMouseEnter={() => {
                    settoogle(p2);
                    handelColor(2);
                  }}
                  onMouseLeave={handelLeave}
                  top="70%"
                  left="43%"
                  xltop="75%"
                  xlleft="43%"
                  lgtop="78%"
                  lgleft="45%"
                  mdtop="110%"
                  mdleft="-30%"
                  bg={color >= 2 ? bgColor : "gray"}
                  opacity={color >= 2 ? "1" : "0.2"}
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
                    handelColor(3);
                  }}
                  onMouseLeave={handelLeave}
                  left="69%"
                  xlleft="69%"
                  lgleft="71%"
                  bg={color >= 3 ? bgColor : "gray"}
                  opacity={color >= 3 ? "1" : "0.2"}
                  mdtop="110%"
                  mdleft="80%"
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
                  onMouseEnter={() => {
                    settoogle(p4);
                    handelColor(4);
                  }}
                  onMouseLeave={handelLeave}
                  top="70%"
                  left="94%"
                  xltop="65%"
                  xlleft="94%"
                  lgtop="100%"
                  lgleft="90%"
                  bg={color == 4 ? bgColor : "gray"}
                  opacity={color >= 4 ? "1" : "0.2"}
                  mdtop="90%"
                  mdleft="-70%"
                >
                  <h1>04</h1>

                  <Image src={launch} alt="launch" />
                  <p>launch project</p>
                </CreatorBg3>
              </CreatorBg2>
            </CreatorBg1>
          </CreatorBg>
        </CreatorPlan>
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
