"use client"
import React, { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";

import { styles } from '../../../styles';
import { MdBorderColor } from 'react-icons/md';

function SearchInput() {

  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("search function is triggered!", searchValue);
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value)
  }


  return (
    <form className='flex mb-6'>
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