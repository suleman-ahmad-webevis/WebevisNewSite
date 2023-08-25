import React from "react";
import { SecondaryButton } from "../../Button.styles";
import { Container } from "../../Container.styles";
import { Seo, SeoHolder } from "./hireSeo.styles";
import Link from "next/link";

const HireSeo = () => {
  return (
    <SeoHolder>
      <Container>
        <Seo>
          <h2>Are You Looking To Hire seo experts?</h2>
          <Link href="/contact-us">
            <SecondaryButton
              bg="#fff"
              width="191"
              minWidth="130"
              height="50"
              minheight="40"
              size="24"
              minsize="18"
            >
              <label>Contact Us</label>
            </SecondaryButton>
          </Link>
        </Seo>
      </Container>
    </SeoHolder>
  );
};

export default HireSeo;
