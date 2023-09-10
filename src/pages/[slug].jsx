import BlogHero from "src/components/BlogDetail/BlogHero/BlogHero";
import Layout from "src/components/Layout/Layout";
import { useRouter } from "next/router";
import { BlogProvider } from "src/context/Blogs/BlogContext";

export default function Page() {
  const { query } = useRouter();

  return (
    <Layout>
      <BlogProvider>
        <BlogHero
          query={query}
        />{" "}
      </BlogProvider>
    </Layout>
  );
}
