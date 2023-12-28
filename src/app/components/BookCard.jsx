"use client"
import React from 'react'
import Image from 'next/image';
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

import { styles } from '../../../styles'


function BookCard({ book, index }) {

  if (!book) {
    return null;
  }
  const { volumeInfo } = book;

  // Function to trim the title if it contains a period
  const MAX_TITLE_LENGTH = 46;

  const trimTitle = (title) => {
    // Check if the title contains a period
    const periodIndex = title.indexOf('.');

    // Check the maximum title length
    if (title.length > MAX_TITLE_LENGTH) {
      // If the title is too long, trim it to the maximum length
      return title.slice(0, MAX_TITLE_LENGTH) + ' ... ';
    } else if (periodIndex !== -1) {
      // If the title contains a period, trim it up to and including the period
      return title.slice(0, periodIndex + 1);
    } else {
      // Otherwise, return the original title
      return title;
    }
  };

  const trimAuthors = (authors) => {
    // Check if authors is defined and not null
    if (authors && authors.length > 0) {
      // Check the maximum author length
      if (authors.length > MAX_TITLE_LENGTH) {
        // If the authors is too long, trim it to the maximum length
        return authors.slice(0, MAX_TITLE_LENGTH) + ' ... ';
      } else {
        return authors;
      }
    } else {
      // Return a default value or handle the case when authors is undefined or empty
      return 'Unknown Author';
    }
  };
  


// Function to render stars based on the average rating
const renderStars = () => {
  const stars = [];
  const rating = volumeInfo.averageRating;

  if (rating && rating !== undefined && rating !== null && rating !== " ") {
    // Render the filled stars
    for (let i = 0; i < 5; i++) {
      stars.push(
        i < Math.floor(rating) ? (
          <IoIosStar key={i} className={`${styles.text} text-pickledBluewood dark:text-paleLeaf`} />
        ) : (
          <IoIosStarOutline key={i} className={`${styles.text} text-pickledBluewood dark:text-paleLeaf`} />
        )
      );
    }
  } else {
    // Render a message for no rating
    stars.push(<span key="no-rating">N/A</span>);
  }

  return stars;
};



const handleDownload = (downloadLink) => {
  window.open(downloadLink, '_blank');
};

const handlePreview = (previewLink) => {
  window.open(previewLink, '_blank')
}

return (
  <>
    <div className={`${styles.border} ${styles.borderColor} card flex flex-col justify-between w-56 rounded p-0.5`}>

      <div className='firstPart h-18 flex flex-col'>
        <div className='flex justify-between px-0.5'>
          <div className={`${styles.background} number w-6 h-6 flex justify-center items-center rounded`}>
            <div className={`${styles.number} text-center text-xs font-normal`}>{index + 1}</div>
          </div>
          <div className={`${styles.text} text-center text-sm font-normal self-end`}>{volumeInfo.publishedDate}</div>
        </div>
        <div className={`${styles.text} bookName  my-2 flex justify-center items-center flex-wrap text-center text-sm`} >{trimTitle(volumeInfo.title)}</div>
      </div>


      <div className='secondPart flex justify-center items-center'>
        <div className={`${styles.borderColor} imageHolder border-2`}>
          {volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail ? (

            <Image
              src={volumeInfo.imageLinks.thumbnail}
              layout="responsive"
              alt="book title"
              width={200}
              height={150}
            />
          ) : (
            <p>Book Cover Photo</p>
          )}
        </div>
      </div>

      <div className='thirdPart flex flex-col my-1 '>
        <div className='flex justify-between items-center px-1'>
          <div className={`${styles.text} text-center text-xs`}>{" "}author:</div>
          <div className={`${styles.text} text-center text-xs`}>{trimAuthors(volumeInfo.authors)}</div>
        </div>

        <div className='flex justify-between items-center px-1'>
          <div className={`${styles.text} text-center text-xs`}>language</div>
          <div className={`${styles.text} text-center text-xs`}>{volumeInfo.language}</div>
        </div>

        <div className={`${styles.text} bookName flex text-center text-sm px-1`}>
          {renderStars()}
        </div>

        <div className='flex justify-between items-center px-1'>
          <button
            className={`${styles.text} text-center text-xs underline font-normal`}
            onClick={() => handlePreview(volumeInfo.previewLink)}
          >
            preview
          </button>

          <button
            className={`${styles.text} text-center text-xs underline font-normal`}
            onClick={() => handleDownload(volumeInfo.infoLink)}
          >
            download
          </button>
        </div>

      </div>
    </div>
  </>
)
}

export default BookCard