import React from "react";
import { Row, RowFirst, RowHeading, RowImage, RowSec } from "./Display.style";
import Image from "next/image";
import img1 from "../../semservices/assests/ad.png";
import img2 from "../../semservices/assests/digital.png";
import img3 from "../../semservices/assests/megaphone.png";
import img4 from "../../semservices/assests/video1.png";
import { Container } from "src/components/Container.styles";

const Display = () => {
  return (
    <>
    <Container>

      <Row>
        <h1>Types of Display Advertising</h1>
        <p>
          Display advertising focuses on attracting online users’ attention to
          convince them to take a specific action, such as signing up for a
          newsletter or registering for a free software trial.
        </p>
      </Row>
      <RowFirst>
        <RowSec>
          <RowImage>
            <Image src={img1} alt="img" />
          </RowImage>
          <RowHeading>
            <h1>Banner Ads</h1>
            <p>
              These are image-based ads that aim to get page visitors from the
              host website to the advertiser’s website.
            </p>
          </RowHeading>
        </RowSec>
        <RowSec>
          <RowImage>
            <Image src={img2} alt="img" />
          </RowImage>
          <RowHeading>
            <h1>Interstitial Ads</h1>
            <p>
              These are image-based ads that aim to get page visitors from the
              host website to the advertiser’s website.
            </p>
          </RowHeading>
        </RowSec>
        <RowSec>
          <RowImage>
            <Image src={img4} alt="img" />
          </RowImage>
          <RowHeading>
            <h1>Video Ads</h1>
            <p>
              These are image-based ads that aim to get page visitors from the
              host website to the advertiser’s website.
            </p>
          </RowHeading>
        </RowSec>
        <RowSec>
          <RowImage>
            <Image src={img3} alt="img" />
          </RowImage>
          <RowHeading>
            <h1>Rich Media</h1>
            <p>
              These are image-based ads that aim to get page visitors from the
              host website to the advertiser’s website.
            </p>
          </RowHeading>
        </RowSec>
      </RowFirst>
    </Container>

    </>
  );
};

export default Display;
