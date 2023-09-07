import React, { createContext, useContext, useState, useEffect } from "react";

const BlogContext = createContext();

export function BlogProvider({ children }) {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(9);
  const [searchText, setSearchText] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [blogData, setBlogData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryLoading, setCategoryLoading] = useState(true);
  const [blogsLoading, setBlogsLoading] = useState(true);

  useEffect(() => {
    const bearerToken =
      "cd7db0487888f4e031b9029ce4dff88b29cd99d9dcdedfe792cacaf2d1573fff";
    async function getBlogs() {
      try {
        const res = await fetch(
          `https://staging.crm.webevis.com/common/all?page=${page}&perPage=${perPage}&searchText=${searchText}&filterCategory=${filterCategory}`,
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
        setBlogsLoading(false);
      } catch (err) {
        setBlogsLoading(false);
        console.log("The error", err);
      }
    }
    getBlogs();
  }, [page, perPage, searchText, filterCategory]);

  useEffect(() => {
    const bearerToken =
      "cd7db0487888f4e031b9029ce4dff88b29cd99d9dcdedfe792cacaf2d1573fff";
    async function getCategories() {
      try {
        const res = await fetch(
          `https://staging.crm.webevis.com/common/allCategories?getAll=true`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${bearerToken}`,
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
