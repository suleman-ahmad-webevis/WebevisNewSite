import React from "react";
import {
  EmailBackground,
  EmailSection,
  EmailText,
  EmailFlex,
  EmailOne,
  EmailTwo,
  Scroll
} from "./EmailProcess.style";

const EmailProcess = () => {
  return (
    <>
      <EmailBackground>
        <EmailSection>
          <EmailText>
            <h1>Email Marketing Process</h1>
            <p>Email marketing strategies that work.</p>
            <EmailFlex>
              <EmailOne>
              <Scroll>

                {/* <button>Understanding</button> */}
                <h5>Sorting the Contacts</h5>
                <h5>Email Template</h5>
                <h5>A/B Testing</h5>
                <h5>Sorting the Contacts</h5>
                <h5>Email Template</h5>
                <h5>A/B Testing</h5>

</Scroll>
              </EmailOne>
              <EmailTwo>
                <p>
                  We do a thorough business understanding, market research,
                  industry research, and subject research. We also discuss your
                  objective to devise a strategy matching your purpose.
                </p>
              </EmailTwo>
            </EmailFlex>
          </EmailText>
        </EmailSection>
      </EmailBackground>
    </>
  );
};

export default EmailProcess;
