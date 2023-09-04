import React from "react";
import { Aticle, Date, TextBox } from "./BlogCard.styles";
import person from "../../../../public/assets/images/Blog/blog-person.svg";
import calender from "../../../../public/assets/images/Blog/date-Image.svg";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { format, parseISO } from "date-fns";

const BlogCard = ({
  src,
  date,
  author = "Atif",
  heading,
  text,
  id,
  discreption,
}) => {
  return (
    <Aticle>
      <div className="img-box">
        <Image src={src} alt="Blog Image" width="386" height="238" />
      </div>
      <TextBox>
        <Date>
          <span>
            <Image src={person} alt="profile" />
            {author}
          </span>

          <span>
            <Image src={calender} alt="calender" />
            {date}
          </span>
        </Date>
        <h3>{heading}</h3>
        <p>{discreption[0].slice(0, 188)}</p>
        <Link href={`/blogs/${id}`}>
          <button className="read-more">
            {text} <MdOutlineArrowForwardIos />
          </button>
        </Link>
      </TextBox>
    </Aticle>
  );
};

export default BlogCard;
