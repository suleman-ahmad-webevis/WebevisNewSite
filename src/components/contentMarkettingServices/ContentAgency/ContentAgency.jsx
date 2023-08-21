import React, { useState } from "react";
import Image from "next/image";
import {
  ContentAgencyContent,
  ContentAgencyContainer,
  ContentAgencyCard,
  ContentAgencyButton,
  Number,
} from "./ContentAgencyStyles";

import { Container } from "src/components/Container.styles";
import { PrimaryButton } from "src/components/Button.styles";
import Modal from "src/components/Modal/Modal";
import DateModal from "src/components/HireDeveloper/SkilledDevelopers/DateModal";

const ContentAgency = () => {
  const [modal, setModal] = useState(false);
  return (
    <Container>
      <Modal
        open={modal}
        setOpen={setModal}
        desktopTop="9px"
        desktopRight="10px"
        MobileTop="9px"
        MobileRight="10px"
        svgColor="black"
        child={<DateModal />}
      />
      <ContentAgencyContainer>
        <h2>
          This is What Our <br /> Content Marketing Agency Does
        </h2>
        <p>
          Being an award-winning content marketing agency means you are doing
          something right. Our client-first approach and our system, perfected
          over years, makes sure that the average client retention rate is above
          90%.
        </p>
        <ContentAgencyContent>
          <ContentAgencyCard>
            <Number>1</Number>
            <h2>content Landscape Audit</h2>
            <p>
              hat is the current state of your website traffic and content? What
              does it miss? Which channels are you publishing content on?
            </p>
          </ContentAgencyCard>
          <ContentAgencyCard>
            <Number>2</Number>

            <h2>Content Strategy</h2>
            <p>
              hat is the current state of your website traffic and content? What
              does it miss? Which channels are you publishing content on?
            </p>
          </ContentAgencyCard>
          <ContentAgencyCard>
            <Number>3</Number>

            <h2>Content Development Plan</h2>
            <p>
              hat is the current state of your website traffic and content? What
              does it miss? Which channels are you publishing content on?
            </p>
          </ContentAgencyCard>
          <ContentAgencyCard>
            <Number>4</Number>

            <h2>Content Creation</h2>
            <p>
              hat is the current state of your website traffic and content? What
              does it miss? Which channels are you publishing content on?
            </p>
          </ContentAgencyCard>
          <ContentAgencyCard>
            <Number>5</Number>

            <h2>Content distribution</h2>
            <p>
              hat is the current state of your website traffic and content? What
              does it miss? Which channels are you publishing content on?
            </p>
          </ContentAgencyCard>
          <ContentAgencyCard>
            <Number>6</Number>

            <h2>Analayse and Optimise</h2>
            <p>
              hat is the current state of your website traffic and content? What
              does it miss? Which channels are you publishing content on?
            </p>
          </ContentAgencyCard>
        </ContentAgencyContent>
        <PrimaryButton
          width="383"
          minWidth="350"
          height="50"
          minheight="40"
          size="24"
          minsize="16"
          radius="7px"
          onClick={() => setModal(true)}
        >
          Book Free Consultation Call
        </PrimaryButton>
      </ContentAgencyContainer>
    </Container>
  );
};

export default ContentAgency;
