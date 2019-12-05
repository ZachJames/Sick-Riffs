import React from 'react'

import Card from '../components/Card'

const mockRiffs = [
  { user: 'Zach' },
  { user: 'Bill23' },
  { user: 'James1' },
  { user: 'SickGuitarxx' },
  { user: 'Anon1' },
]

const Home = () =>
  mockRiffs.map(riff => (
    <Card>
      <span>{riff.user}</span>
    </Card>
  ))

export default Home
