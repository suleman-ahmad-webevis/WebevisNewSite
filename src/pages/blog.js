import React from "react";
import BlogCard from "src/components/BlogPage/BlogCard/BlogCard";
import { blogdata } from "src/components/BlogPage/BlogCardData";
import Hero from "src/components/BlogPage/Hero/Hero";
import { BlogWrapper } from "src/components/BlogPage/Hero/Hero.styles";
import { ContainerWrapper } from "src/components/Container.styles";
import Layout from "src/components/Layout/Layout";
import { BsArrowRightShort } from "react-icons/bs";
import { Buton } from "src/components/BlogPage/Hero/Hero.styles";
import { Container } from "src/components/Container.styles";
const blog = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <Container>
          <BlogWrapper>
            {blogdata.map((item, index) => (
              <BlogCard
                src={item.image}
                date={item.date}
                author={item.author}
                heading={item.heading}
                text={"Read more"}
                key={index}
              />
            ))}
          </BlogWrapper>
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

export default blog;
