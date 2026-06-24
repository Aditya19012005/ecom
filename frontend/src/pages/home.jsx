import React from 'react'
import Hero from '../components/hero'
import Latestcollection from '../components/latestcollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {  
    return (
        <div>
            <Hero/>
            <Latestcollection/>
            <BestSeller/>
            <OurPolicy/>
            <NewsletterBox/>
        </div>
    )
}
export default Home

