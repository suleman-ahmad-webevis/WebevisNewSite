import React from "react";
import { Container } from "src/components/Container.styles";
import { InterSec, Button, Btn } from "./inter.style";
import { PrimaryButton } from "src/components/Button.styles";
import Link from "next/link";

const Inter = () => {
  return (
    <Container>
      <InterSec>
        <p>Interested?</p>
        <h1>Let&apos;s Write Your Success Story!</h1>
        <Btn>
          <Link href="/contact-us">
            <PrimaryButton
              radius="6px"
              width="213"
              minWidth="140"
              height="45"
              minheight="35"
              size="20"
              minsize="14"
              weight="500"
            >
              Contact Us
            </PrimaryButton>
          </Link>

          <PrimaryButton
            bg="#434956"
            radius="6px"
            width="213"
            minWidth="140"
            height="45"
            minheight="35"
            size="20"
            minsize="14"
            weight="500"
            hover="#434956"
            shadowH="none"
          >
            Schedule a call
          </PrimaryButton>
        </Btn>
      </InterSec>
    </Container>
  );
};

export default Inter;
