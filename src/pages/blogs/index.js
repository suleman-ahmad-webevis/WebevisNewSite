import React, { useEffect, useState } from "react";
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
import Loading from "src/components/Loading/Loading";

const Blog = () => {
  const [filter, setFilter] = useState("");
  const [blogData, setBlogData] = useState([]);
  const [categories, setCategories] = useState([]);
  // const [searchQuery, setSearchQuery] = useState({
  //   page: 1,
  //   pageSize: 10,
  //   searchText: "",
  //   startDate: "",
  //   endDate: "",
  //   filterText: "",
  //   filterCategory: "",
  // });
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(9);
  const [searchText, setSearchText] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const bearerToken =
      "cd7db0487888f4e031b9029ce4dff88b29cd99d9dcdedfe792cacaf2d1573fff";
    async function getBlogs() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://staging.crm.webevis.com/common/all?page=${page}&perPage=${perPage}&searchText=${searchText}&filterCategory=${filterCategory}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${bearerToken}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        setBlogData(data.items);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log("The error", err);
      }
    }
    async function getCategories() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://staging.crm.webevis.com/common/allCategories`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${bearerToken}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        setCategories(data.items);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log("The error", err);
      }
    }
    getCategories();
    getBlogs();
  }, [page, perPage, searchText, filterCategory]);

  // function handelData(ind) {
  //   if (ind === 1) {
  //     setBlogData(blogdata);
  //   } else if (ind === 2) {
  //     const designData = blogdata.filter((elem) => elem.tag === "design");
  //     setBlogData(designData);
  //   } else if (ind === 3) {
  //     const developmentData = blogdata.filter(
  //       (elem) => elem.tag === "development"
  //     );
  //     setBlogData(developmentData);
  //   } else if (ind === 4) {
  //     const seoData = blogdata.filter((elem) => elem.tag === "seo");
  //     setBlogData(seoData);
  //   }
  // }
  return (
    <div>
      <Layout>
        <Hero filter={searchText} setFilter={setSearchText} />
        <Container>
          {loading ? (
            <Loading />
          ) : (
            <>
              <BlogMainWrapper>
                <div className="filter">
                  <p>Categories :</p>
                  {categories?.map((val, idx) => (
                    <>
                      <div className="buttonWrapper">
                        <PrimaryButton
                          key={idx}
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
                    </>
                  ))}
                </div>
                <BlogWrapper>
                  {blogData?.length
                    ? blogData.map((item, index) => (
                        <BlogCard
                          src={item?.bannerImg}
                          date={item?.created_at}
                          author={item?.author}
                          heading={item?.title}
                          text={"Read more"}
                          key={index}
                          slug={item?.slug}
                        />
                      ))
                    : null}
                </BlogWrapper>
              </BlogMainWrapper>
              <Buton>
                {blogData?.hasNextPage ? (
                  <button>
                    More articles
                    <BsArrowRightShort
                      color="#28b781"
                      size="25"
                      className="btn"
                    />
                  </button>
                ) : null}
              </Buton>
            </>
          )}
        </Container>
      </Layout>
    </div>
  );
};

export default Blog;
