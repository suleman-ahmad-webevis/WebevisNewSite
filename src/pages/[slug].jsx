import BlogHero from "src/components/BlogDetail/BlogHero/BlogHero";
import Comments from "src/components/BlogDetail/Comments/Comments";
import { blogdata } from "src/components/BlogPage/BlogCardData";
import Layout from "src/components/Layout/Layout";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import { BlogProvider } from "src/context/Blogs/BlogContext";

export default function Page() {
  const [blogInfo, setBlogInfo] = useState(null);
  const [commentsInfo, setCommentsInfo] = useState([]);
  const { query } = useRouter();

  const [singleLoading, setSingleLoading] = useState(false);
  useEffect(() => {
    async function getBlog() {
      setSingleLoading(true);
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
        setSingleLoading(false);
      } catch (err) {
        setSingleLoading(false);
        console.log("The error", err);
      }
    }
    getBlog();
  }, []);

  // const router = useRouter();
  // const currentURL = router.asPath;
  // console.log(currentURL);
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
