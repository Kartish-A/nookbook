"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import { useTheme } from 'next-themes'

import ThemeToggler from './ThemeToggler'

function Navbar() {

  return (
    <nav className='w-full flex justify-between items-center px-8'>
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