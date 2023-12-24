"use client";
import React from "react";

import { useSearch } from "../SearchContext";
import { styles } from "../../../styles";
import SearchInput from "../components/SearchInput";
import Filters from "../components/Filters";
import BookCard from "../components/BookCard";

function Results({}) {
  const { totalItems, searchResult } = useSearch();
  return (
    <>
      <div className="h-full flex flex-col justify-start items-start pl-10">
        <div className="input_filters flex w-1/2">
          <SearchInput />
          <Filters />
        </div>
        <div className="results w-60 h-8 m-2 flex justify-between items-center">
          <p className={`${styles.text}`}>Total Books found: </p>
          <div
            className={`${styles.background} ${styles.text} number w-12 h-6 flex justify-center items-center rounded`}
          >
            <p className={`${styles.number}`}>{totalItems}</p>
          </div>
        </div>

        <div className="main">
          {searchResult && searchResult.length > 0 ? (
            searchResult &&
            searchResult.map((book, index) => (
              <BookCard key={book.id} book={book} index={index} />
            ))
          ) : (
            <p>No Books found</p>
          )}
          <BookCard />
        </div>
      </div>
    </>
  );
}

export default Results;
