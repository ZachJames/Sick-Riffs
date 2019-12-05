import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div>
      <h1>That page does not exist.</h1>
      <p>
        Would you like to return <Link to="/">home</Link>?
      </p>
    </div>
  )
}

export default Error404
