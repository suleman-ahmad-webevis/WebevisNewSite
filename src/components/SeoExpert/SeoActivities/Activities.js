import React from "react";
import { Container } from "src/components/Container.styles";
import { Activity, ActivityHolder, Tab, TabHolder } from "./Activities.styles";
import Image from "next/image";
import { useState } from "react";
import TabBg from "../../../assets/images/SeoExpert/Tab-Bg.png";
import TabBg1 from "../../../assets/images/SeoExpert/Tab-Bg1.png";
import Checkbox from "../../../assets/images/SeoExpert/Checkbox.png";
import { tabdata } from "./TabsData";

const Activities = () => {
  const [tab, setTab] = useState(0);
  const [changeBg, setChangeBg] = useState(0);
  const [changeColor, setChangeColor] = useState(0);
  const [content, setContent] = useState(0);
  const handleClick = (index) => {
    setTab(index);
    setChangeBg(index);
    setChangeColor(index);
    setContent(index);
  };
  return (
    <ActivityHolder>
      <Container>
        <Activity>
          <h2>SEO Activities</h2>
          <p>
            Learn what our Professional SEO team can do for you. We are prepared
            to take on each on of these steps.
          </p>
          <TabHolder>
            <div>
              {tabdata.map((item, index) => (
                <Tab
                  color={changeColor == index ? "#fff" : "#000"}
                  className="Tab"
                  key={index}
                  onClick={() => handleClick(index)}
                  image={changeBg == index ? TabBg1 : TabBg}
                >
                  <div className="Image-Icon">
                    {tab == index ? (
                      <Image src={item.iconWhite} alt="icon" />
                    ) : (
                      <Image src={item.iconBlack} alt="icon" />
                    )}
                  </div>
                  <h3>{item.name}</h3>
                </Tab>
              ))}
            </div>
            <div className="Tab-content">
              {tabdata.at(content).text.map((item, index) => (
                <div className="content" key={index}>
                  <Image
                    className="check-image"
                    src={Checkbox}
                    alt="Checkbox"
                  />
                  <span className="label-text">{item}</span>
                </div>
              ))}
            </div>
          </TabHolder>
        </Activity>
      </Container>
    </ActivityHolder>
  );
};

export default Activities;
