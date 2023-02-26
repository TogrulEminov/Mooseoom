import React from 'react'
import ArtDesign from '../../../Components/Client/Home/ArtDesign/ArtDesign'
import ContuctHome1 from '../../../Components/Client/Home/ContuctHome1/ContuctHome1'
import Curators from '../../../Components/Client/Home/Curators/Curators'
import ElementorSection from '../../../Components/Client/Home/ElementorSection/ElementorSection'
import HeroSection from '../../../Components/Client/Home/HeroSection/HeroSection'
import Information from '../../../Components/Client/Home/Information/Information'
import Newsletter from '../../../Components/Client/Home/NewsLetter/NewsLetter'
import Populated from '../../../Components/Client/Home/Populated/Populated'
import TrendingSection from '../../../Components/Client/Home/TrendingSection/TrendingSection'
import UpComingSection from '../../../Components/Client/Home/UpComingSection/UpComingSection'
const Home = () => {
  return (
    <div>
      <HeroSection />
      <ElementorSection />
      <UpComingSection />
      <Curators />
      <TrendingSection />
      <Newsletter />
      <Information />
      <Populated />
      <ArtDesign />
      <ContuctHome1 />
    </div>
  )
}

export default Home
