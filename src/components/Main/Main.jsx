import React from 'react'
import Header from '../Header'
import Archieved from '../Archieved'
import Chats from '../Chats'
import StatusBar from '../StatusBar'
import Bottom from '../Bottom'
import NavBottom from '../NavBottom'

function Main() {
  return (
    <div className=' w-96 rounded-3xl border-solid border-4 border-black py-1 px-4'> 
        <StatusBar/>
        <Header/>
        <Archieved/>
        <Chats/>
        <Bottom/>
        <NavBottom/>
    </div>
  )
}

export default Main