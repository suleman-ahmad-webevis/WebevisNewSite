import React, { createContext, useContext, useState, useEffect } from "react";
import { ToastContext } from "../toastContext";

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
  const { showToast } = useContext(ToastContext);
  const [filterIs, setFilterIs] = useState("");
  // const [prevSearchText, setPrevSearchText] = useState("");

  useEffect(() => {
    async function getLatestBlogs() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_MAIN_URL}/common/latest`,
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
        console.log("The err", err);
      }
    }
    getLatestBlogs();
  }, []);

  useEffect(() => {
    async function getBlogs() {
      setBlogsLoading(true);
      try {
        setFilterIs(
          JSON.parse(localStorage.getItem("filterCat"))
            ? JSON.parse(localStorage.getItem("filterCat"))
            : filterCategory
        );
        if (filterIs !== filterCategory) {
          setBlogData([]);
          setPage(1);
        }
        // if (prevSearchText !== searchText) {
        //   setBlogData([]); // If searchText changed, clear blogData
        //   setPage(1);
        // }
        const res = await fetch(
          `${
            process.env.NEXT_PUBLIC_MAIN_URL
          }/common/all?page=${page}&perPage=${perPage}&filterCategory=${
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
        setBlogData((prev) => {
          if (data && data?.items?.length) {
            return [...prev, ...data.items];
          } else {
            return prev;
          }
        });
        setHasNextPage(data.hasNextPage);
        setBlogsLoading(false);
        localStorage.removeItem("filterCat");
        // setPrevSearchText(searchText);
      } catch (err) {
        console.log("The err", err);
        setBlogsLoading(false);
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
        data?.items?.unshift({
          _id: "0",
          categoryTitle: "All",
          created_at: "2023-09-05T11:33:02.618Z",
          updated_at: "2023-09-05T11:33:02.618Z",
          __v: 0,
        });
        setCategories(data.items);
        setCategoryLoading(false);
      } catch (err) {
        setCategoryLoading(false);
        console.log("The err", err);
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
