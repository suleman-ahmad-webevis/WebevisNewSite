import React, { useState } from "react";
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
import { useBlog } from "src/context/Blogs/BlogContext";
import { useRouter } from "next/router";

const BlogHero = ({ blogInfo, commentsInfo, singleLoading }) => {
  const [color, setColor] = useState(1);
  const handleClick = (index) => {
    setColor(index);
  };
  const [isColor, setIColor] = useState(1);
  const handleButton = (index) => {
    setIColor(index);
  };
  let bgcolor = "linear-gradient(151deg, #1FABD3 0%, #1CCC97 100%)";
  const router = useRouter();
  const { blogData, categories, tags, setFilterCategory, loading } = useBlog();
  return (
    <BlogDetailHolder>
      <Container>
        <div className="flex">
          <BlogDetail>
            <ImageHolder>
              {singleLoading ? (
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
                {singleLoading ? (
                  <Skeleton circle={true} className="Person-Skeleton" />
                ) : (
                  <div className="Person">
                    <BsFillPersonFill color="#fff" size="20" />
                  </div>
                )}
                {singleLoading ? (
                  <Skeleton className="Author-Skeleton" />
                ) : (
                  <span>{blogInfo?.author}</span>
                )}
              </div>
              <div className="IconHolder">
                {singleLoading ? (
                  <Skeleton circle={true} className="Person-Skeleton" />
                ) : (
                  <div className="IconHolder">
                    <AiOutlineMessage color="#28B781" size="25" />
                  </div>
                )}
                {singleLoading ? (
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
            {singleLoading ? (
              <Skeleton className="Title-Skeleton" />
            ) : (
              <h2> {blogInfo?.title}</h2>
            )}
            <div className="Content">
              {singleLoading ? (
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
            <Comments
              blogInfo={blogInfo}
              commentsInfo={commentsInfo}
              singleLoading={singleLoading}
            />
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
                  {blogData?.length
                    ? blogData?.map((item, index) => (
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
                  {singleLoading
                    ? Array.from({ length: 3 }).map((_, idx) => (
                        <>
                          <BlogButton bg="" key={idx}>
                            <Skeleton
                              style={{ width: "95%", height: "20px" }}
                            />
                          </BlogButton>
                        </>
                      ))
                    : categories?.length
                    ? categories?.map((val, idx) => (
                        <>
                          <BlogButton
                            key={idx}
                            bg={
                              blogInfo?.category?._id === val?._id
                                ? bgcolor
                                : ""
                            }
                            onClick={() => {
                              setFilterCategory(val._id);
                              router.push({
                                pathname: "/blogs",
                              });
                            }}
                          >
                            {val?.categoryTitle}
                          </BlogButton>
                        </>
                      ))
                    : null}
                </div>
              }
            />
            <Widgets
              heading="Tags"
              Children={
                <TagButtonHolder>
                  {singleLoading
                    ? Array.from({ length: 3 }).map((_, idx) => (
                        <TagButton
                          key={idx}
                          bg=""
                          onClick={() => handleButton(1)}
                        >
                          <Skeleton style={{ width: "45px", height: "25px" }} />
                        </TagButton>
                      ))
                    : tags?.length
                    ? tags?.map((val, idx) => (
                        <TagButton
                          bg={
                            blogInfo?.tags.some((tag) => tag._id === val._id)
                              ? bgcolor
                              : ""
                          }
                          key={idx}
                          onClick={() => handleButton(1)}
                        >
                          {val?.tagTitle}
                        </TagButton>
                      ))
                    : null}
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
