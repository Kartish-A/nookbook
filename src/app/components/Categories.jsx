"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import { useSearch } from '../SearchContext';

function Categories() {
  const router = useRouter();
  const { totalItems, searchResult } = useSearch();
  const [mostRecentBooks, setMostRecentBooks] = useState([])

  const { updateSearchResult, updateTotalItems } = useSearch();

  const fetchMostRecentBooks = async () => {
    try {
      const respons = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=newest&key=${process.env.REACT_APP_API_KEY}`
      );
      if (respons.ok) {
        console.log("most recent books have been fetched: SUCCESS");
        const result = await respons.json();
        setMostRecentBooks(result.items);
        console.log("MOST RECENT BOOKS: ", result);
        updateSearchResult(result.items);
        updateTotalItems(result.totalItems)
        router.push('/results')

      } else {
        console.log("FAILED FETCHING MOST RECENT BOOKS: ", error);
      }
    } catch (error) {
      console.error("Error fetching most recent books:", error);
    }
  }


  return (
    <div className='flex flex-col'>

      <button className="w-48 h-10 my-2 flex justify-center items-center rounded border border-pickledBluewood dark:border-paleLeaf">
        <div className="text-pickledBluewood dark:text-paleLeaf text-base underline">Top rated</div>
      </button>

      <button className="w-48 h-10 my-2 flex justify-center items-center rounded border border-pickledBluewood dark:border-paleLeaf">
        <div className="text-pickledBluewood dark:text-paleLeaf text-base underline">bestSellers</div>
      </button>

      <button className="w-48 h-10 my-2 flex justify-center items-center rounded border border-pickledBluewood dark:border-paleLeaf" onClick={fetchMostRecentBooks} >
        <div className="text-pickledBluewood dark:text-paleLeaf text-base underline">Most recent</div>
      </button>

    </div>
  )
}

export default Categories