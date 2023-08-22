import React, { useState } from "react";
import { BookSec, BookText, BookDiv, BookMain, BookOne } from "./Book.style";
import Image from "next/image";
import img1 from "../../EmailServices/assests/mensImage.png";
import { Container } from "src/components/Container.styles";
import { SecondaryButton } from "src/components/Button.styles";
import Modal from "src/components/Modal/Modal";
import DateModal from "src/components/HireDeveloper/SkilledDevelopers/DateModal";
const Book = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <BookMain>
        <Modal
          open={modal}
          setOpen={setModal}
          desktopTop="9px"
          desktopRight="10px"
          MobileTop="9px"
          MobileRight="10px"
          svgColor="black"
          mobileColor="black"
          child={<DateModal />}
        />
        <Container className="container">
          <BookSec>
            <BookText>
              <h1>
                Level Up Your Content Marketing Game with Your Own Dedicated
                Content Marketer!
              </h1>
              <SecondaryButton
                size="24"
                minsize="18"
                color="#28b781"
                radius="8px"
                width="321"
                minWidth="350"
                height="50"
                minheight="40"
                bg="#ffffff"
                shadowH="none"
                hover="#000"
                onClick={() => setModal(true)}
              >
                <label> Book A Call Now </label>
              </SecondaryButton>
            </BookText>
            <BookDiv>
              <Image src={img1} alt="img1" />
            </BookDiv>
          </BookSec>
          <BookOne>
            <Image src={img1} alt="img1" />
          </BookOne>
        </Container>
      </BookMain>
    </>
  );
};

export default Book;
