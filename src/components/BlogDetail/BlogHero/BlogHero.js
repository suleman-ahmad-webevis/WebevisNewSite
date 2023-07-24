import React from "react";
import { BlogDetail, BlogDetailHolder, ImageHolder } from "./BlogHero.styles";
import { Container } from "src/components/Container.styles";
import BlogPic from "../../../assets/images/Blog/BlogPic1.png";
import Image from "next/image";

const BlogHero = () => {
  return (
    <BlogDetailHolder>
      <Container>
        <BlogDetail>
          <ImageHolder>
            <Image src={BlogPic} alt="BlogPic" />
          </ImageHolder>
        </BlogDetail>
      </Container>
    </BlogDetailHolder>
  );
};

export default BlogHero;
