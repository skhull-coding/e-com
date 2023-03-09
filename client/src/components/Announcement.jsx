import React from 'react'

const Announcement = (props) => {
  return (
    <div className='w-full flex gap-2 justify-center items-end px-3 py-1 h-10 bg-[#73C1BD]'>
        <p className='text-xl'>{props.body}</p>
        <a href={props.link} className='text-lg font-bold'>{props.linkText}</a>
    </div>
  )
}

export default Announcement