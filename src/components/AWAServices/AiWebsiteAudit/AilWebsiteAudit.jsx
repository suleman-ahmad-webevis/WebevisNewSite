import React from 'react'
import Image from "next/image";
import AuditResult from "../../../assets/images/Services/AWAServices/AuditResult.png";
import PDF from "../../../assets/images/Services/AWAServices/PDF.png";
import Yourself from "../../../assets/images/Services/AWAServices/Yourself.png";
import Slides from "../../../assets/images/Services/AWAServices/Slides.png";
import AuditResultTwo from "../../../assets/images/Services/AWAServices/AuditResultTwo.png";
import Instance from "../../../assets/images/Services/AWAServices/Instance.png";
import Expert from "../../../assets/images/Services/AWAServices/Expert.png";
import Perfect from "../../../assets/images/Services/AWAServices/Perfect.png";
import { AuditCard, AuditCards, AuditCardsContainer, AuditContainer, AuditResults, AuditCardHeading, ResultTwoTitle, ResultOneTitle } from './AiWebsiteAuditStyles'

const AilWebsiteAudit = () => {
  return (
    <AuditContainer>
      <h2>Why AI Website Audit</h2>
        <AuditCardsContainer>
          <AuditResults>
            <ResultOneTitle>
            <h3>You will Get:</h3>
            <p>Full website analysis and list of recommendations (PDF Report)</p>
            </ResultOneTitle>
            <Image src={AuditResult} alt="Audit Result" />
          </AuditResults>
          <AuditCards>
            <AuditCard>
              <Image src={PDF} alt="PDF Reports" />
              <AuditCardHeading>
                <h4>Up to 30 Pages of Report</h4>
                <p>Depending on your website.</p>
              </AuditCardHeading>
            </AuditCard>
            <AuditCard>
              <Image src={Yourself} alt="Yourself" />
              <AuditCardHeading>
                <h4>Can-Do-It-Yourself</h4>
                <p>Easy to implement recommendations.</p>
              </AuditCardHeading>
            </AuditCard>
            <AuditCard>
              <Image src={Slides} alt="Slides" />
              <AuditCardHeading>
                <h4>Six Sides of the Audit</h4>
                <p>On-Page SEO, Links, Usability, Performance, <br />
                    Social, Technical Issues
                </p>
              </AuditCardHeading>
            </AuditCard>
          </AuditCards>
        </AuditCardsContainer>
        <AuditCardsContainer>
          <AuditResults>
            <ResultTwoTitle>
            <h3>Unique Technology</h3>
            <p>Self Learning Algorithm</p>
            </ResultTwoTitle>
          <AuditCards>
            <AuditCard>
              <Image src={Instance} alt="Instance Reports" />
              <AuditCardHeading>
                <h4>Instant Report</h4>
                <p>You will get a beautiful PDF report in two minutes.</p>
              </AuditCardHeading>
            </AuditCard>
            <AuditCard>
              <Image src={Perfect} alt="Perfect" />
              <AuditCardHeading>
                <h4>Perfect for Any Size of Business</h4>
                <p>You can edit colors and backgrounds to highlight <br />features.</p>
              </AuditCardHeading>
            </AuditCard>
            <AuditCard>
              <Image src={Expert} alt="Expert" />
              <AuditCardHeading>
                <h4>Experts Proven Tools</h4>
                <p>All steps are tested by specialists with 15+ years of <br />
                    experience.
                </p>
              </AuditCardHeading>
            </AuditCard>
          </AuditCards>
          </AuditResults>
            <Image src={AuditResultTwo} alt="Audit Result" />
        </AuditCardsContainer>
    </AuditContainer>
  )
}

export default AilWebsiteAudit
