import React from 'react'
import Navbar from '../components/Navbar'
import Passos from '../components/Passos'
import Topo from '../components/Topo'
import Motivos from '../components/Motivos'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Topo />
        <Passos />
        <Motivos />
    </div>
  )
}

export default Home