import React, { useState } from 'react';

import { styles } from '../../../styles';

function Filters({ onSort }) {
  const [selectedFilter, setSelectedFilter] = useState('Filters');

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedFilter(selectedValue);

    // Call the onSort callback with the selected filter option
    if (selectedValue !== 'Filters' && onSort) {
      onSort(selectedValue);
    }
  };


  return (
    <div
      className={`${styles.text} ${styles.border} ${styles.borderColor} filters rounded w-24 h-10 flex sm:ml-8 justify-center items-center`}
    >
      <select
        value={selectedFilter}
        onChange={handleChange}
        className="select flex justify-between bg-transparent list-none focus:outline-none">

        <option value="Filters" className={`${styles.text} ${styles.border} ${styles.borderColor} option list-none mt-4`}>
          Filters
        </option>
        <option value="Newest" className={`${styles.text} ${styles.border} ${styles.borderColor} option list-none mt-4`}>
          Newest
        </option>
        <option value="Oldest" className={`${styles.text} ${styles.border} ${styles.borderColor} option list-none mt-4`}>
          Oldest
        </option>
        <option value="Rated" className={`${styles.text} ${styles.border} ${styles.borderColor} option list-none mt-4`}>
          Rated
        </option>
      </select>
    </div>
  )
}

export default Filters