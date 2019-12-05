import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navbar = styled.nav`
  height: 100vh;
  width: 180px;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: black;
  overflow-x: hidden;
  padding-top: 20px;
  border-top: 8px solid #ffc46c;
`

const NavLink = styled(Link)`
  background-color: black;
  padding: 10px 23px;
  text-decoration: none;
  font-size: 1.2rem;
  color: #fff;
  display: block;
  &:hover {
    background-color: #ffc46c;
    color: black;
    cursor: pointer;
  }
`

export default () => (
  <Navbar>
    <NavLink>Home</NavLink>
    <NavLink>Top Riffs</NavLink>
    <NavLink to="/signup">Sign Up</NavLink>
  </Navbar>
)
