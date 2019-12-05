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
  background-color: #ffce42;
  overflow-x: hidden;
  padding-top: 20px;
  border-right: 1px solid #adadad;
  @media (max-width: 600px) {
    display: none;
  }
`

const NavLink = styled(Link)`
  background-color: transparent;
  padding: 10px 23px;
  text-decoration: none;
  font-size: 1.2rem;
  color: black;
  display: block;
  &:hover {
    background-color: #9ec24f;
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
