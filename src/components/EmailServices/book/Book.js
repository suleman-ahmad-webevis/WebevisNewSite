import React from "react";
import { BookSec, BookText, BookDiv, BookMain, BookOne } from "./Book.style";
import Image from "next/image";
import img1 from "../../EmailServices/assests/mensImage.png";
import { Container } from "src/components/Container.styles";
import { PrimaryButton } from "src/components/Button.styles";
import { SecondaryButton } from "src/components/Button.styles";
const Book = () => {
  return (
    <>
      <BookMain>
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
