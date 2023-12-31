import React, { useState, useEffect } from "react";
import BlogCard from "src/components/BlogPage/BlogCard/BlogCard";
import { blogdata } from "src/components/BlogPage/BlogCardData";
import Hero from "src/components/BlogPage/Hero/Hero";
import {
  BlogWrapper,
  BlogMainWrapper,
} from "src/components/BlogPage/Hero/Hero.styles";
import Layout from "src/components/Layout/Layout";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Buton } from "src/components/BlogPage/Hero/Hero.styles";
import { Container } from "src/components/Container.styles";
import Skeleton from "react-loading-skeleton";
import { useBlog } from "src/context/Blogs/BlogContext";
import { ArrowDown, BlogButton } from "../BlogPage/Hero/Hero.styles";
import Slider from "react-slick";
import { useRouter } from "next/router";
var setting = {
  speed: 300,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 4000,
  swipe: true,
  swipeToSlide: true,
  // slidesToScroll: infinite,
};
import { Link, animateScroll as scroll } from "react-scroll";

const BlogMain = () => {
  const {
    searchText,
    setSearchText,
    setFilterCategory,
    blogData,
    categories,
    blogsLoading,
    categoryLoading,
    hasNextPage,
    setPage,
    setPerPage,
    setBlogData,
    perPage,
    filterCategory,
  } = useBlog();

  const [bg, setBg] = useState(0);
  useEffect(() => {
    console.log("The filterCategory", filterCategory);
    setBg(filterCategory ? filterCategory : 0);
  }, [filterCategory]);

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
                    ? Array.from({ length: 8 }).map((_, idx) => (
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
                              setSearchText("");
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
                  ? Array.from({
                      length: blogData.length == 0 ? 9 : blogData.length + 3,
                    }).map((_, idx) => (
                      <BlogCard key={idx} blogsLoading={blogsLoading} />
                    ))
                  : blogData?.length
                  ? blogData.map((item, index) => (
                      <BlogCard
                        id="apply"
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
              <h2 className="no-blog">No blogs found :</h2>
            )}
          </BlogMainWrapper>
          <Buton>
            {hasNextPage ? (
              <Link smooth spy to="apply">
                <button
                  onClick={() => {
                    setPage((prev) => prev + 1);
                    setPerPage(3);
                  }}
                >
                  Load More
                  <ArrowDown className="btn" />
                </button>
              </Link>
            ) : null}
          </Buton>
        </Container>
      </Layout>
    </div>
  );
};

export default BlogMain;
