import "react-loading-skeleton/dist/skeleton.css";
import BlogMain from "src/components/BlogMain/BlogMain";
import { BlogProvider } from "src/context/Blogs/BlogContext";

const Blog = () => {
  return (
    <BlogProvider>
      <BlogMain />
    </BlogProvider>
  );
};

export default Blog;
