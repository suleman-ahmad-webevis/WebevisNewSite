import BlogHero from "src/components/BlogDetail/BlogHero/BlogHero";
import Comments from "src/components/BlogDetail/Comments/Comments";
import { blogdata } from "src/components/BlogPage/BlogCardData";
import Layout from "src/components/Layout/Layout";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import { BlogProvider } from "src/context/Blogs/BlogContext";

export default function Page() {
  return (
    <Layout>
      <BlogProvider>
        <BlogHero />{" "}
      </BlogProvider>
    </Layout>
  );
}
