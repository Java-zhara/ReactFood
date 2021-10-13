import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { getAllCategories } from "../api";
import { CategoryList } from "../components/CategoryList";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

export const Home = () => {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setSilteredCatalog] = useState([]);

  const { pathname, search } = useLocation();
  const { push } = useHistory();

  const handleSearch = (str) => {
    setSilteredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
    push({
      pathname,
      search: `?search=${str}`,
    });
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setSilteredCatalog(
        search
          ? data.categories.filter((item) =>
              item.strCategory
                .toLowerCase()
                .includes(search.split("=")[1].toLowerCase())
            )
          : data.categories
      );
    });
  }, [search]);

  return (
    <>
      <Search cb={handleSearch} />
      {!catalog.length ? (
        <Preloader />
      ) : (
        <CategoryList catalog={filteredCatalog} />
      )}
    </>
  );
};
