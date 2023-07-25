import React from "react";
import MessageUs from "src/components/ContactUs/MessageUs/MessageUs";
import Hero from "src/components/ContactUs/Hero/Hero";
import { GetInTouchContainer } from "./GetInTouch.styles";
import Grid from "src/components/Grid";
import GridCol from "src/components/GridCol";
import { Container } from "src/components/Container.styles";

const GetInTouch = () => {
  return (
    <GetInTouchContainer>
      <Container resPadding="0px">
        <Grid lg={24} gap={10}>
          <GridCol lg={12}>
            <Hero />
          </GridCol>
          <GridCol lg={12}>
            <MessageUs />
          </GridCol>
        </Grid>
      </Container>
    </GetInTouchContainer>
  );
};

export default GetInTouch;
