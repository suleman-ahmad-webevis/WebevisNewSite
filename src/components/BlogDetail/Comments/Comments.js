import React from "react";
import { Comment, CommentHolder, LeaveComment } from "./Comments.styles";
import { Container } from "src/components/Container.styles";
import Image from "next/image";
import { PrimaryButton } from "src/components/Button.styles";
import Profile from "../../../assets/images/Blog/Coment-Profile.png";
const commnetData = [
  {
    image: Profile,
    title: "Kevin Martin",
    text: "Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod.",
  },
  {
    image: Profile,
    title: "Kevin Martin",
    text: "Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod.",
  },
];
const Comments = () => {
  return (
    <CommentHolder>
      <Comment>
        <h2>2 Comments</h2>
        {commnetData.map((item) => (
          <>
            <div className="commentPost">
              <div className="Image-Holder">
                <Image src={item.image} alt="Profile" />
              </div>
              <div className="Post-Holder">
                <div className="Post">
                  <h3>{item.title}</h3>
                  <PrimaryButton width="100" height="40" radius="5px">
                    Reply
                  </PrimaryButton>
                </div>
                <p>{item.text}</p>
              </div>
            </div>
          </>
        ))}
      </Comment>
      <LeaveComment>
        <h2>Leave a Comment</h2>
        <form>
          <input type="text" placeholder="Enter Name" />
          <input type="email" placeholder="Enter Email" />
          <textarea rows="6" placeholder="Enter Message" />
          <PrimaryButton
            width="183"
            height="50"
            color="#fff"
            bg="#000"
            radius="5px"
          >
            Submit Comment
          </PrimaryButton>
        </form>
      </LeaveComment>
    </CommentHolder>
  );
};

export default Comments;
