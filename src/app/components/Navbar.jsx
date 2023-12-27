"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GrMenu, GrClose } from "react-icons/gr";


import ThemeToggler from './ThemeToggler';
import { styles } from '../../../styles';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='w-11/12 h-18 flex justify-between items-center px-10 mr-12'>
      <div className='dark:hidden'>
        <Link href='/'>
          <Image
            src='/logo_light.png'
            alt='logo'
            width={120}
            height={120}
          />
        </Link>

      </div>
      <div className='hidden dark:flex'>
        <Link href='/'>
          <Image
            src='/logo_dark.png'
            alt='logo'
            width={120}
            height={120}
          />
        </Link>
      </div>

      {/* ----------- MENU ----------- */}
      <div className='relative md:hidden flex flex-1 '>
        <div>
          {isOpen ? (
            <div className='absolute z-10 w-screen h-screen start-0 bg-paleLeaf dark:bg-pickledBluewood flex flex-col justify-start items-center'>
              <GrClose className={`${styles.text}`} size={22} onClick={openMenu} />
              <ul>
                <li className="nav-item nav-link">
                  <ThemeToggler />
                </li>
                <li className="nav-item text-pickledBluewood dark:text-paleLeaf">
                  <Link href="/">
                    <p className="nav-link">Home</p>
                  </Link>
                </li>
                <li className="nav-item text-pickledBluewood dark:text-paleLeaf">
                  <Link href="/login">
                    <p className="nav-link">Login</p>
                  </Link>
                </li>
                <li className="nav-item text-pickledBluewood dark:text-paleLeaf">
                  <Link href="/create-account">
                    <p className="nav-link">Create Account</p>
                  </Link>
                </li>
                <li className="nav-item text-pickledBluewood dark:text-paleLeaf">
                  <Link href="/about">
                    <p className="nav-link">About</p>
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <GrMenu className={`${styles.text}`} size={22} onClick={openMenu} />
          )
          }
        </div>
      </div>

      <ul className="navbar-nav">
        <li className="nav-item nav-link">
          <ThemeToggler />
        </li>
        <li className="nav-item text-pickledBluewood dark:text-paleLeaf">
          <Link href="/login">
            <p className="nav-link">Login</p>
          </Link>
        </li>
        <li className="nav-item text-pickledBluewood dark:text-paleLeaf">
          <Link href="/create-account">
            <p className="nav-link">Create Account</p>
          </Link>
        </li>
        <li className="nav-item text-pickledBluewood dark:text-paleLeaf">
          <Link href="/about">
            <p className="nav-link">About</p>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar