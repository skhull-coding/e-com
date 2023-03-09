import React from 'react'
import { Link } from 'react-router-dom'

const Announcement = (props) => {
  return (
    <div className='w-full flex gap-2 justify-center items-center px-3 py-1 2xl:h-10 h-8 bg-[#73C1BD] select-none'>
        <p className='2xl:text-xl text-base'>{props.body}</p>
        <Link to={props.link} className='2xl:text-lg text-sm font-bold'>{props.linkText}</Link>
    </div>
  )
}

export default Announcement