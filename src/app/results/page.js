"use client";
import React, { useState, useEffect } from "react";

import { useSearch } from "../SearchContext";
import { styles } from "../../../styles";
import SearchInput from "../components/SearchInput";
import Filters from "../components/Filters";
import BookCard from "../components/BookCard";

function Results({}) {
  const { totalItems, searchResult } = useSearch();
  const [sortedResult, setSortedResult] = useState(searchResult);

  useEffect(() => {
    // Initially, set the sorted result to the search result
    setSortedResult(searchResult);
  }, [searchResult]);

  const handleSort = (filterOption) => {
    let sortedBooks = [...searchResult];
  
    if (filterOption === "Newest") {
      // Sort by newest logic
      sortedBooks.sort(
        (a, b) =>
          new Date(b.volumeInfo.publishedDate) -
          new Date(a.volumeInfo.publishedDate)
      );
    } else if (filterOption === "Oldest") {
      // Sort by oldest logic
      sortedBooks.sort(
        (a, b) =>
          new Date(a.volumeInfo.publishedDate) -
          new Date(b.volumeInfo.publishedDate)
      );
    } else if (filterOption === "Rated") {
      // Sort by rated logic
      sortedBooks.sort((a, b) => {
        const ratingA = a.volumeInfo.averageRating;
        const ratingB = b.volumeInfo.averageRating;
  
        // Handle cases where averageRating is not a valid number
        if (typeof ratingA !== 'number' || isNaN(ratingA)) {
          return 1; // Move books with undefined or non-numeric rating to the end
        }
  
        if (typeof ratingB !== 'number' || isNaN(ratingB)) {
          return -1; // Move books with undefined or non-numeric rating to the end
        }
  
        // Sort in descending order based on averageRating
        return ratingB - ratingA;
      });
    }
  
    setSortedResult(sortedBooks);
  };
  

  return (
    <>
      <div className="h-full flex flex-col justify-start items-start pl-10">
        <div className="input_filters sm:flex w-full">
          <SearchInput />
          <Filters onSort={handleSort} />
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
        {sortedResult && sortedResult.length > 0 ? (
            sortedResult.map((book, index) => (
              <BookCard key={book.id} book={book} index={index} />
            ))
          ) : (
            <p>No Books found</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Results;
