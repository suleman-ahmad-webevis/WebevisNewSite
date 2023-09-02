import BlogHero from "src/components/BlogDetail/BlogHero/BlogHero";
import Comments from "src/components/BlogDetail/Comments/Comments";
import { blogdata } from "src/components/BlogPage/BlogCardData";
import Layout from "src/components/Layout/Layout";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";

export default function Page() {
  const [blogData, setBlogData] = useState([]);

  const {
    query: { slug },
  } = useRouter();
  useEffect(() => {
    // Replace 'YOUR_BEARER_TOKEN' with your actual bearer token
    const bearerToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWRmNGViYmRjYzEwMjNlN2VhNDVmYyIsImVtYWlsIjoiaGFtemFhQHdlYmV2aXMuY29tIiwiaWF0IjoxNjkzNjQyMTQ2LCJleHAiOjE2OTM2NDkzNDZ9.obOcWyqfJanvPrOPVRnI6C6FW4GBAR0zBddSRJs__RU";
    async function getBlogs() {
      const res = await fetch(
        `https://staging.crm.webevis.com/common/single/${slug}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${bearerToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      setBlogData(data.items);
      console.log(data);
    }
    getBlogs();
  }, []);
  const data = blogData.find(({ slug }) => slug == slug);

  console.log({ data, slug, blogData });

  // const router = useRouter();
  // const currentURL = router.asPath;
  // console.log(currentURL);
  return (
    <Layout>
      <BlogHero blogDetailsData={data} />
    </Layout>
  );
}
