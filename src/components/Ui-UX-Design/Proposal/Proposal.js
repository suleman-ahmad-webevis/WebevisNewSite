import React from "react";
import { ProposalContent, ProposalHolder } from "./Proposal.styles";
import { Container } from "src/components/Container.styles";
import ProposalImg1 from "../../../../public/assets/images/UI-UX/Proposal-img1.png";
import ProposalImg2 from "../../../../public/assets/images/UI-UX/Proposal-img2.png";
import Image from "next/image";
import { PrimaryButton } from "src/components/Button.styles";

const Proposal = () => {
  return (
    <ProposalHolder>
      <Container>
        <ProposalContent>
          <div className="image-holder">
            <div className="img-holder1">
              <Image src={ProposalImg1} alt="ProposalImg1" />
              <div className="text-box box1">
                <strong className="title">Responsive Design:</strong>
                <p>Opt for adaptability across devices and screens.</p>
              </div>
              <div className="text-box box2">
                <strong className="title">Proven Results:</strong>
                <p>Highlight past success stories and quantifiable outcomes.</p>
              </div>
              <div className="text-box box3">
                <strong className="title">Collaboration:</strong>
                <p>
                  Emphasize open communication with clients and stakeholders.
                </p>
              </div>
            </div>

            <div className="center-box">
              <p>Why Choose Our User Experience Design Services?</p>
            </div>
            <div className="img-holder2">
              <Image src={ProposalImg2} alt="ProposalImg1" />
              <div className="text-box box4">
                <strong className="title">Experience and Expertise:</strong>
                <p>
                  Select a team with extensive industry experience and a
                  portfolio.
                </p>
              </div>
              <div className="text-box box5">
                <strong className="title">User Focus:</strong>
                <p>
                  Prioritize user-centric design through research and testing.
                </p>
              </div>
              <div className="text-box box6">
                <strong className="title">Efficient Process:</strong>
                <p>Ensure a structured and transparent design process.</p>
              </div>
            </div>
          </div>
          <div className="btn-holder">
            <PrimaryButton
              width="390"
              minWidth="200"
              height="60"
              minheight="40"
              size="24"
              minsize="18"
            >
              Get a Free Proposal
            </PrimaryButton>
          </div>
        </ProposalContent>
      </Container>
    </ProposalHolder>
  );
};

export default Proposal;
