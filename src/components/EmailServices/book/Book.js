import React from "react";
import { BookSec, BookText, BookDiv, BookMain, BookOne } from "./Book.style";
import Image from "next/image";
import img1 from "../../EmailServices/assests/mensImage.png";
const Book = () => {
  return (
    <>
      <BookMain>
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
<<<<<<< HEAD
            <Image src={img1} />
          </BookDiv>
        </BookSec>
        <BookOne>
          <Image src={img1} />
=======
            <Image src={img1} alt="img1" />
          </BookDiv>
        </BookSec>
        <BookOne>
          <Image src={img1} alt="img1" />
>>>>>>> a03ceb0f07e1c0d0952dd8ae02d85b415f36951c
        </BookOne>
      </BookMain>
    </>
  );
};

export default Book;
