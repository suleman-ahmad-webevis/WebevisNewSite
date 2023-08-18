import React from 'react'
import Image from "next/image";
import { ApproachCards, ApproachCenter, ApproachContainer, Card, Cards, ConnectAudit } from './ApproachStyles'
import AuditLine from '../../../assets/images/Services/ContentMarkettingServices/AuditLine.png'
import AnalysisLine from '../../../assets/images/Services/ContentMarkettingServices/AnalysisLine.png'
import IdentityAnalyze from '../../../assets/images/Services/ContentMarkettingServices/IdentityAnalyze.png'
import IdentityOptomize from '../../../assets/images/Services/ContentMarkettingServices/IdentityOptomize.png'
import { Container } from "src/components/Container.styles";
const Approach = () => {
  return (
    <Container>
      <ApproachContainer>
        <h2>A Methodical Approach to Content Marketing</h2>
        <h3>
          Our perspective is backed by client experience, industry best
          practices, and proven processes.
        </h3>
        <ApproachCards>
          <Cards>
            <ConnectAudit>
              <Card>
                <h2>Audit & Objectives</h2>
                <p>
                  We’ll take a look at the content marketing strategy that you
                  currently have in place and we’ll compare it with what we know
                  is successful.
                </p>
              </Card>
              <Image src={AuditLine} alt="AuditLine" />
            </ConnectAudit>
            <ConnectAudit>
              <Image src={AnalysisLine} alt="AnalysisLine" />
              <Card>
                <h2>Competitor Analysis</h2>
                <p>
                  There’s nothing wrong with taking a look at your main
                  competitors and delving into their content strategy.
                </p>
              </Card>
            </ConnectAudit>
          </Cards>
          <ApproachCenter>
            <ConnectAudit>
              <Image src={IdentityAnalyze} alt="IdentityAnalyze" />
              <Card>
                <h2>Identify Personas</h2>
                <p>
                  In order to know who we are creating content to attract, we
                  need to know what makes them tick.
                </p>
              </Card>
              <Image src={IdentityOptomize} alt="IdentityOptomize" />
            </ConnectAudit>
          </ApproachCenter>
          <Cards Gap>
            <Card>
              <h2>Analyze</h2>
              <p>
                Applying marketing principles and industry insights with your
                custom measurement plan ensures you have the data you need to
                drive your business decisions.
              </p>
            </Card>
            <Card>
              <h2>Optimize</h2>
              <p>
                With a test + learn approach, we couple real data with best
                practices to maximize performance through continual refinement.
              </p>
            </Card>
          </Cards>
        </ApproachCards>
      </ApproachContainer>
    </Container>
  );
};

export default Approach
