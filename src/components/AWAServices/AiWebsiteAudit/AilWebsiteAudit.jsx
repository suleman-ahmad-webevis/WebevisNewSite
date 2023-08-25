import React from "react";
import Image from "next/image";
import AuditResult from "../../../assets/images/Services/AWAServices/AuditResult.png";
import AuditResultTwo from "../../../assets/images/Services/AWAServices/AuditResultTwo.png";

import {
  AuditCard,
  AuditCards,
  AuditCardsContainer,
  AuditContainer,
  AuditResults,
  AuditCardHeading,
  ResultTwoTitle,
  ResultOneTitle,
  ResponsiveImage,
} from "./AiWebsiteAuditStyles";
import { Unique, auditData } from "./AuditData";
import { Container } from "src/components/Container.styles";

const AilWebsiteAudit = () => {
  return (
    <Container>
      <AuditContainer>
        <h2>Why AI Website Audit</h2>
        <AuditCardsContainer>
          <AuditResults>
            <ResultOneTitle>
              <h3>You will Get:</h3>
              <p>
                Full website analysis and list of recommendations (PDF Report)
              </p>
            </ResultOneTitle>
            <div className="image-holders">
              <Image src={AuditResult} alt="Audit Result" />
            </div>
          </AuditResults>
          <AuditCards>
            {auditData.map((elem, ind) => (
              <AuditCard key={ind}>
                <div className="image-holder">
                  <Image src={elem.image} alt={elem.image} />
                </div>
                <AuditCardHeading>
                  <h4>{elem.head}</h4>
                  <p>{elem.body}</p>
                </AuditCardHeading>
              </AuditCard>
            ))}
          </AuditCards>
        </AuditCardsContainer>
        <AuditCardsContainer>
          <AuditResults>
            <ResultTwoTitle>
              <h3>Unique Technology</h3>
              <p>Self Learning Algorithm</p>
            </ResultTwoTitle>
            <AuditCards>
              {Unique.map((elem, ind) => (
                <AuditCard key={ind}>
                  <div className="image-holder">
                    <Image src={elem.image} alt={elem.image} />
                  </div>
                  <AuditCardHeading>
                    <h4>{elem.head}</h4>
                    <p>{elem.body}</p>
                  </AuditCardHeading>
                </AuditCard>
              ))}
            </AuditCards>
          </AuditResults>
          <AuditResults>
            <Image src={AuditResultTwo} alt="Audit Result" />
          </AuditResults>
        </AuditCardsContainer>
      </AuditContainer>
    </Container>
  );
};

export default AilWebsiteAudit;
