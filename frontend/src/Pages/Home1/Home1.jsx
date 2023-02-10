import React from 'react'
import ContuctHome1 from '../../Components/Home1/ContuctHome1/ContuctHome1'
import Curators from '../../Components/Home1/Curators/Curators'
import ElementorSection from '../../Components/Home1/ElementorSection/ElementorSection'
import HeroSection from '../../Components/Home1/HeroSection/HeroSection'
import Information from '../../Components/Home1/Information/Information'
import NewsLetter from '../../Components/Home1/NewsLetter/NewsLetter'
import Populated from '../../Components/Home1/Populated/Populated'
import TrendingSection from '../../Components/Home1/TrendingSection/TrendingSection'
import UpComingSection from '../../Components/Home1/UpComingSection/UpComingSection'

const Home1 = () => {
  return (
    <div>
      <HeroSection />
      <ElementorSection />
      <UpComingSection />
      <Curators />
      <TrendingSection />
      <NewsLetter />
      <Information/>
      <Populated/>
      <ContuctHome1 />
    </div>
  )
}

export default Home1
