import React from "react";
import { Aticle, Date, TextBox } from "./BlogCard.styles";
import person from "../../../../public/assets/images/Blog/blog-person.svg";
import calender from "../../../../public/assets/images/Blog/date-Image.svg";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
const moment = require("moment");

const BlogCard = ({
  bannerImg,
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
        <Skeleton className="Card-Skeleton-Img" />
      ) : (
        <div className="img-box">
          <Image src={bannerImg} alt="Blog Image" width="386" height="238" />
        </div>
      )}
      <TextBox>
        <Date>
          <span>
            <Image src={person} alt="profile" />
            {blogsLoading ? <Skeleton className="Date-Skeleton" /> : author}
          </span>
          <span>
            <Image src={calender} alt="calender" />
            {blogsLoading ? (
              <Skeleton className="Date-Skeleton" />
            ) : (
              moment(date)?.format("MMM DD, YYYY")
            )}
          </span>
        </Date>
        {blogsLoading ? (
          <Skeleton className="Heading-Skeleton" />
        ) : (
          <h3>{heading}</h3>
        )}
        {blogsLoading ? (
          <Skeleton className="Heading-Skeleton" count={4} />
        ) : (
          <p>{description?.slice(0, 100)}</p>
        )}
        <Link href={`/${slug}`}>
          <button className="read-more">
            {blogsLoading ? <Skeleton className="ReadMore-Skeleton" /> : text}{" "}
            <MdOutlineArrowForwardIos />
          </button>
        </Link>
      </TextBox>
    </Aticle>
  );
};

export default BlogCard;
