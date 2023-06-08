import React from "react";
import {
  BodyText,
  Button,
  Offerbody,
  OfferCard,
  OfferHead,
  OfferMain,
  OfferSec,
  OfferText,
  OfferTitle,
} from "./Offer.styles";
import dimond from "../../../assets/images/seoservices/dimond.png";
import dimond2 from "../../../assets/images/seoservices/dimond2.png";
import Polygon from "../../../components/explorecurrent/offer.png";
import Image from "next/image";
import { BsFillCheckSquareFill } from "react-icons/bs";
const Offer = () => {
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
        <OfferCard>
          {/* <OfferHead></OfferHead> */}
          <Image src={Polygon} alt="img" />
          <OfferHead>
            <OfferTitle>
              <Image src={dimond} alt="Dimond" className="img-1" />
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
        <OfferCard bg="#d9d9d9">
          <OfferHead>
            <OfferTitle>
              <Image src={dimond2} alt="Dimond" className="img-2" />
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
        <OfferCard>
          <OfferHead>
            <OfferTitle>
              <Image src={dimond} alt="Dimond" className="img-1" />
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

export default Offer;
