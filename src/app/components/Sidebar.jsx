import React from 'react'

function Sidebar() {
  return (

    <div className='min-h-screen w-16 flex flex-col justify-center border-r-2 border-pickledBluewood dark:border-paleLeaf'>
      <div className='flex flex-col justify-end items-center h-4/6'>
        <div className="-rotate-90 text-center">
          <p className=" text-pickledBluewood text-4xl font-light font-['Lemonada'] dark:text-paleLeaf ">BookNook</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar