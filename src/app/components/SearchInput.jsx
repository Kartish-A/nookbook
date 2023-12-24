"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { IoSearchOutline } from "react-icons/io5";

import { useSearch } from '../SearchContext';
import { styles } from '../../../styles';

function SearchInput() {
  const router = useRouter();

  const { updateSearchResult, updateTotalItems } = useSearch();
  const [searchValue, setSearchValue] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    if (!searchValue) {
      window.alert("please insert a book name!")
    } else {
      router.push('/results')
    }


    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&download=epub&key=${process.env.REACT_APP_API_KEY}`
      );

      if (response.ok) {
        console.log("SUCCESS");

      } else {
        console.log("FAILED");
        throw new Error("Request failed with status: " + response.status);
      }

      const result = await response.json();
      setBooks(result.items);
      updateSearchResult(result.items);
      updateTotalItems(result.totalItems);
      console.log(result);

    } catch (error) {
      console.log("ERROR: ", error);
    }
  }

  const handleChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <form className='flex'>
      <input className={`${styles.text} ${styles.border} ${styles.borderColor}  w-96 h-10 rounded-tl-lg rounded-bl-lg bg-paleLeaf dark:bg-pickledBluewood focus:outline-none `}
        type='text'
        placeholder='  Search for a book here'
        value={searchValue}
        onChange={handleChange}
      />
      <button className="w-16 h-10 rounded-tr-lg rounded-br-lg border border-pickledBluewood dark:border-paleLeaf flex justify-center items-center"
        onClick={handleSearch}
      >
        <IoSearchOutline className='text-pickledBluewood dark:text-paleLeaf' size={22} />
      </button>
    </form>
  )
}
export default SearchInput