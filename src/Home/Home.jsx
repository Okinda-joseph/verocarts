import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShowcase from './CategoryShowcase'
import Register from './Register'
import Location from './Location'
import AboutUs from './AboutUs'
import AppStore from './AppStore'
import Sponsor from './Sponsor'

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeCategory />
      <CategoryShowcase />
      <Register />
      <Location />
      <AboutUs />
      <AppStore />
      <Sponsor />
    </div>
  )
}

export default Home