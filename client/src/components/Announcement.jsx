import React from 'react'
import { Link } from 'react-router-dom'

const Announcement = (props) => {
  return (
    <div className='w-full flex gap-2 justify-center items-end px-3 py-1 h-10 bg-[#73C1BD] select-none'>
        <p className='text-xl'>{props.body}</p>
        <Link to={props.link} className='text-lg font-bold'>{props.linkText}</Link>
    </div>
  )
}

export default Announcement