import React from "react";
import { NewHeading, NewSec, NewSecOne, Img, Tag, Listing } from "./News.style";
import img1 from "../../../assets/images/AboutUs/assests/girl1.png";
import { Container } from "src/components/Container.styles";

const News = () => {
  return (
    <>
      <Container>
        <NewHeading>Read Our Latest News</NewHeading>
        <NewSec>
          <NewSecOne>
            <Img src={img1} />
            <Listing>
              <li> 3 March 2023 </li>
              <li> by admin</li>
            </Listing>

            <h1>The Difference Between a Sale & a Flopped Ad</h1>
            <Tag>Read More</Tag>
          </NewSecOne>
          <NewSecOne>
            <Img src={img1} />

            <Listing>
              <li> 3 March 2023 </li>
              <li> by admin</li>
            </Listing>

            <h1>The Difference Between a Sale & a Flopped Ad</h1>
            <Tag>Read More</Tag>
          </NewSecOne>
          <NewSecOne>
            <Img src={img1} />

            <Listing>
              <li> 3 March 2023 </li>
              <li> by admin</li>
            </Listing>
            <h1>The Difference Between a Sale & a Flopped Ad</h1>
            <Tag>Read More</Tag>
          </NewSecOne>
        </NewSec>
      </Container>
    </>
  );
};

export default News;
