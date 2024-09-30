import React from 'react'
import archieve from ".././images/archive.svg"

function Archieved() {
  return (
    <> 
      <div className='my-0 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10'>

      </div>
      <div className='py-4 px-8 flex items-center gap-4' >
          <img src={archieve} alt="" className='w-5'/>
          <h3 className='font-semibold'>Archived</h3>
      </div>
    </>

  )
}

export default Archieved