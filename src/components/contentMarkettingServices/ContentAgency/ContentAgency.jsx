import React from 'react'
import Image from "next/image";
import { ContentAgencyContent, ContentAgencyContainer, ContentAgencyCard, ContentAgencyButton } from './ContentAgencyStyles'
import LevelOne from '../../../assets/images/Services/ContentMarkettingServices/LevelOne.png'
import LevelTwo from '../../../assets/images/Services/ContentMarkettingServices/LevelTwo.png'
import LevelThree from '../../../assets/images/Services/ContentMarkettingServices/LevelThree.png'
import LevelFour from '../../../assets/images/Services/ContentMarkettingServices/LevelFour.png'
import LevelFive from '../../../assets/images/Services/ContentMarkettingServices/LevelFive.png'
import LevelSix from '../../../assets/images/Services/ContentMarkettingServices/LevelSix.png'
import { Container } from "src/components/Container.styles";

const ContentAgency = () => {
  return (
    <Container>
      <ContentAgencyContainer>
        <h2>THIS IS WHAT OUR CONTENT MARKETING AGENCY DOES</h2>
        <p>
          Being an award-winning content marketing agency means you are doing
          something right. <br />
          Our client-first approach and our system, perfected over years, makes
          sure that the average <br />
          client retention rate is above 90%.
        </p>
        <ContentAgencyContent>
          <ContentAgencyCard>
            <Image src={LevelOne} alt="LevelOne" />
            <h2>CONTENT LANDSCAPE AUDIT</h2>
            <p>
              hat is the current state of your website traffic <br />
              and content? What does it miss? Which <br />
              channels are you publishing content on?
            </p>
          </ContentAgencyCard>
          <ContentAgencyCard>
            <Image src={LevelTwo} alt="LevelTwo" />
            <h2>CONTENT STRATEGY</h2>
            <p>
              hat is the current state of your website traffic <br />
              and content? What does it miss? Which <br />
              channels are you publishing content on?
            </p>
          </ContentAgencyCard>
          <ContentAgencyCard>
            <Image src={LevelThree} alt="LevelThree" />
            <h2>CONTENT DEVELOPMENT PLAN</h2>
            <p>
              hat is the current state of your website traffic <br />
              and content? What does it miss? Which <br />
              channels are you publishing content on?
            </p>
          </ContentAgencyCard>
          <ContentAgencyCard>
            <Image src={LevelFour} alt="LevelFour" />
            <h2>CONTENT CREATION</h2>
            <p>
              hat is the current state of your website traffic <br />
              and content? What does it miss? Which <br />
              channels are you publishing content on?
            </p>
          </ContentAgencyCard>
          <ContentAgencyCard>
            <Image src={LevelFive} alt="LevelFive" />
            <h2>CONTENT DISTRIBUTION</h2>
            <p>
              hat is the current state of your website traffic <br />
              and content? What does it miss? Which <br />
              channels are you publishing content on?
            </p>
          </ContentAgencyCard>
          <ContentAgencyCard>
            <Image src={LevelSix} alt="LevelSix" />
            <h2>ANALYSE AND OPTIMISE</h2>
            <p>
              hat is the current state of your website traffic <br />
              and content? What does it miss? Which <br />
              channels are you publishing content on?
            </p>
          </ContentAgencyCard>
        </ContentAgencyContent>
        <ContentAgencyButton>Book Free Consultation Call</ContentAgencyButton>
      </ContentAgencyContainer>
    </Container>
  );
};

export default ContentAgency
