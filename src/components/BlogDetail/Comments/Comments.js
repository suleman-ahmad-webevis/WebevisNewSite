import React, { useState } from "react";
import { Comment, CommentHolder, LeaveComment } from "./Comments.styles";
import { Container } from "src/components/Container.styles";
import Image from "next/image";
import { PrimaryButton } from "src/components/Button.styles";
import Profile from "../../../assets/images/Blog/Coment-Profile.png";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";

const Comments = ({ blogInfo, commentsInfo, loading }) => {
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);
  const [updatedComments, setUpdatedComments] = useState([]);

  useEffect(() => {
    setUpdatedComments(commentsInfo);
  }, [commentsInfo]);

  const postComment = async (e) => {
    e.preventDefault();
    const requestBody = {
      username: userName,
      email,
      message,
      blog: blogInfo?._id,
    };
    try {
      const bearerToken =
        "cd7db0487888f4e031b9029ce4dff88b29cd99d9dcdedfe792cacaf2d1573fff";
      const res = await fetch(
        `https://staging.crm.webevis.com/common/comment`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${bearerToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );
      if (res.status === 200 || res.status === 201) {
        setUserName(null);
        setEmail(null);
        setMessage(null);
      }
    } catch (err) {
      console.log("The error", err);
    }
  };

  return (
    <CommentHolder>
      <Comment>
        {loading ? (
          <Skeleton
            style={{
              width: "80px",
              height: "10px",
            }}
          />
        ) : (
          <h2>{updatedComments?.length} Comments</h2>
        )}
        {loading ? (
          <div className="commentPost">
            <div className="Image-Holder">
              <Image src={Profile} alt="Profile" />
            </div>
            <div className="Post-Holder">
              <div className="Post">
                {loading ? (
                  <Skeleton className="Comments-Skeleton" />
                ) : (
                  <h3>item?.username </h3>
                )}

                {/* <PrimaryButton width="100" height="40" radius="5px">
               Reply
             </PrimaryButton> */}
              </div>

              {loading ? (
                <Skeleton className="Comments-Skeleton" />
              ) : (
                <p> item?.message </p>
              )}
            </div>
          </div>
        ) : updatedComments?.length ? (
          updatedComments.map((item) => (
            <>
              <div className="commentPost">
                <div className="Image-Holder">
                  <Image src={Profile} alt="Profile" />
                </div>
                <div className="Post-Holder">
                  <div className="Post">
                    <h3>{item?.username}</h3>
                    {/* <PrimaryButton width="100" height="40" radius="5px">
                    Reply
                  </PrimaryButton> */}
                  </div>
                  <p>{item?.message}</p>
                </div>
              </div>
            </>
          ))
        ) : null}
      </Comment>
      <LeaveComment>
        <h2>Leave a Comment</h2>
        <form>
          <input
            type="text"
            placeholder="Enter Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            rows="6"
            placeholder="Enter Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <PrimaryButton
            width="183"
            height="50"
            color="#fff"
            bg="#000"
            radius="5px"
            onClick={(e) => postComment(e)}
          >
            Submit Comment
          </PrimaryButton>
        </form>
      </LeaveComment>
    </CommentHolder>
  );
};

export default Comments;
