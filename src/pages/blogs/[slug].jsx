import { useRouter } from "next/router";
import BlogHero from "src/components/BlogDetail/BlogHero/BlogHero";
import Comments from "src/components/BlogDetail/Comments/Comments";
import { blogdata } from "src/components/BlogPage/BlogCardData";
import Layout from "src/components/Layout/Layout";

export default function Page() {
  const {
    query: { slug },
  } = useRouter();

  const data = blogdata.find(({ author }) => author.heading === slug);

  console.log(data, "data here");

  return (
    <Layout>
      <BlogHero />
    </Layout>
  );
}
