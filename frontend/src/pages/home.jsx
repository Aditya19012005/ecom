import React from 'react'
import Hero from '../components/hero'
import Latestcollection from '../components/latestcollection'
import BestSeller from '../components/BestSeller'

const Home = () => {  
    return (
        <div>
            <Hero/>
            <Latestcollection/>
            <BestSeller/>
        </div>
    )
}
export default Home

