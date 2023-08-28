import React, { useState } from "react";
import BlogCard from "src/components/BlogPage/BlogCard/BlogCard";
import { blogdata } from "src/components/BlogPage/BlogCardData";
import Hero from "src/components/BlogPage/Hero/Hero";
import {
  BlogWrapper,
  BlogMainWrapper,
} from "src/components/BlogPage/Hero/Hero.styles";
import { ContainerWrapper } from "src/components/Container.styles";
import Layout from "src/components/Layout/Layout";
import { BsArrowRightShort } from "react-icons/bs";
import { Buton } from "src/components/BlogPage/Hero/Hero.styles";
import { Container } from "src/components/Container.styles";
import { PrimaryButton } from "src/components/Button.styles";

const Blog = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <Container>
          <BlogMainWrapper>
            <div className="filter">
              <p>Popular Tags :</p>
              <div className="buttonWrapper">
                <PrimaryButton
                  radius="4px"
                  bg="#D7F1E3"
                  color="#28B781"
                  width="82"
                  minWidth="59"
                  height="32"
                  size="14"
                  minsize="12"
                  weight="600"
                  hover="#D7F1E3"
                  shadowH="none"
                >
                  Design
                </PrimaryButton>
                <PrimaryButton
                  radius="4px"
                  bg="#D7F1E3"
                  color="#28B781"
                  width="146"
                  minWidth="126"
                  height="32"
                  size="14"
                  weight="600"
                  hover="#D7F1E3"
                  shadowH="none"
                >
                  Development
                </PrimaryButton>
                <PrimaryButton
                  radius="4px"
                  bg="#D7F1E3"
                  color="#28B781"
                  width="93"
                  minWidth="61"
                  height="32"
                  size="14"
                  weight="600"
                  hover="#D7F1E3"
                  shadowH="none"
                >
                  SEO
                </PrimaryButton>
                <PrimaryButton
                  radius="4px"
                  bg="#D7F1E3"
                  color="#28B781"
                  width="93"
                  minWidth="61"
                  height="32"
                  size="14"
                  weight="600"
                  hover="#D7F1E3"
                  shadowH="none"
                >
                  SEO
                </PrimaryButton>
              </div>
            </div>
            <BlogWrapper>
              {blogdata.map((item, index) => (
                <BlogCard
                  src={item.image}
                  date={item.date}
                  author={item.author}
                  heading={item.heading}
                  text={"Read more"}
                  key={index}
                  id={item.id}
                />
              ))}
            </BlogWrapper>
          </BlogMainWrapper>

          <Buton>
            <button>
              More articles
              <BsArrowRightShort color="#28b781" size="25" className="btn" />
            </button>
          </Buton>
        </Container>
      </Layout>
    </div>
  );
};

export default Blog;
