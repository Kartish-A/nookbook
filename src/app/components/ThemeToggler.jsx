"use client"
import React, { useState, useEffect } from 'react'
import { IoSunnyOutline } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";

function ThemeToggler() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme")
    if (theme === "dark" ) setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light");
    }
  }, [darkMode])


  return (
    <>
      <div className='w-16 h-8 flex items-center justify-center cursor-pointer rounded-full p-1'
        onClick={() => setDarkMode(!darkMode)}>
        {
          darkMode ? (
            <IoSunnyOutline className='text-paleLeaf cursor-pointer' size={22} />
          ) : (
            <MdDarkMode className='text-pickledBluewood' size={22} />
          )
        }
      </div>
    </>
  )
}

export default ThemeToggler;