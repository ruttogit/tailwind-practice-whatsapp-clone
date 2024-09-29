import React from 'react'
import { HiBars3 } from "react-icons/hi2";
import { IoMdSquareOutline } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function NavBottom() {
  return (
    <div className='flex items-center justify-between px-6 pb-4'>
        <div className='text-3xl text-gray-600 transform rotate-180'>
            <HiBars3/>
            </div>
        <div className='text-3xl text-gray-600'>
            <IoMdSquareOutline />
        </div>
        <div className='text-3xl text-gray-600'>
            <IoIosArrowBack />
        </div>
    </div>
  )
}

export default NavBottom