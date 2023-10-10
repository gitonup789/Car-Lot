import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <Link to='/'>Home</Link>
    <br />
    <Link to='/mercedes'>Mercedes</Link>
    <br />
    <Link to='/ford'>Ford</Link>
    <br />
    <Link to='/porsche'>Porsche</Link>
    </>
  )
}

export default NavBar