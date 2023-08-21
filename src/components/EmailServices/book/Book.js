import React, { useState } from "react";
import { BookSec, BookText, BookDiv, BookMain, BookOne } from "./Book.style";
import Image from "next/image";
import img1 from "../../EmailServices/assests/mensImage.png";
import { Container } from "src/components/Container.styles";
import Modal from "src/components/Modal/Modal";
import DateModal from "src/components/HireDeveloper/SkilledDevelopers/DateModal";
const Book = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <BookMain>
        <Modal open={modal} setOpen={setModal} child={<DateModal />} />
        <Container className="container">
          <BookSec>
            <BookText>
              <h1>
                Level Up Your Content Marketing Game with Your Own Dedicated
                Content Marketer!
              </h1>
              <button onClick={() => setModal(true)}>
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
