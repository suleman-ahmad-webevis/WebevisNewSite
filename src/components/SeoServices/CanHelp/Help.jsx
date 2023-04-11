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
import stats from "../../../assets/images/seoservices/stats.png";
import setting from "../../../assets/images/seoservices/setting.png";
import audit from "../../../assets/images/seoservices/audit.png";
import note from "../../../assets/images/seoservices/note.png";
import media from "../../../assets/images/seoservices/Media.png";
import report from "../../../assets/images/seoservices/report.png";
import statsW from "../../../assets/images/seoservices/statsW.png";
import settingW from "../../../assets/images/seoservices/settingW.png";
import auditW from "../../../assets/images/seoservices/auditW.png";
import noteW from "../../../assets/images/seoservices/noteW.png";
import mediaW from "../../../assets/images/seoservices/MediaW.png";
import reportW from "../../../assets/images/seoservices/reportW.png";
import Image from "next/image";
import Head from "next/head";

const Help = () => {
  return (
    <>
      <Head></Head>
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
            <MethodsItem width height>
              <Image src={stats} alt="stats" className="img1" />
              <Image src={statsW} alt="stats" className="img2" />

              <h3>Onsite SEO</h3>
              <p>
                We analyse your website’s structure, internal architecture &
                other key elements that are weighted.
              </p>
            </MethodsItem>
            <MethodsItem>
              <Image src={setting} alt="setting" className="img1" />
              <Image src={settingW} alt="setting" className="img2" />

              <h3>Penalty Recovery</h3>
              <p>
                Our team of SEO consultants have plenty of experience in link
                audits & reviewing backlink profiles.
              </p>
            </MethodsItem>
          </Methods>
        </HelpSection>
        <Method2>
          <MethodsItem>
            <Image src={audit} alt="audit" className="img1" />
            <Image src={auditW} alt="audit" className="img2" />

            <h3>Technical SEO Audit</h3>
            <p>
              We are well known within the industry for our technical
              capabilities due to our industry leading software.
            </p>
          </MethodsItem>
          <MethodsItem>
            <Image src={note} alt="note" className="img1" />
            <Image src={noteW} alt="note" className="img2" />

            <h3>Infographics Content</h3>
            <p>
              Our team of creatives, designers & developers work alongside our
              SEO & content teams to ideate.
            </p>
          </MethodsItem>
          <MethodsItem>
            <Image src={media} alt="stats" className="img1" />
            <Image src={mediaW} alt="stats" className="img2" />

            <h3>Media Promotion</h3>
            <p>
              While the search engines are still in their infancy in
              understanding & using social signals algorithmically.
            </p>
          </MethodsItem>
          <MethodsItem>
            <Image src={report} alt="stats" className="img1" />
            <Image src={reportW} alt="stats" className="img2" />

            <h3>Reporting & Analysis</h3>
            <p>
              We love data and provide monthly reporting on visibility,
              analytics, conversions & revenue.
            </p>
          </MethodsItem>
        </Method2>
      </HelpWrapper>
    </>
  );
};

export default Help;
