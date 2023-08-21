import React from "react";
import { BookSec, BookText, BookDiv, BookMain, BookOne } from "./Book.style";
import Image from "next/image";
import img1 from "../../EmailServices/assests/mensImage.png";
import { Container } from "src/components/Container.styles";
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
              <button>
                Book A <span> Call Now </span>{" "}
              </button>
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
