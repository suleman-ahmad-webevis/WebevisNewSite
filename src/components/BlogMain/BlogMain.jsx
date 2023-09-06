import React, { useState } from "react";
import BlogCard from "src/components/BlogPage/BlogCard/BlogCard";
import { blogdata } from "src/components/BlogPage/BlogCardData";
import Hero from "src/components/BlogPage/Hero/Hero";
import {
  BlogWrapper,
  BlogMainWrapper,
} from "src/components/BlogPage/Hero/Hero.styles";
import Layout from "src/components/Layout/Layout";
import { BsArrowRightShort } from "react-icons/bs";
import { Buton } from "src/components/BlogPage/Hero/Hero.styles";
import { Container } from "src/components/Container.styles";
import { PrimaryButton } from "src/components/Button.styles";
import Skeleton from "react-loading-skeleton";
import { useBlog } from "src/context/Blogs/BlogContext";
import Link from "next/link";
import { BlogButton } from "../BlogPage/Hero/Hero.styles";
import Slider from "react-slick";
var setting = {
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 4000,
};
const BlogMain = () => {
  const [bg, setBg] = useState(null);

  const {
    page,
    setPage,
    perPage,
    setPerPage,
    searchText,
    setSearchText,
    filterCategory,
    setFilterCategory,
    blogData,
    categories,
    blogsLoading,
    categoryLoading,
  } = useBlog();

  return (
    <div>
      <Layout>
        <Hero filter={searchText} setFilter={setSearchText} />
        <Container>
          <BlogMainWrapper>
            <div className="filter">
              {/* <p>Categories :</p> */}
              <div className="buttonWrapper">
                <Slider {...setting} className="button-slider">
                  {categoryLoading
                    ? Array.from({ length: 3 }).map((_, idx) => (
                        <>
                          <BlogButton
                            radius="4px"
                            bg="#D7F1E3"
                            color="#28B781"
                            height="32"
                            size="14"
                            minsize="12"
                            weight="600"
                            hover="#D7F1E3"
                            shadowH="none"
                            key={idx}
                          >
                            <Skeleton />
                          </BlogButton>
                        </>
                      ))
                    : categories?.length
                    ? categories?.map((val, idx) => (
                        <>
                          <BlogButton
                            radius="4px"
                            bg={
                              bg == val?._id
                                ? "linear-gradient(151deg, #1FABD3 0%, #1CCC97 100%)"
                                : "#fff"
                            }
                            color={bg == val?._id ? "#fff" : "#28B781"}
                            border={bg !== val?._id ? "1px solid #28B781" : ""}
                            height="32"
                            size="14"
                            minsize="12"
                            weight="600"
                            hover={
                              bg == val?._id
                                ? "linear-gradient(151deg, #1FABD3 0%, #1CCC97 100%)"
                                : "#D7F1E3"
                            }
                            shadowH="none"
                            onClick={() => {
                              setFilterCategory(val?._id);
                              setBg(val?._id);
                            }}
                            key={idx}
                          >
                            {val?.categoryTitle}
                          </BlogButton>
                        </>
                      ))
                    : null}
                </Slider>
              </div>
            </div>
            {blogsLoading || blogData?.length ? (
              <BlogWrapper>
                {blogsLoading
                  ? Array.from({ length: 9 }).map((_, idx) => (
                      <BlogCard key={idx} blogsLoading={blogsLoading} />
                    ))
                  : blogData?.length
                  ? blogData.map((item, index) => (
                      <BlogCard
                        bannerImg={item?.bannerImg}
                        date={item?.created_at}
                        author={item?.author}
                        heading={item?.title}
                        text={"Discover further"}
                        key={index}
                        slug={item?.slug}
                        blogsLoading={blogsLoading}
                        description={item?.metaDescription}
                      />
                    ))
                  : null}
              </BlogWrapper>
            ) : (
              <h2>No blogs found </h2>
            )}
          </BlogMainWrapper>
          <Buton>
            {blogData?.hasNextPage ? (
              <button>
                More articles
                <BsArrowRightShort color="#28b781" size="25" className="btn" />
              </button>
            ) : null}
          </Buton>
        </Container>
      </Layout>
    </div>
  );
};

export default BlogMain;
