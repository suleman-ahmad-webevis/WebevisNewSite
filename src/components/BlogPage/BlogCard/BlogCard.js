import React from "react";
import { Aticle, Date, TextBox } from "./BlogCard.styles";
import Image from "next/image";
import Link from "next/link";
import { format, parseISO } from "date-fns";

const BlogCard = ({ src, date, author, heading, text, slug }) => {
  return (
    <Aticle>
      <div className="img-box">
        <Image src={src} alt="Blog Image" width="100" height="100" />
      </div>
      <TextBox>
        <Date>
          {/* <span>{`${format(parseISO(date), "yyyy-MM-dd")}`}</span> */}
          <span>{author}</span>
        </Date>
        <h3>{heading}</h3>
        <Link href={`/${slug}`}>
          <button className="read-more">{text}</button>
        </Link>
      </TextBox>
    </Aticle>
  );
};

export default BlogCard;
