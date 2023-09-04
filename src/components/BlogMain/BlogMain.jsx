import React from "react";
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

const BlogMain = () => {
  const {
    loading,
    setLoading,
    page,
    setPage,
    perPage,
    setPerPage,
    searchText,
    setSearchText,
    filterCategory,
    setFilterCategory,
    blogData,
    setBlogData,
    categories,
    setCategories,
  } = useBlog();

  return (
    <div>
      <Layout>
        <Hero filter={searchText} setFilter={setSearchText} />
        <Container>
          <BlogMainWrapper>
            <div className="filter">
              <p>Categories :</p>
              {loading
                ? Array.from({ length: 12 }).map((_, idx) => (
                    <div className="buttonWrapper" key={idx}>
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
                        <Skeleton />
                      </PrimaryButton>
                    </div>
                  ))
                : categories?.length
                ? categories?.map((val, idx) => (
                    <div className="buttonWrapper" key={idx}>
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
                        onClick={() => setFilterCategory(val?._id)}
                      >
                        {val?.categoryTitle}
                      </PrimaryButton>
                    </div>
                  ))
                : null}
            </div>
            {loading || blogData?.length ? (
              <BlogWrapper>
                {loading
                  ? Array.from({ length: 9 }).map((_, idx) => (
                      <BlogCard key={idx} loading={loading} />
                    ))
                  : blogData?.length
                  ? blogData.map((item, index) => (
                      <BlogCard
                        src={item?.bannerImg}
                        date={item?.created_at}
                        author={item?.author}
                        heading={item?.title}
                        text={"Read more"}
                        key={index}
                        slug={item?.slug}
                        loading={loading}
                      />
                    ))
                  : null}
              </BlogWrapper>
            ) : (
              <h2>No blogs </h2>
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
