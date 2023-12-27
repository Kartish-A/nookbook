// SearchContext.js
"use client";

import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchResult, setSearchResult] = useState([]);
  const [totalItems, setTotalItems] = useState(null);

  const updateSearchResult = (result) => {
    setSearchResult(result);
  };

  const updateTotalItems = (total) => {
    setTotalItems(total);
  };

  return (
    <SearchContext.Provider value={{ searchResult, totalItems, updateSearchResult, updateTotalItems, children }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(SearchContext);
};
