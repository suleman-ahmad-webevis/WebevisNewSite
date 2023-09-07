import BlogHero from "src/components/BlogDetail/BlogHero/BlogHero";
import Layout from "src/components/Layout/Layout";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import { BlogProvider } from "src/context/Blogs/BlogContext";

export default function Page() {
  const { query } = useRouter();
  const [singleLoading, setSingleLoading] = useState(true);
  const [blogInfo, setBlogInfo] = useState(null);
  const [commentsInfo, setCommentsInfo] = useState([]);

  useEffect(() => {
    async function getBlog() {
      try {
        if (query?.slug) {
          localStorage.setItem("slug", JSON.stringify(query?.slug));
        }
        const bearerToken =
          "cd7db0487888f4e031b9029ce4dff88b29cd99d9dcdedfe792cacaf2d1573fff";
        const res = await fetch(
          `https://staging.crm.webevis.com/common/singleBlog/${
            query?.slug ?? JSON.parse(localStorage.getItem("slug"))
          }`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${bearerToken}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        setBlogInfo(data?.data);
        setCommentsInfo(data?.comments);
        setTimeout(() => {
          setSingleLoading(false);
        }, 2500);
      } catch (err) {
        setTimeout(() => {
          setSingleLoading(false);
        }, 2500);
        console.log("The error", err);
      }
    }
    getBlog();
  }, [query?.slug]);

  return (
    <Layout>
      <BlogProvider>
        <BlogHero
          blogInfo={blogInfo}
          commentsInfo={commentsInfo}
          singleLoading={singleLoading}
        />{" "}
      </BlogProvider>
    </Layout>
  );
}
