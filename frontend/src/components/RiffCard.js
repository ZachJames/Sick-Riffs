import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaStar } from 'react-icons/fa'

const RiffCard = styled.div`
  padding: 25px 0;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const RiffTitle = styled.h2`
  font-size: 1.6rem;
  span {
    margin-left: 5px;
    font-size: 1rem;
    color: #7d7d7d;
  }
`

const RiffRating = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
`

const Star = styled(FaStar)`
  color: #ccc;
  margin-right: 5px;
  &:hover {
    color: #ffa75c;
    cursor: pointer;
  }
`

const UsernameLink = styled(Link)`
  font-size: 1.2rem;
  color: #7d7d7d;
  text-decoration: none;
  border-bottom: 1px solid #bbbbbb;
  &:hover {
    color: #ccc;
  }
`

export default ({ riff }) => (
  <RiffCard>
    <div>
      <RiffTitle>
        {riff.title} <span>{riff.time}</span>
      </RiffTitle>
      <UsernameLink>{riff.user}</UsernameLink>
    </div>

    <div>
      <RiffRating>
        <Star />
        <span>{riff.stars}</span>
      </RiffRating>
    </div>
  </RiffCard>
)
