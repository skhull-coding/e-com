import React from 'react'
import {Link} from "react-router-dom"

const CategoryBox = (props) => {
  return (
    <Link to={`product/category=${props.categoryName}`} className='flex-1 min-w-[25%] flex items-center justify-center h-56 rounded-lg bg-teal-100 text-[250%] hover:scale-105 transition-transform hover:bg-teal-50'>
        {props.categoryName}
    </Link>
  )
}

export default CategoryBox