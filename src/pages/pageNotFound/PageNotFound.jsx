import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <>
        <div>Page Not Found</div>
        <NavLink to="/">Go to Dashboard</NavLink>
    </>
  )
}

export default PageNotFound