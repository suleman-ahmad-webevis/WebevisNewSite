import React from 'react'
import Image from "next/image";
import { ContentCreationContent, ContentCreationMobileContent, ContentCreationArrowLine, ContentCreationArrow, ContentCreationContainer, ContentCreationCards, ContentCreationCard, ContentCreationLevel, ContentCreationStage } from './ContentCreationStyles'
import Arrow from '../../../assets/images/Services/ContentMarkettingServices/Arrow.png'
import ArrowLine from '../../../assets/images/Services/ContentMarkettingServices/ArrowLine.png'
import StageOne from '../../../assets/images/Services/ContentMarkettingServices/StageOne.png'
import StageTwo from '../../../assets/images/Services/ContentMarkettingServices/StageTwo.png'
import StageThree from '../../../assets/images/Services/ContentMarkettingServices/StageThree.png'
import StageFour from '../../../assets/images/Services/ContentMarkettingServices/StageFour.png'
import StageFive from '../../../assets/images/Services/ContentMarkettingServices/StageFive.png'
import { Container } from "src/components/Container.styles";

const ContentCreation = () => {
  return (
    <Container>
      <ContentCreationContainer>
        <h2>Why our content creation services are best?</h2>
        <p>There are five levels of Content Operations.</p>
        <ContentCreationContent>
          <ContentCreationCards>
            <ContentCreationLevel>
              <ContentCreationCard>
                <Image src={StageOne} alt="StageOne" />
                <h2>Chaotic</h2>
                <p>Targeted to certain areas like blogs or newsletters</p>
              </ContentCreationCard>
              <ContentCreationArrow>
                <Image src={Arrow} alt="Arrow" />
              </ContentCreationArrow>
            </ContentCreationLevel>
            <ContentCreationLevel>
              <ContentCreationCard>
                <Image src={StageTwo} alt="StageTwo" />
                <h2>Piloting</h2>
                <p>Targeted to certain areas like blogs or newsletters</p>
              </ContentCreationCard>
              <ContentCreationArrow>
                <Image src={Arrow} alt="Arrow" />
              </ContentCreationArrow>
            </ContentCreationLevel>
            <ContentCreationLevel>
              <ContentCreationCard>
                <Image src={StageThree} alt="StageThree" />
                <h2>Scaling</h2>
                <p>Targeted to certain areas like blogs or newsletters</p>
              </ContentCreationCard>
            </ContentCreationLevel>
          </ContentCreationCards>
        </ContentCreationContent>
        <ContentCreationContent>
          <ContentCreationCards>
            <ContentCreationLevel>
              <ContentCreationCard>
                <Image src={StageFour} alt="StageFour" />
                <h2>Sustaining</h2>
                <p>Targeted to certain areas like blogs or newsletters</p>
              </ContentCreationCard>
              <ContentCreationArrow>
                <Image src={Arrow} alt="Arrow" />
              </ContentCreationArrow>
            </ContentCreationLevel>
            <ContentCreationLevel>
              <ContentCreationCard>
                <Image src={StageFive} alt="StageFive" />
                <h2>Thriving</h2>
                <p>Targeted to certain areas like blogs or newsletters</p>
              </ContentCreationCard>
            </ContentCreationLevel>
          </ContentCreationCards>
        </ContentCreationContent>

        {/* 760         */}

        <ContentCreationMobileContent>
          <ContentCreationCards>
            <ContentCreationLevel>
              <ContentCreationCard>
                <Image src={StageOne} alt="StageOne" />
                <h2>Chaotic</h2>
                <p>Targeted to certain areas like blogs or newsletters</p>
              </ContentCreationCard>
              <ContentCreationArrowLine>
                <Image src={ArrowLine} alt="ArrowLine" />
              </ContentCreationArrowLine>
            </ContentCreationLevel>
            <ContentCreationLevel>
              <ContentCreationCard>
                <Image src={StageTwo} alt="StageTwo" />
                <h2>Piloting</h2>
                <p>Targeted to certain areas like blogs or newsletters</p>
              </ContentCreationCard>
              <ContentCreationArrowLine>
                <Image src={ArrowLine} alt="ArrowLine" />
              </ContentCreationArrowLine>
            </ContentCreationLevel>
            <ContentCreationLevel>
              <ContentCreationCard>
                <Image src={StageThree} alt="StageThree" />
                <h2>Scaling</h2>
                <p>Targeted to certain areas like blogs or newsletters</p>
              </ContentCreationCard>
            </ContentCreationLevel>
          </ContentCreationCards>
        </ContentCreationMobileContent>
        <ContentCreationMobileContent>
          <ContentCreationCards>
            <ContentCreationLevel>
              <ContentCreationCard>
                <Image src={StageFour} alt="StageFour" />
                <h2>Sustaining</h2>
                <p>Targeted to certain areas like blogs or newsletters</p>
              </ContentCreationCard>
              <ContentCreationArrowLine>
                <Image src={ArrowLine} alt="ArrowLine" />
              </ContentCreationArrowLine>
            </ContentCreationLevel>
            <ContentCreationLevel>
              <ContentCreationCard>
                <Image src={StageFive} alt="StageFive" />
                <h2>Thriving</h2>
                <p>Targeted to certain areas like blogs or newsletters</p>
              </ContentCreationCard>
            </ContentCreationLevel>
          </ContentCreationCards>
        </ContentCreationMobileContent>
      </ContentCreationContainer>
    </Container>
  );
};

export default ContentCreation
