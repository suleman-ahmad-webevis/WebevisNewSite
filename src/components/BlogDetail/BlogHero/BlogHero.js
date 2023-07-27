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

const BlogHero = ({ blogDetailsData }) => {
  const [color, setColor] = useState(1);
  const handleClick = (index) => {
    setColor(index);
  };
  const [isColor, setIColor] = useState(1);
  const handleButton = (index) => {
    setIColor(index);
  };
  let bgcolor = "linear-gradient(151deg, #1FABD3 0%, #1CCC97 100%)";
  console.log({ blogDetailsData });
  return (
    <BlogDetailHolder>
      <Container>
        <div className="flex">
          <BlogDetail>
            <ImageHolder>
              <Image src={blogDetailsData?.image} alt="BlogPic" />
            </ImageHolder>
            <PersonHolder>
              <div className="IconHolder">
                <div className="Person">
                  <BsFillPersonFill color="#fff" size="20" />
                </div>
                <span>Admin</span>
              </div>
              <div className="IconHolder">
                <AiOutlineMessage color="#28B781" size="25" />
                <span>02 Comment</span>
              </div>
            </PersonHolder>
            <h2>{blogDetailsData?.heading}</h2>
            <div className="Content">
              {blogDetailsData?.text.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
            <TagsHolder>
              <div className="Tags">
                <span>Tags</span>
                <PrimaryButton
                  width="71"
                  height="40"
                  radius="32px"
                  size="16"
                  weight="500"
                >
                  SMM
                </PrimaryButton>
                <PrimaryButton
                  width="157"
                  height="40"
                  radius="32px"
                  size="16"
                  weight="500"
                >
                  Digital Marketing
                </PrimaryButton>
              </div>
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
            <Comments />
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
                  {postdata.map((item, index) => (
                    <div className="Latest-Post" key={index}>
                      <div className="img-holder">
                        <Image src={item.postImage} alt="postImage" />
                      </div>
                      <div>
                        <div className="profile-Pic">
                          <Image src={item.profilePic} alt="profilePic" />
                          <span>Admin</span>
                        </div>
                        <h4>{item.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              }
            />
            <Widgets
              heading="Categories"
              Children={
                <div>
                  <BlogButton
                    bg={color == 1 ? bgcolor : ""}
                    onClick={() => handleClick(1)}
                  >
                    Web Development
                  </BlogButton>
                  <BlogButton
                    bg={color == 2 ? bgcolor : ""}
                    onClick={() => handleClick(2)}
                  >
                    App Development
                  </BlogButton>
                  <BlogButton
                    bg={color == 3 ? bgcolor : ""}
                    onClick={() => handleClick(3)}
                  >
                    Digital Marketing
                  </BlogButton>
                  <BlogButton
                    bg={color == 4 ? bgcolor : ""}
                    onClick={() => handleClick(4)}
                  >
                    Customer Support
                  </BlogButton>
                </div>
              }
            />
            <Widgets
              heading="Tags"
              Children={
                <TagButtonHolder>
                  <TagButton
                    bg={isColor == 1 ? bgcolor : ""}
                    onClick={() => handleButton(1)}
                  >
                    SEO
                  </TagButton>
                  <TagButton
                    bg={isColor == 2 ? bgcolor : ""}
                    onClick={() => handleButton(2)}
                  >
                    Content Marketing
                  </TagButton>
                  <TagButton
                    bg={isColor == 3 ? bgcolor : ""}
                    onClick={() => handleButton(3)}
                  >
                    App Development
                  </TagButton>
                  <TagButton
                    bg={isColor == 4 ? bgcolor : ""}
                    onClick={() => handleButton(4)}
                  >
                    Digital Marketing
                  </TagButton>
                </TagButtonHolder>
              }
            />
            <Widgets
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
            />
          </WidgetsHolder>
        </div>
      </Container>
    </BlogDetailHolder>
  );
};

export default BlogHero;
