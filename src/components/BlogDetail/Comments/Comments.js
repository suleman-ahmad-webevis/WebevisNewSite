import React from "react";
import { Comment, CommentHolder, LeaveComment } from "./Comments.styles";
import { Container } from "src/components/Container.styles";
import Image from "next/image";
import { PrimaryButton } from "src/components/Button.styles";
import Profile from "../../../assets/images/Blog/Coment-Profile.png";
import Skeleton from "react-loading-skeleton";
import { useFormik } from "formik";
import * as Yup from "yup";

const Comments = ({
  singleLoading,
  blogInfo,
  updatedComments,
  setUpdatedComments,
}) => {
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("*Username is required")
      .max(25, "*Name must not exceed 25 characters"),
    email: Yup.string()
      .email("*Email is Invalid")
      .required("*Email is required"),
    message: Yup.string()
      .required("*Message is required")
      .max(125, "*Message must not exceed 200 characters"),
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        username: "",
        email: "",
        message: "",
        blog: blogInfo?._id,
      },
      validationSchema,
      onSubmit: async (data) => {
        const requestBody = {
          username: data.username,
          email: data.email,
          message: data.message,
          blog: blogInfo._id,
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
            const newComment = {
              username: values.username,
              message: values.message,
            };
            setUpdatedComments([...updatedComments, newComment]);
          }
        } catch (err) {
          console.log("The error", err);
        }
      },
    });

  return (
    <CommentHolder>
      <Comment>
        {singleLoading ? (
          <Skeleton className="TotalComments-Skeleton " />
        ) : (
          <h2>{updatedComments?.length} Comments</h2>
        )}
        {singleLoading ? (
          <div className="commentPost">
            <div className="Image-Holder">
              <Image src={Profile} alt="Profile" />
            </div>
            <div className="Post-Holder">
              {singleLoading ? (
                <Skeleton className="Comment-Skeleton" />
              ) : (
                <div className="Post">
                  <h3>{item?.username}</h3>
                </div>
              )}
              {singleLoading ? (
                <Skeleton className="Comment-Skeleton" />
              ) : (
                <p> {item?.message} </p>
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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            value={values?.username}
            name="username"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <input
            type="email"
            placeholder="Enter Email"
            value={values?.email}
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <textarea
            rows="6"
            placeholder="Enter Message"
            value={values?.message}
            name="message"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <PrimaryButton
            width="183"
            height="50"
            color="#fff"
            bg="#000"
            radius="5px"
            onClick={(e) => handleSubmit(e)}
          >
            Submit Comment
          </PrimaryButton>
        </form>
      </LeaveComment>
    </CommentHolder>
  );
};

export default Comments;
