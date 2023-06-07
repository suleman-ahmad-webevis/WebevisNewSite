import React from "react";
import {
  CompSection,
  CompHeading,
  EmailComp,
  EmailDiv,
} from "./Compaings.style";
import Image from "next/image";
import img1 from "../../EmailServices/assests/real1.png";
import img2 from "../../EmailServices/assests/real2.png";
import img3 from "../../EmailServices/assests/real3.png";
import img4 from "../../EmailServices/assests/real4.png";
import img5 from "../../EmailServices/assests/real5.png";
import img6 from "../../EmailServices/assests/real6.png";
import img7 from "../../EmailServices/assests/real7.png";
import img8 from "../../EmailServices/assests/real8.png";
import img9 from "../../EmailServices/assests/real9.png";
import { Button } from "src/components/Button.styles";

const Compaings = () => {
  return (
    <>
        <CompHeading>
          <p>OUR EMAIL MARKETING CAMPAIGNS</p>
          <h1>We offer many types of email marketing campaigns</h1>
          <p>
            With the addition of additional services, your business can grow
            even faster.
          </p>
        <EmailComp>
          <EmailDiv>
            <Image src={img9} />
            <h1>Newsletter Campaign</h1>
            <p>Remind everyone what's   been missed</p>
          </EmailDiv>
          <EmailDiv>
            <Image src={img3} />
            <h1>Product Launch Campaign</h1>
            <p>Introduce a new product and provide  details about the launch</p>
          </EmailDiv>
          <EmailDiv>
            <Image src={img4} />
            <h1>Drip/Lifecycle Campaign</h1>
            <p>Make users' buying behavior more  likely to be influenced</p>
          </EmailDiv>
          <EmailDiv>
            <Image src={img8} />
            <h1>Seasonal / Festive / Occasion  Campaign</h1>
            <p>
              Send your best wishes, make offers, and drive more conversions
            </p>
          </EmailDiv>
          <EmailDiv>
            <Image src={img5} />
            <h1>Re-engagement Campaign</h1>
            <p>Identify inactive users and engage with  them</p>
          </EmailDiv>
          <EmailDiv>
            <Image src={img6} />
            <h1>Cart Abandonment <br/> Campaign</h1>
            <p>Encourage customers to complete  the purchase of items in cart</p>
          </EmailDiv>
          <EmailDiv>
            <Image src={img6} />
            <h1>Welcome Campaign</h1>
            <p>A campaign to welcome  and inform what to expect  next</p>
          </EmailDiv>
          <EmailDiv>
            <Image src={img7} />
            <h1>After-sales/Post-purchase  Campaign</h1>
            <p>Keep your customers informed about their orders</p>
          </EmailDiv>
          <EmailDiv>
            <Image src={img1} />
            <h1>Standard Campaign</h1>
            <p>Leads, customers, and past  customers can be nurtured</p>
          </EmailDiv>
        </EmailComp>
        {/* <Button
          color="white"
 
          bg="linear-gradient(93.39deg, #28B781 21.84%, #CFEF00 178.39%)"
        >
          Book Free Consultation Call
        </Button> */}
        </CompHeading>

    </>
  );
};

export default Compaings;
