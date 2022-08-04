import React from 'react'
import CommonLocations from '../components/CommonLocation/CommonLocations'
import Layout from '../components/Layout'
import Locations from '../components/Locations/Locations'
import Operations from '../components/Operations/Operations'
import Search from '../components/Search/Search'
import Testimonials from '../components/Testimonial/Testimonials'

const HomePage = () => {
  return (
    <Layout>
      <Search />
      <Locations />
      <Testimonials />
      <Operations />
      <CommonLocations />
    </Layout>
  )
}

export default HomePage