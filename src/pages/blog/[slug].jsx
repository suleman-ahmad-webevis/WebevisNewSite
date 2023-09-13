import BlogHero from "src/components/BlogDetail/BlogHero/BlogHero";
import Layout from "src/components/Layout/Layout";
import { useRouter } from "next/router";
import { BlogProvider } from "src/context/Blogs/BlogContext";
import { useEffect, useState } from "react";

export default function Page({ dataIs }) {
  const [singleLoading, setSingleLoading] = useState(true);
  const [blogInfo, setBlogInfo] = useState(null);
  const [commentsInfo, setCommentsInfo] = useState([]);

  useEffect(() => {
    setSingleLoading(true);
    setBlogInfo(dataIs?.data);
    setCommentsInfo(dataIs?.comments);
    setTimeout(() => {
      setSingleLoading(false);
    }, 2500);
  }, [dataIs]);

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

async function getBlog(slug) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_MAIN_URL}/common/singleBlog/${slug}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STAGING_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    return data;
    // setCommentsInfo(data?.comments);
  } catch (err) {
    console.log("The error", err);
  }
}

export async function getServerSideProps({ params }) {
  const slug = params.slug;
  const dataIs = await getBlog(slug);
  return {
    props: {
      dataIs: dataIs,
    },
  };
}
