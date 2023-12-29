"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import Image from 'next/image'
import { GrMenu, GrClose } from "react-icons/gr";


import ThemeToggler from './ThemeToggler';
import { styles } from '../../../styles';

function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleMenuItemClicked = (path) => {
    setIsOpen(!isOpen);
    router.push(path);
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
      <div className='relative md:hidden flex flex-1 w-full justify-end'>

        {isOpen ? (
          <div className='fixed top-0 left-0 w-full h-full bg-paleLeaf dark:bg-pickledBluewood flex flex-col justify-start items-center pt-16 z-50'>
            <div className={`${styles.border} ${styles.borderColor} w-10 h-10 flex justify-center items-center rounded-full`}>
            <GrClose className={`${styles.text}`} size={22} onClick={openMenu} />
            </div>
            <ul className='h-72 flex flex-col justify-around items-center'>
              <li className="nav-item nav-link" >
                <ThemeToggler />
              </li>
              <li className="nav-item text-pickledBluewood dark:text-paleLeaf " onClick={() => handleMenuItemClicked('/')}>
                <p className="nav-link"> Home</p>
              </li>
              <li className="nav-item text-pickledBluewood dark:text-paleLeaf " onClick={() => handleMenuItemClicked('/login')}>
                <p className="nav-link">Login</p>
              </li>
              <li className="nav-item text-pickledBluewood dark:text-paleLeaf " onClick={() => handleMenuItemClicked('/create-account')}>
                <p className="nav-link">Create Account</p>
              </li>
              <li className="nav-item text-pickledBluewood dark:text-paleLeaf " onClick={() => handleMenuItemClicked('/about')}>
                <p className="nav-link">About</p>
              </li>
            </ul>
          </div>
        ) : (
          <GrMenu className={`${styles.text}`} size={22} onClick={openMenu} />
        )
        }
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