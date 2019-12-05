import React from 'react'
import styled from 'styled-components'

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
`

const NavLink = styled.a`
  background-color: black;
  padding: 10px 23px;
  text-decoration: none;
  font-size: 1.2rem;
  color: #fff;
  display: block;
  &:hover {
    background-color: #fff;
    color: black;
    cursor: pointer;
  }
`

export default () => (
  <Navbar>
    <NavLink>Home</NavLink>
    <NavLink>Top Riffs</NavLink>
    <NavLink>+ Upload Riff</NavLink>
    <NavLink>Your Account</NavLink>
  </Navbar>
)
