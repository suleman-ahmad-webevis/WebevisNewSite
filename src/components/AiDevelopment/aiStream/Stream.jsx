import React from "react";
import { StreamSec } from "./Stream.style";
import Image from "next/image";
import hand from "../../../../public/assets/images/AiDevelopment/hand.png";
import img1 from "../../../../public/assets/images/AiDevelopment/pi.png";
import img2 from "../../../../public/assets/images/AiDevelopment/tag.png";
import img3 from "../../../../public/assets/images/AiDevelopment/contact.png";
import img4 from "../../../../public/assets/images/AiDevelopment/good.png";
import img5 from "../../../../public/assets/images/AiDevelopment/reload.png";
import img6 from "../../../../public/assets/images/AiDevelopment/cube.png";
import img7 from "../../../../public/assets/images/AiDevelopment/operate.png";
import { Container } from "src/components/Container.styles";
const StreamData = [
  {
    id: 1,
    image: img1,
    title: "Project Analysis",
  },
  {
    id: 2,
    image: img2,
    title: "Code",
  },
  {
    id: 3,
    image: img3,
    title: "Build",
  },
  {
    id: 4,
    image: img4,
    title: "Monitor",
  },
  {
    id: 5,
    image: img5,
    title: "Release",
  },
  {
    id: 6,
    image: img6,
    title: "Deploy",
  },
  {
    id: 7,
    image: img7,
    title: "Operate",
  },
];
const Stream = () => {
  return (
    <Container>

    <StreamSec>
      <div className="text_center">

      <h2>Our Streamlined AI Development Process</h2>
      <p>
        Our company relies on an agile software development process. By
        prioritizing collaboration, flexibility, and transparency, our team is
        able to continuously deliver solutions of the highest value to your
        business.
      </p>
      </div>
      <div className="main_stream">
        <div className="stream_text">
          {StreamData.map((el, ind) => (
            <div className="inside" key={ind}>
              <Image src={el.image} alt={el.image} />
              <h3>{el.title}</h3>
            </div>
          ))}
        </div>
        <div className="stream_image">
          <Image src={hand} alt="hand" />
        </div>
      </div>
    </StreamSec>
    </Container>

  );
};

export default Stream;
