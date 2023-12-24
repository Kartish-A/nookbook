"use client"
import React from 'react'
import Image from 'next/image';

import { styles } from '../../../styles'


function BookCard({ book, index }) {
  if (!book) {
    return null;
  }
  const { volumeInfo } = book;
  return (
    <>
      <div className={`${styles.border} ${styles.borderColor} card flex flex-col justify-between w-52 h-auto rounded p-0.5`}>

        <div className='firstPart h-14 flex flex-col'>
          <div className='flex justify-between px-0.5'>
            <div className={`${styles.background} number w-6 h-6 flex justify-center items-center rounded`}>
              <div className={`${styles.number} text-center text-xs font-normal`}>{index + 1}</div>
            </div>
            <div className={`${styles.text} text-center text-sm font-normal self-end`}>{volumeInfo.publishedDate}</div>
          </div>
          <div className={`${styles.text} bookName flex justify-center items-center flex-wrap text-center text-sm`}>{volumeInfo.title}</div>
        </div>


        <div className='secondPart flex justify-center items-center '>
          <div className={`${styles.borderColor} imageHolder w-44  border-t border-b flex justify-center items-center`}>
            {volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail ? (

              <Image
                src={volumeInfo.imageLinks.thumbnail}
                alt={volumeInfo.title}
                width={100}
                height={100}
              />
            ) : (
              <p>{volumeInfo.title1}</p>
            )}
          </div>
        </div>

        <div className='thirdPart flex flex-col '>
          <div className='flex justify-between items-center'>
            <div className={`${styles.text} text-center text-xs`}>{" "}author:</div>
            <div className={`${styles.text} text-center text-xs`}>{volumeInfo.authors}</div>
          </div>

          <div className='flex justify-between items-center'>
            <div className={`${styles.text} text-center text-xs`}>language</div>
            <div className={`${styles.text} text-center text-xs`}>{volumeInfo.language}</div>
          </div>

          <div className={`${styles.text} bookName text-center text-sm`}> Stars  {volumeInfo.averageRating ? volumeInfo.averageRating : 'N/A'}</div>

          <div className='flex justify-between items-center'>
            <div className="text-center text-pickledBluewood text-xs font-normal  underline">preview</div>
            <div className="text-center text-pickledBluewood text-xs font-normal  underline">search inside</div>
          </div>

        </div>
      </div>
    </>
  )
}

export default BookCard