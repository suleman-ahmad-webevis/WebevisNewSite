import React, { useState } from "react";
import { Comment, CommentHolder, LeaveComment } from "./Comments.styles";
import Image from "next/image";
import { PrimaryButton } from "src/components/Button.styles";
import Profile from "../../../assets/images/Blog/Coment-Profile.png";
import Skeleton from "react-loading-skeleton";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ToastContext } from "src/context/toastContext";
import { useContext } from "react";

const Comments = ({
  singleLoading,
  blogInfo,
  updatedComments,
  setUpdatedComments,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { showToast } = useContext(ToastContext);
  const [submitBtnClicked, setSubmitBtnClicked] = useState(false);
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("*Name is required")
      .max(25, "*Name must not exceed 25 characters"),
    email: Yup.string()
      .required("*Email is required")
      .email("*Email is Invalid"),
    message: Yup.string()
      .required("Message is required")
      .max(500, "*Message must not exceed 500 characters"),
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
        <Formik
          initialValues={{
            username: "",
            email: "",
            message: "",
            blog: blogInfo?._id,
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            const requestBody = {
              username: values.username,
              email: values.email,
              message: values.message,
              blog: blogInfo._id,
            };
            setIsLoading(true);
            try {
              const res = await fetch(`${process.env.NEXT_PUBLIC_MAIN_URL}/common/comment`, {
                method: "POST",
                headers: {
                  Authorization: `Bearer ${process.env.NEXT_PUBLIC_STAGING_API_KEY}`,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
              });
              if (res.status === 200 || res.status === 201) {
                const newComment = {
                  username: values.username,
                  message: values.message,
                };
                resetForm();
                showToast({
                  success: true,
                  text: "Comment Successful",
                });
                setUpdatedComments([...updatedComments, newComment]);
              }
              if (res.status === 400) {
                showToast({
                  info: true,
                  text: "Already commented on this blog",
                });
              }
            } catch (err) {
              showToast({
                error: true,
                text: "Error while comment",
              });
              setSubmitForm(true);
            } finally {
              setIsLoading(false);
            }
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                type="text"
                placeholder="Enter Name"
                name="username"
                style={{
                  border:
                    errors.username && touched.username ? "1px solid red" : "",
                }}
              />
              <Field
                type="email"
                placeholder="Enter Email"
                name="email"
                style={{
                  border: errors.email && touched.email ? "1px solid red" : "",
                }}
              />
              <Field
                component="textarea"
                rows={6}
                placeholder="Enter Message"
                name="message"
                style={{
                  border:
                    errors.message && touched.message ? "1px solid red" : "",
                }}
                // validate={(value) => {
                //   if (submitBtnClicked && !value) {
                //     showToast({
                //       error: true,
                //       text: "Please fill in all three required fields: Name, email and message.",
                //     });
                //     setSubmitBtnClicked(false);
                //   }
                // }}
              />
              <PrimaryButton
                width="183"
                height="50"
                color="#fff"
                bg="#000"
                radius="5px"
                type="submit"
              >
                {isLoading ? (
                  <i
                    className="fa fa-circle-o-notch fa-spin"
                    style={{
                      marginRight: "5px",
                      fontSize: "24px",
                      padding: "12px 16px",
                    }}
                  ></i>
                ) : (
                  "  Submit Comment"
                )}
              </PrimaryButton>
            </Form>
          )}
        </Formik>
      </LeaveComment>
    </CommentHolder>
  );
};

export default Comments;
