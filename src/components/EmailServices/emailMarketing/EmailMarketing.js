import React from "react";
import { GridDiv, Market, MarketGrid, MarketHeading, MarketText } from "./EmailMarketing.style";
import Image from "next/image";
import img1 from "../../EmailServices/assests/platform.png"
import img2 from "../../EmailServices/assests/newsletter.png"
import img3 from "../../EmailServices/assests/cart.png"
import img4 from "../../EmailServices/assests/signup.png"
import img5 from "../../EmailServices/assests/cross_selling.png"
import img6 from "../../EmailServices/assests/upselling.png"
import img7  from "../../EmailServices/assests/subscriber.png"
import img8  from "../../EmailServices/assests/email_audit.png"
import img9  from "../../EmailServices/assests/email_automation.png"
import img10 from "../../EmailServices/assests/b_testing.png"

const EmailMarketing = () => {
  return (
    <>
          {/* <MarketHeading>Our Email Marketing Services</MarketHeading> */}
      {/* <Market> */}
        {/* {/* <MarketText>
          <ul>
            <li>Email Platform Setup</li>
            <li>Email Newsletter Creation</li>
            <li>Cart Abandonment (or Browse Abandonment) Emails</li>
            <li>Welcome Email Series</li>
            <li>Newsletter Sign Up</li>
            <li>Hero Content Email Workflow</li>
            <li>Cross-selling / Upselling Workflow</li>
          </ul>
        </MarketText>
        <MarketText>
          <ul>
            <li>Ongoing Email Workflow Optimisation</li>
            <li>Email Subscriber Growth</li>
            <li>Email Audit</li>
            <li>Email Database Growth</li>
            <li>Advanced Email Segmentation</li>
            <li>Email Automation</li>
            <li>A/B Split Testing</li>
            <li>GDPR Compliance</li>
          </ul>
        </MarketText> */}       
      {/* </Market> */}

<MarketGrid>

<GridDiv>
  <Image src={img1}/>
  <h1>Platform Setup</h1>
</GridDiv>

<GridDiv>
  <Image src={img2}/>
  <h1>Newsletter Creation</h1>
</GridDiv>
<GridDiv>
  <Image src={img3}/>
  <h1>Cart Abandonment</h1>
</GridDiv>
<GridDiv>
  <Image src={img4}/>
  <h1>Newsletter Sign Up</h1>
</GridDiv>
<GridDiv>
  <Image src={img5}/>
  <h1>Cross- selling</h1>
</GridDiv>
<GridDiv>
  <Image src={img6}/>
  <h1>Cross-Upselling Workflow</h1>
</GridDiv>
<GridDiv>
  <Image src={img7}/>
  <h1>Subscriber Growth</h1>
</GridDiv>
<GridDiv>
  <Image src={img8}/>
  <h1>Email Audit </h1>
</GridDiv>
<GridDiv>
  <Image src={img9}/>
  <h1>Email Automation</h1>
</GridDiv>
<GridDiv>
  <Image src={img10}/>
  <h1>A/B Split Testing</h1>
</GridDiv>


</MarketGrid>



    </>
  );
};

export default EmailMarketing;
