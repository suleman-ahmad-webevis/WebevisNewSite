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
import { BsFillPersonFill, BsPerson } from "react-icons/bs";
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
import Link from "next/link";

const BlogHero = ({ blogInfo, commentsInfo, singleLoading }) => {
  const shareUrl = `https://medium.com/better-programming/advices-from-a-software-engineer-with-8-years-of-experience-8df5111d4d55`;
  const [updatedComments, setUpdatedComments] = useState([]);

  const imageUrl = "https://example.com/image.jpg";

  // const openFacebookSharePopup = () => {
  //   const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
  //     shareUrl
  //   )}`;
  //   window.open(facebookShareUrl);
  // };

  // const openLinkedInSharePopup = () => {
  //   const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
  //     shareUrl
  //   )}`;
  //   window.open(linkedInShareUrl, "_blank");
  // };

  // const openPinterestSharePopup = () => {
  //   const pinterestShareUrl = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(
  //     shareUrl
  //   )}&media=${encodeURIComponent(imageUrl)}`;
  //   window.open(pinterestShareUrl);
  // };

  useEffect(() => {
    setUpdatedComments(commentsInfo);
  }, [commentsInfo]);

  let bgcolor = "linear-gradient(151deg, #1FABD3 0%, #1CCC97 100%)";
  const router = useRouter();
  const { categories, latestPosts, setBlogData } = useBlog();
  console.log({ categories, latestPosts, singleLoading });
  return (
    <BlogDetailHolder>
      <Container>
        <div className="flex">
          <BlogDetail>
            <ImageHolder>
              {singleLoading ? (
                <Skeleton className="BlogDetail-Img-Skeleton" />
              ) : (
                <Image
                  src={blogInfo?.bannerImg}
                  alt="BlogPic"
                  width="900"
                  height="900"
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
                  <span> {updatedComments?.length} Comments</span>
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
              <div className="Buttons">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    shareUrl
                  )}`}
                  target="_blank"
                >
                  <BiLogoFacebook size="25" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    shareUrl
                  )}`}
                  target="_blank"
                >
                  <AiOutlineInstagram size="25" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    shareUrl
                  )}`}
                  target="_blank"
                >
                  <FaLinkedinIn size="25" />
                </a>
                <a
                  href={` https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(
                    shareUrl
                  )}&media=${encodeURIComponent(imageUrl)}`}
                  target="_blank"
                >
                  <PiPinterestLogoBold size="25" />
                </a>
              </div>
            </TagsHolder>
            <Comments
              singleLoading={singleLoading}
              blogInfo={blogInfo}
              updatedComments={updatedComments}
              setUpdatedComments={setUpdatedComments}
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
                  {singleLoading ? (
                    Array.from({ length: 5 }).map((_, idx) => (
                      <>
                        <div className="Latest-Post" key={idx}>
                          <div className="img-holder">
                            <Skeleton
                              style={{ width: "75px", height: "75px" }}
                            />
                          </div>
                          <div>
                            <div className="profile-Pic">
                              <Skeleton
                                style={{ width: "95px", height: "20px" }}
                              />
                            </div>
                            <Skeleton
                              style={{ width: "95px", height: "20px" }}
                            />
                          </div>
                        </div>
                      </>
                    ))
                  ) : latestPosts?.length ? (
                    latestPosts?.map((item, index) => (
                      <>
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
                            <Link href={`/${item?.slug}`}>
                              <h4>{item?.title}</h4>
                            </Link>
                          </div>
                        </div>
                      </>
                    ))
                  ) : (
                    <>No posts found</>
                  )}
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
                              setBlogData([]);
                              router.push({
                                pathname: "/blogs",
                                query: { categoryId: val?._id },
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
