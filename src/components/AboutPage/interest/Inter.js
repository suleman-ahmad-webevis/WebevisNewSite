import React, { useState } from "react";
import { Container } from "src/components/Container.styles";
import { InterSec, Button, Btn } from "./inter.style";
import { PrimaryButton } from "src/components/Button.styles";
import Link from "next/link";
import Modal from "src/components/Modal/Modal";
import DateModal from "src/components/HireDeveloper/SkilledDevelopers/DateModal";

const Inter = () => {
  const [modal, setModal] = useState(false);
  return (
    <Container>
      <InterSec>
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
            onClick={() => setModal(true)}
          >
            Schedule a call
          </PrimaryButton>
        </Btn>
      </InterSec>
    </Container>
  );
};

export default Inter;
