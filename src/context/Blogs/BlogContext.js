import React, { createContext, useContext, useState, useEffect } from "react";

const BlogContext = createContext();

export function BlogProvider({ children }) {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(9);
  const [searchText, setSearchText] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [blogData, setBlogData] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [latestPosts, setLatestPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryLoading, setCategoryLoading] = useState(true);
  const [blogsLoading, setBlogsLoading] = useState(true);

  useEffect(() => {
    async function getLatestBlogs() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_MAIN_URL}/common/latest?searchText=${searchText}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_STAGING_API_KEY}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        setLatestPosts(data.items);
      } catch (err) {
        console.log("The error", err);
      }
    }
    getLatestBlogs();
  }, []);

  useEffect(() => {
    async function getBlogs() {
      try {
        const res = await fetch(
          `${
            process.env.NEXT_PUBLIC_MAIN_URL
          }/common/all?page=${page}&perPage=${perPage}&searchText=${searchText}&filterCategory=${
            JSON.parse(localStorage.getItem("filterCat"))
              ? JSON.parse(localStorage.getItem("filterCat"))
              : filterCategory
          }`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_STAGING_API_KEY}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        setBlogData((prev) => [...prev, ...data.items]);
        setHasNextPage(data.hasNextPage);
        setBlogsLoading(false);
      } catch (err) {
        setBlogsLoading(false);
        console.log("The error", err);
      }
    }
    getBlogs();
  }, [page, perPage, searchText, filterCategory]);

  useEffect(() => {
    async function getCategories() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_MAIN_URL}/common/allCategories?getAll=true`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_STAGING_API_KEY}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        setCategories(data.items);
        setCategoryLoading(false);
      } catch (err) {
        setCategoryLoading(false);
        console.log("The error", err);
      }
    }
    getCategories();
  }, []);

  const values = {
    page,
    setPage,
    perPage,
    setPerPage,
    searchText,
    setSearchText,
    filterCategory,
    setFilterCategory,
    categories,
    blogData,
    setBlogData,
    setCategories,
    blogsLoading,
    categoryLoading,
    latestPosts,
    hasNextPage,
  };

  return <BlogContext.Provider value={values}>{children}</BlogContext.Provider>;
}

export function useBlog() {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlog must be used within a BlogProvider");
  }
  return context;
}
