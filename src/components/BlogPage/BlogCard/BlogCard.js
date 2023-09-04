import React from "react";
import { Aticle, Date, TextBox } from "./BlogCard.styles";
import person from "../../../../public/assets/images/Blog/blog-person.svg";
import calender from "../../../../public/assets/images/Blog/date-Image.svg";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import Skeleton from "react-loading-skeleton";

const BlogCard = ({
  src,
  date,
  author,
  heading,
  text,
  id,
  description,
  slug,
  blogsLoading,
}) => {
  return (
    <Aticle>
      {blogsLoading ? (
        <Skeleton style={{ width: "20px", height: "20px" }} />
      ) : (
        <div className="img-box">
          <Image src={src} alt="Blog Image" width="386" height="238" />
        </div>
      )}
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
        {blogsLoading ? (
          <h3> {heading} </h3>
        ) : (
          <Skeleton style={{ width: "20px", height: "20px" }} />
        )}
        {/* <p>{description.slice(0, 20)}</p> */}
        <Link href={`/${slug}`}>
          <button className="read-more">
            {text} <MdOutlineArrowForwardIos />
          </button>
        </Link>
      </TextBox>
    </Aticle>
  );
};

export default BlogCard;
