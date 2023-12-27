import React from 'react';

import { styles } from '../../../styles';

function Filters() {
  return (
    <div
      className={`${styles.text} ${styles.border} ${styles.borderColor} filters rounded w-24 h-10 flex sm:ml-8 justify-center items-center`}
    >
      <select className="select bg-transparent list-none focus:outline-none">
        <option value="Filters" className={`${styles.text} option list-none mt-4`}>
          Filters
        </option>
        <option value="Newest" className={`${styles.text} option list-none`}>
          Newest
        </option>
        <option value="Oldest" className={`${styles.text} option list-none`}>
          Oldest
        </option>
        <option value="Oldest" className={`${styles.text} option list-none`}>
          Rated
        </option>
      </select>
    </div>
  )
}

export default Filters