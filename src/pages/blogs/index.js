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

const Blog = () => {
  const [filter, setFilter] = useState("");
  const [blogData, setBlogData] = useState([]);
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

  useEffect(() => {
    // Replace 'YOUR_BEARER_TOKEN' with your actual bearer token
    const bearerToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWRmNGViYmRjYzEwMjNlN2VhNDVmYyIsImVtYWlsIjoiaGFtemFhQHdlYmV2aXMuY29tIiwiaWF0IjoxNjkzNjQyMTQ2LCJleHAiOjE2OTM2NDkzNDZ9.obOcWyqfJanvPrOPVRnI6C6FW4GBAR0zBddSRJs__RU";
    async function getBlogs() {
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
      console.log(data);
    }
    getBlogs();
  }, []);
  console.log(blogData);
  function handelData(ind) {
    if (ind === 1) {
      setBlogData(blogdata);
    } else if (ind === 2) {
      const designData = blogdata.filter((elem) => elem.tag === "design");
      setBlogData(designData);
    } else if (ind === 3) {
      const developmentData = blogdata.filter(
        (elem) => elem.tag === "development"
      );
      setBlogData(developmentData);
    } else if (ind === 4) {
      const seoData = blogdata.filter((elem) => elem.tag === "seo");
      setBlogData(seoData);
    }
  }
  return (
    <div>
      <Layout>
        <Hero filter={filter} setFilter={setFilter} />
        <Container>
          <BlogMainWrapper>
            <div className="filter">
              <p>Categories :</p>
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
                  onClick={() => handelData(1)}
                >
                  All
                </PrimaryButton>
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
                  onClick={() => handelData(2)}
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
                  onClick={() => handelData(3)}
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
                  onClick={() => handelData(4)}
                >
                  SEO
                </PrimaryButton>
              </div>
            </div>
            <BlogWrapper>
              {blogData.length
                ? blogData.map((item, index) => (
                    <BlogCard
                      src={item.bannerImg}
                      date={item.created_at}
                      author={item.author}
                      heading={item.title}
                      text={"Read more"}
                      key={index}
                      id={item.slug}
                    />
                  ))
                : null}
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
