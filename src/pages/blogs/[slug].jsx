import BlogHero from "src/components/BlogDetail/BlogHero/BlogHero";
import Comments from "src/components/BlogDetail/Comments/Comments";
import { blogdata } from "src/components/BlogPage/BlogCardData";
import Layout from "src/components/Layout/Layout";
import { useRouter } from "next/router";

export default function Page() {
  const {
    query: { slug },
  } = useRouter();

  const data = blogdata.find(({ id }) => id == slug);

  console.log({ data, slug, blogdata });

  // const router = useRouter();
  // const currentURL = router.asPath;
  // console.log(currentURL);
  return (
    <Layout>
      <BlogHero blogDetailsData={data} />
    </Layout>
  );
}
