import React from 'react'

import RiffCard from '../components/RiffCard'

const mockRiffs = [
  { user: 'Zachincool', title: 'A little ditty', time: '0:28', stars: 197 },
  {
    user: 'Daveyxx',
    title: 'Something i wrote yesterday',
    time: '0:24',
    stars: 5,
  },
]

const Home = () => mockRiffs.map(riff => <RiffCard riff={riff} />)

export default Home
