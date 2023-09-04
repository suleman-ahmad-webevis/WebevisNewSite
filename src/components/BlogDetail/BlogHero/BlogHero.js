import React, { useState, useEffect } from "react";
import {
  BlogDetail,
  BlogDetailHolder,
  ImageHolder,
  Person,
  PersonHolder,
  TagsHolder,
  WidgetsHolder,
} from "./BlogHero.styles";
import { Container } from "src/components/Container.styles";
import BlogPic from "../../../assets/images/Blog/BlogPic1.png";
import Image from "next/image";
import {
  AiOutlineInstagram,
  AiOutlineMessage,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { PrimaryButton } from "src/components/Button.styles";
import { BiLogoFacebook } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { PiPinterestLogoBold } from "react-icons/pi";
import Widgets from "../Widgets/Widgets";

import {
  BlogButton,
  TagButton,
  TagButtonHolder,
} from "../Widgets/Widgets.styles";
import { postdata, recenComment } from "./BlogData";
import Comments from "../Comments/Comments";
import Skeleton from "react-loading-skeleton";

const BlogHero = ({ blogInfo, commentsInfo, loading }) => {
  console.log("The loading in BlogHero", loading);
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [color, setColor] = useState(1);
  const handleClick = (index) => {
    setColor(index);
  };
  const [isColor, setIColor] = useState(1);
  const handleButton = (index) => {
    setIColor(index);
  };
  let bgcolor = "linear-gradient(151deg, #1FABD3 0%, #1CCC97 100%)";
  useEffect(() => {
    async function getTags() {
      try {
        const bearerToken =
          "cd7db0487888f4e031b9029ce4dff88b29cd99d9dcdedfe792cacaf2d1573fff";
        const res = await fetch(
          `https://staging.crm.webevis.com/common/allTags`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${bearerToken}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        setTags(data.items);
      } catch (err) {
        console.log("The error", err);
      }
    }
    async function getCategories() {
      try {
        const bearerToken =
          "cd7db0487888f4e031b9029ce4dff88b29cd99d9dcdedfe792cacaf2d1573fff";
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
      } catch (err) {
        console.log("The error", err);
      }
    }
    async function getBlogs() {
      try {
        const bearerToken =
          "cd7db0487888f4e031b9029ce4dff88b29cd99d9dcdedfe792cacaf2d1573fff";
        const res = await fetch(
          `https://staging.crm.webevis.com/common/all?page=1&perPage=5`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${bearerToken}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        setLatestBlogs(data?.items);
      } catch (err) {
        console.log("The error", err);
      }
    }
    getBlogs();
    getCategories();
    getTags();
  }, []);
  return (
    <BlogDetailHolder>
      <Container>
        <div className="flex">
          <BlogDetail>
            <ImageHolder>
              {loading ? (
                <Skeleton
                  className="skeleton-img "
                  style={{ height: "450px" }}
                />
              ) : (
                <Image
                  src={blogInfo?.bannerImg}
                  alt="BlogPic"
                  width="100"
                  height="100"
                />
              )}
            </ImageHolder>
            <PersonHolder>
              <div className="IconHolder">
                {loading ? (
                  <Skeleton circle={true} className="Person-Skeleton" />
                ) : (
                  <div className="Person">
                    <BsFillPersonFill color="#fff" size="20" />
                  </div>
                )}
                {loading ? (
                  <Skeleton className="Author-Skeleton" />
                ) : (
                  <span>{blogInfo?.author}</span>
                )}
              </div>
              <div className="IconHolder">
                <AiOutlineMessage color="#28B781" size="25" />
                {loading ? (
                  <Skeleton
                    style={{
                      width: "80px",
                      height: "10px",
                    }}
                  />
                ) : (
                  <span> {commentsInfo?.length} Comments</span>
                )}
              </div>
            </PersonHolder>
            {loading ? (
              <Skeleton className="Title-Skeleton" />
            ) : (
              <h2> {blogInfo?.title}</h2>
            )}
            <div className="Content">
              {loading ? (
                <Skeleton className="Content-Skeleton" count={10} />
              ) : (
                <p
                  dangerouslySetInnerHTML={{
                    __html: blogInfo?.description,
                  }}
                />
              )}
            </div>
            <TagsHolder>
              {/* <div className="Tags">
                <span>Tags</span>
                {blogInfo?.tags.map((val, idx) => (
                  <>
                    <PrimaryButton
                      width="71"
                      height="40"
                      radius="32px"
                      size="16"
                      weight="500"
                    >
                      {val?.tagTitle}
                    </PrimaryButton>
                  </>
                ))}
              </div> */}
              <div className="Buttons">
                <button>
                  <BiLogoFacebook size="25" />
                </button>
                <button>
                  <AiOutlineInstagram size="25" />
                </button>
                <button>
                  <FaLinkedinIn size="25" />
                </button>
                <button>
                  <PiPinterestLogoBold size="25" />
                </button>
              </div>
            </TagsHolder>
            <Comments blogInfo={blogInfo} commentsInfo={commentsInfo} loading={loading}/>
          </BlogDetail>
          <WidgetsHolder>
            <div className="Search">
              <input type="text" placeholder="Search Here" />
              <AiOutlineSearch color="#fff" size="25" />
            </div>
            <Widgets
              heading="Latest Post"
              Children={
                <div>
                  {latestBlogs?.length
                    ? latestBlogs?.map((item, index) => (
                        <div className="Latest-Post" key={index}>
                          <div className="img-holder">
                            <Image
                              src={item?.bannerImg}
                              alt="postImage"
                              width="100"
                              height="100"
                            />
                          </div>
                          <div>
                            <div className="profile-Pic">
                              {/* <Image src={item.profilePic} alt="profilePic" /> */}
                              <span>{item?.author}</span>
                            </div>
                            <h4>{item?.title}</h4>
                          </div>
                        </div>
                      ))
                    : null}
                </div>
              }
            />
            <Widgets
              heading="Categories"
              Children={
                <div>
                  {categories?.map((val, idx) => (
                    <>
                      <BlogButton
                        bg={color == 1 ? bgcolor : ""}
                        onClick={() => handleClick(1)}
                      >
                        {val?.categoryTitle}
                      </BlogButton>
                    </>
                  ))}
                </div>
              }
            />
            <Widgets
              heading="Tags"
              Children={
                <TagButtonHolder>
                  {tags?.map((val, idx) => (
                    <>
                      <TagButton
                        key={idx}
                        bg={isColor == 1 ? bgcolor : ""}
                        onClick={() => handleButton(1)}
                      >
                        {val?.tagTitle}
                      </TagButton>
                    </>
                  ))}
                </TagButtonHolder>
              }
            />
            {/* <Widgets
              heading="Recent Comment"
              Children={
                <div>
                  {recenComment.map((item, index) => (
                    <ul key={index} className="li-list">
                      <li>
                        <div className="Image">
                          <Image src={item.image} alt="Message" />
                        </div>
                        <p>{item.text}</p>
                      </li>
                    </ul>
                  ))}
                </div>
              }
            /> */}
          </WidgetsHolder>
        </div>
      </Container>
    </BlogDetailHolder>
  );
};

export default BlogHero;
