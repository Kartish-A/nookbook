import React from 'react'

function Categories() {
  return (
    <div className='flex flex-col'>

      <button className="w-48 h-10 my-2 flex justify-center items-center rounded border border-pickledBluewood dark:border-paleLeaf">
        <div className="text-pickledBluewood dark:text-paleLeaf text-base underline">Top rated</div>
      </button>

      <button className="w-48 h-10 my-2 flex justify-center items-center rounded border border-pickledBluewood dark:border-paleLeaf">
        <div className="text-pickledBluewood dark:text-paleLeaf text-base underline">bestSellers</div>
      </button>

      <button className="w-48 h-10 my-2 flex justify-center items-center rounded border border-pickledBluewood dark:border-paleLeaf">
        <div className="text-pickledBluewood dark:text-paleLeaf text-base underline">Most recent</div>
      </button>

    </div>
  )
}

export default Categories