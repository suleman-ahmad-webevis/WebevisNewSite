import React from "react";
import {
  HelpSection,
  HelpText,
  HelpWrapper,
  ImgBg,
  Method2,
  Methods,
  MethodsItem,
} from "./Help.styles";
import stats from "../../../../public/assets/images/seoservices/stats.png";
import setting from "../../../../public/assets/images/seoservices/setting.png";
import audit from "../../../../public/assets/images/seoservices/audit.png";
import note from "../../../../public/assets/images/seoservices/note.png";
import media from "../../../../public/assets/images/seoservices/Media.png";
import report from "../../../../public/assets/images/seoservices/report.png";

import Image from "next/image";
import { Container } from "src/components/Container.styles";
const Help = () => {
  return (
    <Container>
      <HelpWrapper>
        <HelpSection>
          <HelpText>
            <h1>How SEO Team Can Help</h1>
            <p>
              We enjoy adapting our strategies to offer every client the best
              solutions that are at the forefront of the industry.
            </p>
          </HelpText>
          <Methods width="50%">
            <MethodsItem width="49%" mdwidth="49%">
              <div className="img">
                <Image src={stats} alt="stats" className="img1" />
              </div>

              <h3>Onsite SEO</h3>
              <p>
                We analyse your website’s structure, internal architecture &
                other key elements that are weighted.
              </p>
            </MethodsItem>
            <MethodsItem width="49%" mdwidth="49%" bg="#FFCC03">
              <div className="img">
                <Image src={setting} alt="setting" className="img1" />
              </div>

              <h3>Penalty Recovery</h3>
              <p>
                Our team of SEO consultants have plenty of experience in link
                audits & reviewing backlink profiles.
              </p>
            </MethodsItem>
          </Methods>
        </HelpSection>
        <Method2>
          <MethodsItem bg="#CFEF00">
            <div className="img">
              <Image src={audit} alt="audit" className="img1" />
            </div>

            <h3>Technical SEO Audit</h3>
            <p>
              We are well known within the industry for our technical
              capabilities due to our industry leading software.
            </p>
          </MethodsItem>
          <MethodsItem bg="#00EFFE">
            <div className="img">
              <Image src={note} alt="note" className="img1" />
            </div>

            <h3>Infographics Content</h3>
            <p>
              Our team of creatives, designers & developers work alongside our
              SEO & content teams to ideate.
            </p>
          </MethodsItem>
          <MethodsItem bg="rgba(0, 255, 159, 0.95)">
            <div className="img">
              <Image src={media} alt="stats" className="img1" />
            </div>

            <h3>Media Promotion</h3>
            <p>
              While the search engines are still in their infancy in
              understanding & using social signals algorithmically.
            </p>
          </MethodsItem>
          <MethodsItem bg="#FFCC03">
            <div className="img">
              <Image src={report} alt="stats" className="img1" />
            </div>

            <h3>Reporting & Analysis</h3>
            <p>
              We love data and provide monthly reporting on visibility,
              analytics, conversions & revenue.
            </p>
          </MethodsItem>
        </Method2>
      </HelpWrapper>
    </Container>
  );
};

export default Help;
