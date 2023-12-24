import React from 'react';

import { styles } from '../../../styles';

function Filters() {
  return (
    <div>
      <div
            className={`${styles.text} ${styles.border} ${styles.borderColor} rounded filters w-24 h-10 flex ml-8 justify-center items-center`}
          >
            <select className="select">
              <option value="Filters" className={`option ${styles.text}`}>
                Filters
              </option>
              <option value="Newest" className={`option ${styles.text}`}>
                Newest
              </option>
              <option value="Oldest" className={`option ${styles.text}`}>
                Oldest
              </option>
              <option value="Oldest" className={`option ${styles.text}`}>
                Rated
              </option>
            </select>
          </div>
    </div>
  )
}

export default Filters