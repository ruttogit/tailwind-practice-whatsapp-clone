import React from 'react'
import archieve from ".././images/archive.svg"

function Archieved() {
  return (
    <div className='py-4 px-8 flex items-center gap-4'>
        <img src={archieve} alt="" className='w-5'/>
        <h3 className='font-semibold'>Archived</h3>
    </div>
  )
}

export default Archieved