import React from "react";
import { Row, RowFirst, RowHeading, RowImage, RowSec } from "./Display.style";
import Image from "next/image";
import img1 from "../../semservices/assests/ad.png";
import img2 from "../../semservices/assests/digital.png";
import img3 from "../../semservices/assests/megaphone.png";
import img4 from "../../semservices/assests/video1.png";

const Display = () => {
  return (
    <>
      <Row>
        <h1>Types of DISPLAY ADVERTISING</h1>
        <p>
          Display advertising focuses on attracting online users’ attention to
          convince them to take a specific action, such as signing up for a
          newsletter or registering for a free software trial.
        </p>
      </Row>
      <RowFirst>
        <RowSec>
          <RowImage>
<<<<<<< HEAD
            <Image src={img1} />
=======
            <Image src={img1} alt="img" />
>>>>>>> a03ceb0f07e1c0d0952dd8ae02d85b415f36951c
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
<<<<<<< HEAD
            <Image src={img2} />
=======
            <Image src={img2} alt="img" />
>>>>>>> a03ceb0f07e1c0d0952dd8ae02d85b415f36951c
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
<<<<<<< HEAD
            <Image src={img4} />
=======
            <Image src={img4} alt="img" />
>>>>>>> a03ceb0f07e1c0d0952dd8ae02d85b415f36951c
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
<<<<<<< HEAD
            <Image src={img3} />
=======
            <Image src={img3} alt="img" />
>>>>>>> a03ceb0f07e1c0d0952dd8ae02d85b415f36951c
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
    </>
  );
};

export default Display;
