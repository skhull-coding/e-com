import React from 'react'

const NavItem = (props) => {
  return (
    <div className={`material-symbols-outlined w-12 h-12 border border-black/30 rounded-full flex justify-center items-center absolute ${props.top} ${props.left}`}>{props.name}</div>
  )
}

export default NavItem