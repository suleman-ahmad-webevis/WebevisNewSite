import React from "react";
import {
  BodyText,
  Border,
  Button,
  Offerbody,
  OfferCard,
  OfferHead,
  OfferMain,
  OfferSec,
  OfferText,
  OfferTitle,
} from "./Explore.style";

import img1 from "../../../assets//images/Services/AICompetitorAnalysis/diamend.png";
import img3 from "../../../assets//images/Services/AICompetitorAnalysis/gold.png";
import img2 from "../../../assets//images/Services/AICompetitorAnalysis/tick.png";

import Special from "../../../assets//images/Services/AICompetitorAnalysis/Special.png";

import Image from "next/image";
import { BsFillCheckSquareFill } from "react-icons/bs";
const Explore = () => {
  return (
    <OfferSec>
      <OfferText>
        <h1>Explore Current top Deals</h1>
        <p>
          Check out our best deals across our product range, and get what your
          website needs.
        </p>
      </OfferText>
      <OfferMain>
        <OfferCard className="btn">
        <Border><Image src={Special} alt="Special" /></Border>
          <OfferHead>
            <OfferTitle>
              <Image src={img1} alt="Dimond" className="img-1" />
              <Image src={img2} alt="Dimond" className="img-2" />
              <span>
                <h2>Standard</h2>
                <p>05 services</p>
              </span>
            </OfferTitle>
            <h1>$699</h1>
          </OfferHead>
          <hr />
          <Offerbody>
            <BodyText>
              <BsFillCheckSquareFill color="#28B781" />
              <p>25 Analytics Campaign</p>
            </BodyText>
            <BodyText>
              <BsFillCheckSquareFill color="#28B781" />
              <p>1,300Change Keywords</p>
            </BodyText>
            <BodyText>
              <BsFillCheckSquareFill color="#28B781" />
              <p>25 Social Media Reviews</p>
            </BodyText>
            <BodyText>
              <BsFillCheckSquareFill color="#28B781" />
              <p>1 Free Optimization</p>
            </BodyText>
            <BodyText>
              <BsFillCheckSquareFill color="#28B781" />
              <p>24/7 Support</p>
            </BodyText>
            <BodyText>
              <BsFillCheckSquareFill color="#28B781" />
              <p>24/7 Support</p>
            </BodyText>
          </Offerbody>
          <hr />
          <Button>Choose Plan</Button>
        </OfferCard>

        <OfferCard className=" btn active">
        <Border><Image src={Special} alt="Special" /></Border>
          <OfferHead>
            <OfferTitle>
              <Image src={img3} alt="gold" className="img-1" />
              <Image src={img2} alt="Dimond" className="img-2" />
              <span>
                <h2>Standard</h2>
                <p>05 services</p>
              </span>
            </OfferTitle>
            <h1>$699</h1>
          </OfferHead>
          <hr />
          <Offerbody>
            <BodyText>
              <BsFillCheckSquareFill color="#28B781" />
              <p>25 Analytics Campaign</p>
            </BodyText>
            <BodyText>
              <BsFillCheckSquareFill color="#28B781" />
              <p>1,300Change Keywords</p>
            </BodyText>
            <BodyText>
              <BsFillCheckSquareFill color="#28B781" />
              <p>25 Social Media Reviews</p>
            </BodyText>
            <BodyText>
              <BsFillCheckSquareFill color="#28B781" />
              <p>1 Free Optimization</p>
            </BodyText>
            <BodyText>
              <BsFillCheckSquareFill color="#28B781" />
              <p>24/7 Support</p>
            </BodyText>
            <BodyText>
              <BsFillCheckSquareFill color="#28B781" />
              <p>24/7 Support</p>
            </BodyText>
          </Offerbody>
          <hr />
          <Button>Choose Plan</Button>
        </OfferCard>

        <OfferCard className="btn">
        <Border><Image src={Special} alt="Special" /></Border>
          <OfferHead>
            <OfferTitle>
              <Image src={img1} alt="Dimond" className="img-1" />
              <Image src={img2} alt="Dimond" className="img-2" />
              <span>
                <h2>Standard</h2>
                <p>05 services</p>
              </span>
            </OfferTitle>
            <h1>$699</h1>
          </OfferHead>
          <hr />
          <Offerbody>
            <BodyText>
              <BsFillCheckSquareFill color="#28B781" />
              <p>25 Analytics Campaign</p>
            </BodyText>
            <BodyText>
              <BsFillCheckSquareFill color="#28B781" />
              <p>1,300Change Keywords</p>
            </BodyText>
            <BodyText>
              <BsFillCheckSquareFill color="#28B781" />
              <p>25 Social Media Reviews</p>
            </BodyText>
            <BodyText>
              <BsFillCheckSquareFill color="#28B781" />
              <p>1 Free Optimization</p>
            </BodyText>
            <BodyText>
              <BsFillCheckSquareFill color="#28B781" />
              <p>24/7 Support</p>
            </BodyText>
            <BodyText>
              <BsFillCheckSquareFill color="#28B781" />
              <p>24/7 Support</p>
            </BodyText>
          </Offerbody>
          <hr />
          <Button>Choose Plan</Button>
        </OfferCard>
      </OfferMain>
    </OfferSec>
  );
};

export default Explore;
