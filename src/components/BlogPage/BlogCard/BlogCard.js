import React from "react";
import { Aticle, Date, TextBox } from "./BlogCard.styles";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ src, date, author = "Atif", heading, text, id }) => {
  return (
    <Aticle>
      <div className="img-box">
        <Image src={src} alt="Blog Image" />
      </div>
      <TextBox>
        <Date>
          <span>{date}</span>
          <span>{author}</span>
        </Date>
        <h3>{heading}</h3>
        <Link href={`/blogs/${id}`}>
          <button className="read-more">{text}</button>
        </Link>
      </TextBox>
    </Aticle>
  );
};

export default BlogCard;
